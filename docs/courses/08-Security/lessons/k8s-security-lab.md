# Kubernetes Vulnerability Lab (Capstone)

This is where everything connects. You'll stand up a **Kubernetes cluster full of intentionally vulnerable targets**, scan them from *inside* the cluster, produce a ranked vulnerability report with **cve-recon**, and then identify and exploit the weak hosts — the full **discover → scan → report → exploit** workflow a security professional runs, but safely, on your own laptop.

It pulls together three things you've already learned:

- **Docker** — the lab's targets are container images. ([Virtualization → Docker](/courses/06-Virtualization/lessons/docker.md))
- **Kubernetes** — the lab runs on a `kind` cluster; you'll list, inspect, and manage pods. ([Virtualization → Kubernetes](/courses/06-Virtualization/lessons/kubernetes.md))
- **Security / cve-recon** — you'll scan and rank, then exploit. ([Security → cve-recon](/courses/08-Security/lessons/cve-recon.md))

> [!WARNING]
> **Authorized training use only.** This lab deploys *intentionally vulnerable* images with weak or no authentication. Run it **only** on your own laptop or an isolated lab cluster. **Never** expose it to a production network, a shared cluster, a VPN you share with others, or anything reachable from the internet. Tear it down when you're finished.

# 🎯 Prerequisites

* [Virtualization → Docker](/courses/06-Virtualization/lessons/docker.md) and [Kubernetes](/courses/06-Virtualization/lessons/kubernetes.md) — you can create a `kind` cluster and run `kubectl get pods`, `logs`, `exec`, `scale`, and `port-forward`.
* [Security → cve-recon](/courses/08-Security/lessons/cve-recon.md) — you understand the scan → correlate → rank pipeline and the risk tiers.
* Docker Desktop with at least **8 GB RAM** and **30 GB** free disk allocated.
* Access to the **`cve-recon-k8s-lab`** repository (private — ask your instructor for a GitHub invite or the distribution zip). The repo ships a **`STUDENT-CHECKLIST.md`** with laptop requirements and the exact commands for macOS and Windows — keep it open alongside this lesson.

# 🏆 Learning Outcomes

By the end of this capstone you will be able to:

1. Deploy a multi-service vulnerable environment into Kubernetes with a single command.
2. Enumerate the "devices" in a cluster and tell the vulnerable hosts apart from ordinary infrastructure.
3. Run an authorized scan from a scanner pod *inside* the cluster and generate a ranked cve-recon report.
4. Identify the intended targets, exploit at least one, and capture proof.
5. Flag **misconfigurations** (e.g. unauthenticated databases) as well as classic exploitable boxes.

---

## 1. What the lab looks like

Everything deploys into one Kubernetes namespace called **`cve-lab`**. You get a mix of **intentionally vulnerable targets** and **ordinary production-style infrastructure** — because telling them apart *is the exercise*:

| Role | Examples in the lab | Why it's there |
|---|---|---|
| **The vulnerable target** | `metasploitable2` | The canonical exploitable Linux box — your main playground. |
| **A vulnerable appliance** | virtual CUPS printer | Default-credential / IPP target. |
| **Realistic "distractors"** | PostgreSQL, XWiki, a PHP app | Ordinary services that make discovery realistic. |
| **Misconfigured services** | MongoDB (no auth), Redis (no password) | Not "Metasploitable," but *misconfigured* — you should flag these. |
| **Network appliances** | Open vSwitch (OVSDB) | Management-plane exposure to discuss. |
| **The scanner** | a Kali + nmap + Metasploit + cve-recon pod | Your attack box, living *inside* the cluster. |

The clever part: the scanner pod uses the Kubernetes API (read-only) to discover the **live pod IPs** of its lab-mates and scans those directly — so you see **every** open port, not just the ones a Service advertises. That's the same pod-IP idea you saw with `kubectl get pods -o wide` in the Kubernetes lesson.

---

## 2. Stand up the lab

From the `cve-recon-k8s-lab/k8s-lab` folder (full install steps and the macOS/Windows requirements are in that repo's **`STUDENT-CHECKLIST.md`**):

```bash
# 1. a dedicated, throwaway cluster (recommended)
make cluster

# 2. build + load the two custom images (the Kali scanner and the CUPS printer)
CLUSTER=cve-lab make images

# 3. deploy all the targets
CLUSTER=cve-lab make up
```

Confirm your "device inventory" is up — and note you are **not** told which hosts are vulnerable:

```bash
kubectl -n cve-lab get pods -o wide
```

> [!TIP]
> This is the `kubectl get pods -o wide` you practiced in the Kubernetes lesson — same command, real targets. The `-n cve-lab` just scopes it to the lab's namespace.

---

## 3. Scan from inside the cluster

```bash
CLUSTER=cve-lab make scan
```

Under the hood this runs, inside the scanner pod, the same pipeline you learned in the cve-recon lesson: enumerate the live pod IPs → `nmap -sV --script vulners` against them → hand the XML to cve-recon → write a ranked report.

Open the report in your browser (this is the `port-forward` trick from the Kubernetes lesson, wrapped in a Make target):

```bash
CLUSTER=cve-lab make reports    # then open http://127.0.0.1:8088/
```

---

## 4. The analysis — which hosts, and why?

Read the ranked report and answer the analyst's core questions:

1. **Which hosts are exploitable, and why?** Separate the dense, old, obviously-vulnerable box (lots of ancient services, many HIGH/CRITICAL findings) from the ordinary database/app/appliance tier.
2. **What's *misconfigured* even if it isn't "Metasploitable"?** The MongoDB with no authentication and the Redis with no password aren't classic exploit targets — but leaving them open is a real-world mistake you should flag.
3. **Which findings are confirmed vs. candidates?** Remember from the cve-recon lesson: version-only matches are *candidates to verify*, while KEV-listed / known-exploited findings are higher confidence. Rank accordingly.

---

## 5. Exploit (the payoff)

The scanner pod has Metasploit installed. Drop into it — the same `kubectl exec` you learned on nginx, now against your Kali box:

```bash
kubectl -n cve-lab exec -it deploy/cve-recon -- bash
msfconsole
```

Use the ranked report to pick a target and its pod IP (the lab writes a friendly name → pod IP map to `reports/inventory.txt`). The exploitation techniques are the ones from [Metasploit Labs](/courses/08-Security/lessons/metasploit-labs.md) — vsftpd backdoor, Samba usermap, UnrealIRCd backdoor, and so on — now against containers instead of a VM. Capture proof (a shell, a file you shouldn't be able to read).

> [!NOTE]
> **`metasploitable2` runs under emulation** on Apple Silicon Macs, so you may see its restart count climb in `kubectl get pods`. That's expected — it stays scannable and exploitable. Everything else should sit at 0 restarts.

---

## 6. Manage and troubleshoot (kubectl skills in action)

Real clusters misbehave; triaging them *is* the DevOps security skill. Everything here is from the Kubernetes lesson:

```bash
# why is a pod unhappy? check its events and recent state:
kubectl -n cve-lab describe pod <pod-name>

# read a target's logs (previous container too, if it crash-looped):
kubectl -n cve-lab logs deploy/metasploitable2
kubectl -n cve-lab logs --previous deploy/metasploitable2

# turn a noisy/unneeded service off, then back on:
kubectl -n cve-lab scale deploy/<name> --replicas=0
kubectl -n cve-lab scale deploy/<name> --replicas=1
```

---

## 7. Tear down

```bash
CLUSTER=cve-lab make down             # remove the lab, keep the cluster
make destroy-cluster                  # or delete the whole kind cluster
```

---

## ✅ Capstone checklist

- [ ] Deployed the lab and listed all pods with their IPs.
- [ ] Ran a scan from inside the cluster and opened the ranked report.
- [ ] Correctly separated the vulnerable target(s) from the ordinary infrastructure.
- [ ] Flagged the unauthenticated MongoDB and Redis as misconfigurations.
- [ ] Exploited at least one target and captured proof.
- [ ] Used `describe`, `logs`, and `scale` to inspect/manage a pod.
- [ ] Tore the lab down cleanly.

**Reflection**

How is scanning a Kubernetes cluster similar to, and different from, scanning the single Metasploitable VM?

Why does scanning the **pod IPs** reveal more than scanning the Services?

A security review flags your MongoDB as "critical — no authentication." It was never exploited by an attacker. Is the finding still valid? Why?

How would you apply this discover → scan → report → exploit workflow to a real (authorized) client engagement?

---

### Instructor note

An instructor answer key (which hosts are the intended targets, representative CVEs/exploits, and grading hooks) ships in the lab repository as **`INSTRUCTOR-ANSWER-KEY.md`** — keep that away from students.
