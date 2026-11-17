# Kubernetes (From Containers to Orchestration)

In the [Docker lesson](/courses/06-Virtualization/lessons/docker.md) you learned to build, run, and manage containers **one at a time**. This lesson picks up exactly where that left off and answers the next question every team eventually hits:

> *"I can run one container by hand. How do I run **many** of them reliably — so they restart when they crash, find each other, and scale up — without babysitting each one?"*

That job is called **orchestration**, and **Kubernetes** (often written **K8s** — "K", eight letters, "s") is the tool the industry settled on to do it.

# 🎯 Prerequisites

* [Docker](/courses/06-Virtualization/lessons/docker.md) — you must be comfortable with `docker run`, `docker ps`, `docker exec`, and `docker build`.
* Docker Desktop installed and working (`docker info` succeeds).
* A terminal and comfort editing text files.

# 🏆 Learning Outcomes

By the end of this lesson you will be able to:

1. Explain **why** an orchestrator exists and what problems it solves that plain Docker does not.
2. Describe the core Kubernetes objects — **cluster, node, pod, deployment, service, namespace** — in plain language.
3. Translate the Docker commands you already know into their `kubectl` equivalents.
4. Create a throwaway cluster with **kind**, deploy an app from a YAML file, inspect it, scale it, reach it, and tear it down.
5. Walk into the **[Security K8s Vulnerability Lab](/courses/08-Security/lessons/k8s-security-lab.md)** already knowing how to list and manage pods.

---

## 1. Why orchestration? (the "aha")

Imagine you ran your web app with:

`docker run -d -p 8080:80 my-web-app`

Now the real world happens:

- The container **crashes** at 2 a.m. Nobody is awake to run `docker run` again. Your site is down until morning.
- Traffic **spikes**. You need five copies, not one — and something has to share traffic across them.
- You deploy a **new version** and it's broken. You want to roll back in seconds, not panic.
- Your app needs to **find** the database container by name, even though its IP changes every restart.

Doing all of that by hand does not scale. Kubernetes does it for you. You tell it the **desired state** ("I want 5 copies of this app running, always"), and Kubernetes works continuously to make reality match that description — restarting, replacing, and rescheduling containers as needed. This is called a **declarative** model, and it's the single most important idea in Kubernetes.

> [!NOTE]
> **Docker = how to run *a* container. Kubernetes = how to keep *fleets* of containers running the way you declared.** K8s still uses container images — the exact same images you built with Docker. It just runs and manages them for you.

---

## 2. The vocabulary (mapped to what you already know)

| Kubernetes term | Plain-language meaning | Docker analogy |
|---|---|---|
| **Cluster** | The whole system — one or more machines managed together. | Your whole Docker host, but possibly many machines. |
| **Node** | A single machine (VM or physical) in the cluster that runs containers. | The computer Docker is installed on. |
| **Pod** | The smallest unit K8s runs: **one (or a few) containers** that share a network address. | ~ One `docker run`. 99% of the time, one container = one pod. |
| **Deployment** | A rule that says "keep N copies of this pod running, of this version." | A manager that re-runs `docker run` for you and keeps it alive. |
| **ReplicaSet** | The thing a Deployment uses under the hood to maintain the copy count. | (No direct equivalent — it's automatic.) |
| **Service** | A **stable name + IP** in front of pods, so other apps can reach them even as pods come and go. | `docker run --link` / a fixed DNS name. |
| **Namespace** | A labeled "folder" that groups and isolates objects. | Like separate projects on one host. |
| **kubectl** | The command-line tool you use to talk to the cluster. | `docker` CLI. |
| **YAML manifest** | A text file describing what you want. You `apply` it. | A `Dockerfile` / `docker-compose.yml`, but for running state. |

Say these out loud once: **"A *deployment* keeps *pods* running on *nodes*, and a *service* gives those pods a stable address."** That one sentence is 80% of Kubernetes.

---

## 3. The Docker → kubectl "Rosetta Stone"

You already know the Docker commands. Here is the same intent expressed in Kubernetes. Keep this table handy — it is the bridge between the two lessons.

| Intent | Docker (what you know) | Kubernetes (`kubectl`) |
|---|---|---|
| Run an app | `docker run -d nginx` | `kubectl create deployment web --image=nginx` |
| List what's running | `docker ps` | `kubectl get pods` |
| List with details/IPs | `docker ps -a` | `kubectl get pods -o wide` |
| See the logs | `docker logs <id>` | `kubectl logs <pod>` |
| Follow logs live | `docker logs -f <id>` | `kubectl logs -f <pod>` |
| Get a shell inside | `docker exec -it <id> sh` | `kubectl exec -it <pod> -- sh` |
| Inspect details | `docker inspect <id>` | `kubectl describe pod <pod>` |
| Run more copies | run it again, N times | `kubectl scale deployment web --replicas=5` |
| Stop / remove it | `docker rm -f <id>` | `kubectl delete deployment web` |
| Create from a file | `docker compose up -f file.yml` | `kubectl apply -f file.yaml` |

> [!TIP]
> Notice the pattern: `kubectl <verb> <type> <name>`. Almost everything is `get`, `describe`, `logs`, `exec`, `apply`, `delete`, or `scale` against a **type** (`pods`, `deployment`, `svc`, `namespace`) and a **name**. Learn that shape and the rest is vocabulary.

---

## 4. Environment prep — a cluster on your laptop with `kind`

To learn Kubernetes you need a cluster. You do **not** need the cloud or a rack of servers — you will run a whole cluster *inside Docker* on your own laptop using a tool called **kind** ("**K**ubernetes **IN** **D**ocker"). This is the same tool the security lab uses, so what you learn here transfers directly.

> [!NOTE]
> **Why kind?** It spins a real Kubernetes cluster up and down in seconds, it's free, and it runs on top of the Docker you already installed. (An older alternative is **minikube**, which runs the cluster in a VM. kind is lighter and is what our labs standardize on.)

**Install the tools.**

<!-- tabs:start -->

#### **macOS**

```bash
brew install kind kubectl
```

#### **Windows (WSL 2 / Ubuntu)**

```bash
# install kubectl
sudo apt-get update && sudo apt-get install -y kubectl
# install kind
[ "$(uname -m)" = x86_64 ] && curl -Lo ./kind https://kind.sigs.k8s.io/dl/latest/kind-linux-amd64
chmod +x ./kind && sudo mv ./kind /usr/local/bin/kind
```

<!-- tabs:end -->

**Verify** (both should print a version):

`kind version`
`kubectl version --client`

**Create your first cluster:**

`kind create cluster --name learn`

**Check the cluster is alive** — this is your first real `kubectl` command:

`kubectl get nodes`

You should see one node named `learn-control-plane` with status `Ready`. **You just created a Kubernetes cluster.** 🎉

---

## 5. Deploy an app the quick way (imperative)

"Imperative" means you give commands one at a time — just like `docker run`.

1. Create a deployment running nginx (a web server):

`kubectl create deployment nginx-demo --image=nginx:1.27-alpine`

2. See what was created:

`kubectl get deployment`
`kubectl get pods`
`kubectl get replicaset`

3. Watch the pod come to life (press `Ctrl-C` to stop watching):

`kubectl get pods -w`

4. Read its logs and look inside it — exactly like `docker logs` / `docker exec`:

`kubectl logs deploy/nginx-demo`
`kubectl exec -it deploy/nginx-demo -- sh`

(type `exit` to leave the shell)

> [!NOTE]
> You referred to the pod as `deploy/nginx-demo` instead of its full random name (e.g. `nginx-demo-749bc9f6fb-rvxg2`). Pod names change on every restart; targeting the **deployment** always resolves to the current pod. You will use this trick constantly in the security lab.

5. **Prove the "self-healing" magic.** List pods, then delete one and watch Kubernetes immediately replace it to honor your "1 replica" rule:

`kubectl get pods`
`kubectl delete pod <paste-the-pod-name>`
`kubectl get pods`

A new pod appears within seconds. **You never asked for that** — the deployment did it because the desired state said "1 pod should exist." That is orchestration.

---

## 6. Deploy the declarative way (from a file)

Real teams don't type commands — they keep the desired state in a **YAML file** in version control (remember [Version Control](/courses/04-Version_Control/home.md)?) and `apply` it. Here is the same nginx app as a file:

[nginx-deployment.yaml](/courses/06-Virtualization/lessons/nginx-deployment.yaml)

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-demo
  namespace: default
spec:
  replicas: 1            # how many copies to keep running
  selector:
    matchLabels:
      app: nginx
  template:              # the "recipe" for each pod
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:1.27-alpine   # the Docker image you already know
          ports:
            - containerPort: 80
```

Read it top to bottom: *"I want a **Deployment** that keeps **1 replica** of a **pod** running the **nginx:1.27-alpine** image, listening on port **80**."* Every field maps to something you already understand from Docker.

Apply it:

`kubectl apply -f nginx-deployment.yaml`

Change `replicas: 1` to `replicas: 3` in the file, save, and apply again:

`kubectl apply -f nginx-deployment.yaml`
`kubectl get pods -o wide`

Three pods now. You changed a number in a file and the cluster reshaped itself to match. Notice each pod has its **own IP** in the `-o wide` output — remember that for the security lab, where scanning those pod IPs is the whole exercise.

---

## 7. Reaching your app — Services & namespaces

Pods are disposable and their IPs change, so you never talk to a pod directly in production. You put a **Service** in front of them to get a stable address:

`kubectl expose deployment nginx-demo --port=80 --name=nginx-svc`
`kubectl get svc`

To open it in your browser from your laptop, forward a local port to the service (`Ctrl-C` ends it):

`kubectl port-forward svc/nginx-svc 8080:80`

Then visit http://localhost:8080 — the nginx welcome page. (This `port-forward` trick is exactly how you'll open the scan **report viewer** in the security lab.)

**Namespaces** group related objects. Everything above lived in the `default` namespace. The security lab puts all its targets in a namespace called `cve-lab`, which is why nearly every command there ends in `-n cve-lab`:

`kubectl get namespaces`
`kubectl get all -n default`

---

## 8. Clean up

Tear down what you made — just like `docker rm`:

`kubectl delete -f nginx-deployment.yaml`
`kubectl delete svc nginx-svc`

Or throw away the entire cluster in one shot (kind makes this cheap and safe):

`kind delete cluster --name learn`

---

## ✅ Checkpoint — can you do these?

- [ ] Explain, in one sentence, the difference between Docker and Kubernetes.
- [ ] Create a kind cluster and confirm the node is `Ready`.
- [ ] Deploy nginx, list the pods, read the logs, and get a shell inside a pod.
- [ ] Delete a pod and explain why a new one appears.
- [ ] Scale to 3 replicas by editing a YAML file and re-applying it.
- [ ] Reach the app in your browser with `port-forward`.
- [ ] Translate `docker ps`, `docker logs`, and `docker exec` into `kubectl`.

**Questions to discuss**

What did the deployment do when you deleted a pod, and why?

Why do we talk to a **service** instead of a **pod** directly?

How is a YAML manifest like a `Dockerfile`, and how is it different?

---

## ➡️ Where this leads: the Security K8s Lab

You can now run and manage a fleet of containers. In the Security course you'll use these exact skills for defensive security: you'll stand up a cluster full of **intentionally vulnerable** targets, scan them from *inside* the cluster, and produce a ranked vulnerability report with the `cve-recon` tool.

Everything you practiced here — `kubectl get pods -o wide`, `logs`, `exec`, `scale`, `port-forward`, namespaces — is exactly what you'll use there.

Continue to: **[Security → cve-recon](/courses/08-Security/lessons/cve-recon.md)** and then **[Security → Kubernetes Vulnerability Lab](/courses/08-Security/lessons/k8s-security-lab.md)**.
