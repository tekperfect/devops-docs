Verify that you have components need to run the cluster

# Install virtualbox from https://www.virtualbox.org/
# Install minikube (also installs kubectl which is a dependancy)
'brew install minikube'

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

# Applying configuration files to create deployment
'kubectl apply -f config-file.yaml'
'kubectl apply -f nginx-deployment.yaml'










