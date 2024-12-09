# Kubernetes (Getting started with container orchestration)

## Kubernetes Commands

brew install minikube

brew install kubectl

minikube start -driver=docker

minikube start --driver=docker

minikube status

kubectl get node

view mongo-config.yaml

view mongo-secret.yaml

view mongo.yaml

view webapp.yaml

kubectl apply -f mongo-config.yaml

kubectl apply -f mongo-secret.yaml

kubectl apply -f mongo.yaml

kubectl apply -f webapp.yaml

kubectl get pods

kubectl get all

kubectl get configmap

kubectl get secret

kubectl get pods

kubectl describe server webapp

kubectl describe service webapp

kubectl get pod

kubectl logs

kubectl logs webapp

kubectl logs webapp-deployment-655ff6696b-dts65

kubectl get svc

minikube ip

kubectl get node -o wide

minikube ip

kubectl get pod

kubectl list pod

kubectl get pod

kubectl describe pod web-app-deployment-cbcb554ff-tqxnj

kubectl config delete-cluster default

kubectl drain web-app-deployment-cbcb554ff-tqxnj

kubectl get pod

kubectl drain web-app-deployment-8d57c944f-4t9wq

kubectl drain web-app-deployment-8d57c944f-srzbh

kubectl drain web-app-deployment-cbcb554ff-rkq98

kubectl drain web-app-deployment-cbcb554ff-tqxnj

kubectl delete node web-app-deployment-cbcb554ff-rkq98

kubectl get pod

kubectl get pods -o wide

kubectl drain minikube

kubectl drain minikube --ignore-daemonsets

kubectl drain minikube --ignore-daemonsets --force

kubectl get pod

kubectl uncordon mongo-deployment-798f55b8-8vpwl

kubectl delete web-app-deployment-8d57c944f-r8rtl

kubectl get pod

kubectl get pod -o wide

kubectl delete pod web-app-deployment

kubectl delete pod web-app

kubectl delete pod web-app-deployment-8d57c944f-r8rtl

kubectl delete pod web-app-deployment-8d57c944f-t87pl

kubectl delete pod web-app-deployment-cbcb554ff-4c8rr

kubectl delete pod web-app-deployment-cbcb554ff-4shdq

kubectl get pod -o wide

kubectl drain minikube --ignore-daemonsets --force

kubectl get pods --all-namespaces -o wide

kubectl delete node minikube

kubectl get pods --all-namespaces -o wide

minikube ip

kubectl delete -f mongo.yaml

kubectl delete -f webapp.yaml

kubectl delete -f mongo-config.yaml

kubectl delete -f mongo-secret.yaml

kubectl get pods --all-namespaces -o wide

kubectl delete pod

kubectl get pods --all-namespaces -o wide

kubectl delete --all namespaces

kubectl delete daemonsets replicasets services deployments pods rc ingress --all --all-namespaces

kubectl get pods --all-namespaces -o wide

kubectl get pods

kubectl apply -f mongo-secret.yaml

kubectl apply -f mongo-config.yaml

kubectl apply -f mongo.yaml

kubectl apply -f webapp.yaml

kubectl get pods

minikube ip

minikube status

kubectl get pods

kubectl get pods -o wide

kubectl uncordon mongo-deployment-798f55b8-4vc8t

kubectl uncordon default

kubectl uncordon

kubectl uncordon -h

kubectl get pods -o wide

history

kubectl cordon default

kubectl cordon minikube

kubectl get -h

kubectl get node

kubectl get pod

kubectl describe pods ${POD_NAME}

minikube restart

minikube 

minikube stop

minikube start

minikube status

kubectl get pod

minikube ip 

