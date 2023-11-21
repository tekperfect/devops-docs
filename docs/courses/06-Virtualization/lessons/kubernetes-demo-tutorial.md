Verify that you have components need to run the cluster

# Install virtualbox from https://www.virtualbox.org/
# Install minikube (also installs kubectl which is a dependancy)
`brew install minikube`

# Start Minikube

'minikube start --vm-driver=virtualbox'

# Verify that components are installed correctly both should output the various option you can run with each command

'kubectl'
'minikube'

#Provides a status of the cluster
'kubectl get nodes'
'minikube status'

# Check version of Kubectl you are running
'kubectly version'

# List Services of  Kubectl
'kubectl get services'

# Create components using Kubectl example syntax
kubectl create deployment NAME --image=image [--dry-run] [options]

# Create components using Kubectl working syntax with a default Nginx image and ngix-depl as deployment name
kubectl create deployment ngix-depl --image=nginx

# Review what deployment was created
'kubectl get deployment'

# Review what pod(s) were created
'kubectl get pods'

# Review replicaset to understand components of deployment
'kubectl get replicaset'

# Edit the deployment that is currently running if any changes a made to the deployment the pods will be redeployed based on the change
'kubectl edit deployment'

# Obtain logs of deployment requires the command kubectl logs and the pod name
'kubectl logs pod-name'
'kubectl logs ngix-depl-749bc9f6fb-rvxg2'

# Interact with container
'kubectl exec -it pod-name -- bin/bash'
'kubectl exec -it mongo-depl-85ddc6d66-l7kl9 -- bin/bash'

# delete a deployment
'kubectl delete depolyment deployment-name'
'kubectl delete deployment ngix-depl'

# delete a service
'kubectl delete svc service-name'
'kubectl delete svc mongodb-service'

# Applying configuration files to create deployment
'kubectl apply -f config-file.yaml'
'kubectl apply -f nginx-deployment.yaml'

# List pods with IP address and additional information
'kubectl get pods -o wide'

# Obtain additional information about deployment
'kubectl get deployment nginx-deployment -o yaml'

# Base64 encode a username and password
'echo -n 'username' | base64'
'echo -n 'password' | base64'

# When applying yaml files secrets or other required components for deployment must be created first
'kubectl apply -f secret.yaml'
'kubectl apply -f mongo-secret.yaml'

# Obtain IP for pending Cluser IP when running minikube or type minikube IP and use that IP along with the nodePort number
'minikube service service-name'
'minikube service mongo-express-service'

# List all namespaces
'kubectl get namespaces'

# Create a namespaces
'kubectl create namespaces namespace-name'

# Namespace Definitions
# kube-system is a default namespace that should not be used or modified in anyway and control system process
# kube-public contains publically accessiable data and includes a configuration map and cluster information that is accessiable without authenication to view it you can run the command 'kubectl cluster-info'
# kube-node-lease holds the information about heartbeats of the nodes
# default is the namespace used by default for objects created K8's

# Grouping similar object types in namespaces makes it easy to manage resources
# List resources that are bound and not bound to namespaces
'kubectl api-resources --namespaced=false'
'kubectl api-resources --namespaced=true'

# To apply a pod or service to a namespace use the following method or add it to the metadata section of config file
'kubectl apply -f config-name.yaml --namespace=new-namespace'

#kubectx is a set of tools to manage namespaces
# Change the default namespace
'kubens new-namespace'

#List Ingress of all or specific namespaces
'kubectl get all -n namespace-name'
'kubectl get ingress  -n namespace-name'
'kubectl get all -n kubernetes-dashboard'
'kubectl get ingress -n kubernetes-dashboard'

# Command to obtain token for dashboard admin
'kubectl -n kubernetes-dashboard describe secret $(kubectl -n kubernetes-dashboard get secret | grep dashboard-admin | awk '{print $1}')'

# Command  to launch the dashboard for Kubernetes
'kubectl proxy'

#Command to add an initial password for a kubernetes wordpress with MySQL deployment
kubectl create secret generic mysql-pass --from-literal=password=password

#Command to see what node port a particular application is running on
minikube service --all
