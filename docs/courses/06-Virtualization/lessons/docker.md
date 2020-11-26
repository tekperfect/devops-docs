# Docker (Getting started with containers)

**Docker** is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package.

Ok now what does that really mean? It means that instead of using an entire server to run a particular application. Docker allows you to create a container or package to run a specific service. Basically itâ€™s virtualization without the VM or as some people refer to it as micro services.


Docker solves issues that pertain to application dependencies. Different applications can use the same dependencies. Meaning, when apps you're installing depend on different versions of the same library, this situation can create a lot of installation challenges.

Docker helps avoid them by giving each app its own sandbox to play in â€“ the only dependencies it sees are its own. Apps can only communicate through networking. This also helps with security since apps can't impact each other directly.


**Microservices** are typically really small apps, e.g. 1k lines of code. Docker is often used for things that are much more complicated like web servers, database servers, etc. Think of them as lightweight virtualization where it's not as separate as VM's because you share the operating system.


Docker is a standardized way of creating and managing containers. Virtualization and containers are frequently used together. E.g. you might run containers on an EC2 or GCE instance.


- Easier to manage and more secure.
- Containers can share the same OS.

OS patching is reduced if multiple containers are running on VMs or physical machines.

- Operating systems are not required for each container
- Clustering and application scalability can be automated
- Version control and updates to containers is easy to change and deploy
- Smaller footprint and resource utilization due to container efficiencies


## Container Use Case Examples

Before containerization, people often had a box that had a web server (e.g. nginx), database server (e.g. PostgreSQL), and app (e.g. a Python or Ruby app) running all at the same time. 

Some of these might share dependencies (e.g. openssl) so you will have to deal with that, which can be a pain (especially for more complicated setups, e.g. throw in Elasticsearch, Redis, Memcached, MongoDB, multiple apps in different languages, etc.).


### Container Use Case Examples


A few things are made harder, such as some forms of IPC (inter process communication). If an app uses files, pipes, shared memory, etc. to communicate with other apps, extra configuration might be needed (or apps may need to be modified).


#### Environment Prep

1. Go to https://www.docker.com/ and create an account and download the latest version of docker

2. Once you have created an account and installed the application open a command line or terminal

3. From the command line run the following commands

**docker** (This command should list all of the docker commands available to you)  
**docker version**  (This command should list the version of docker that is installed)  
**docker info** (This command should list all the information about your docker environment)  
**docker container ls** (This command should list all the docker containers you have if any)  


### Docker Commands

**docker run image_name** - runs docker and pulls down and image if it does not exist.  
**docker ps** - list running docker containers  
**docker ps -a** - list all containers that you have run  
**docker stop xxxxxxxx** - stops a container by container id or name  
**docker rm container-name** - removes a container  
**docker images** - list images  
**docker rmi image_name** - removes an image by name  
**docker pull image_name** - pulls down a docker image and does not execute the container  


### Docker Commands

**docker run image_name** - runs docker and pulls down and image if it does not exist.  
**docker ps** - list running docker containers  
**docker ps** -a - list all running containers  
**docker stop xxxxxxxx** - stops a container by container id or name  
**docker rm container-name** - removes a container  
**docker images** - list images  
**docker rmi image_name** - removes an image by name  
**docker pull image_name** - pulls down a docker image and does not execute the container  

### Docker Commands

**docker exec image_name command** - executes a command on a specific container that is running.  
**docker run image_name command**  - runs the image with a  specific command  
**docker run -d image_name** - runs the image in the background or detached mode  
**docker attach image_id** - to command attaches to a specific running container  
**docker stop $(docker ps -a -q)** - Stops all containers quietly  
**docker rmi image_id** - removes a specific image from your system  
**docker rmi $(docker images -q) --force** - removes all docker images by force  


### Container interaction

- **docker run busybox ping 8.8.8.8** - runs the busybox container with a continuous ping to google's DNS servers.
- **docker exec container_id cat /etc/shadow** - executes the command on a specific container that is running and displays the list of user accounts configured on that container.
- **docker exec container_id sh** - executes the command on a specific container that is running gives you a shell to interact directly with the container

#### Run these 3 command in 2 separate terminal tabs

- **docker run redis** - this command starts a container running redis
- **docker ps** - this command list the running container that you need to grab the container ID from
- **docker exec** -it xxxxxxxxxxxx redis-cli - this command executes the redis-cli client on the running container you just started.

Remember xxxxxxxxxxxx represents the container ID you specified in your docker ps command



### Container Isolation


By default containers do not interact with one another and this is by design. Let's prove this by running 2 copies of the same kind of container in separate terminal tabs.

- **docker run -it busybox sh** - run this command in the first tab of your terminal
- **docker run -it busybox sh** - run this command in the second tab of your terminal
- **ls -al-** run this command in the first and second tab of your terminal. Each look similar correct?

- **touch testfile.txt** - run this command in the first tab of your terminal
- **ls -al-** run this command in the first and second tab of your terminal. Do they still look the same?

Why are they different now?

Do you understand what isolation is now?


**Questions?**

Did run into any issues running any of the commands?

Do you understand how and why you may want to use containers?

What was interesting about this exercise?

Can you run a container, access, interact with it, shut it down, remove it, and run commands in it?
