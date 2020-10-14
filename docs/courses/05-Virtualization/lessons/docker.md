# Docker

## Getting Started W/ Containers

### What is Docker

Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package.
Ok now what does that really mean? It means that instead of using an entire server to run a particular application. Docker allows you to create a container or package to run a specific service. Basically it’s virtualization without the VM or as some people refer to it as micro services.

### Why Use Docker

Docker solves issues that pertain to application dependencies. Different applications can use the same dependencies. Meaning, when apps you're installing depend on different versions of the same library, this situation can create a lot of installation challenges.
Docker helps avoid them by giving each app its own sandbox to play in – the only dependencies it sees are its own. Apps can only communicate through networking. This also helps with security since apps can't impact each other directly.

Microservices are typically really small apps, e.g. 1k lines of code. Docker is often used for things that are much more complicated like web servers, database servers, etc. Think of them as lightweight virtualization where it's not as separate as VM's because you share the operating system.

### Why Containers?

5
Docker is a standardized way of creating and managing containers. Virtualization and containers are frequently used together. E.g. you might run containers on an EC2 or GCE instance.
5

Scalable and Efficient
6
Easier to manage and more secure.
Containers can share the same OS.
OS patching is reduced if multiple containers are running on VMs or physical machines.
Operating systems are not required for each container
Clustering and application scalability can be automated
Version control and updates to containers is easy to change and deploy
Smaller footprint and resource utilization due to container efficiencies

Container Use Case Examples

7
Before containerization, people often had a box that had a web server (e.g. nginx), database server (e.g. PostgreSQL), and app (e.g. a Python or Ruby app) running all at the same time.
Some of these might share dependencies (e.g. openssl) so you will have to deal with that, which can be a pain (especially for more complicated setups, e.g. throw in Elasticsearch, Redis, Memcached, MongoDB, multiple apps in different languages, etc.).

Container Use Case Examples

8

A few things are made harder, such as some forms of IPC (inter process communication). If an app uses files, pipes, shared memory, etc. to communicate with other apps, extra configuration might be needed (or apps may need to be modified).

Environment Prep

9
Go to https://www.docker.com/ and create an account and download the latest version of docker
Once you have created an account and installed the application open a command line or terminal
From the command line run the following commands
docker (This command should list all of the docker commands available to you)
docker version (This command should list the version of docker that is installed)
docker info (This command should list all the information about your docker environment)
docker container ls (This command should list all the docker containers you have if any)

Docker Commands

10
docker run image_name - runs docker and pulls down and image if it does not exist.
docker ps - list running docker containers
docker ps -a - list all containers that you have run
docker stop xxxxxxxx - stops a container by container id or name
docker rm container-name - removes a container
docker images - list images
docker rmi image_name - removes an image by name
docker pull image_name - pulls down a docker image and does not execute the container

Docker Commands

11
docker run image_name - runs docker and pulls down and image if it does not exist.
docker ps - list running docker containers
docker ps -a - list all running containers
docker stop xxxxxxxx - stops a container by container id or name
docker rm container-name - removes a container
docker images - list images
docker rmi image_name - removes an image by name
docker pull image_name - pulls down a docker image and does not execute the container

Docker Commands

docker run image_name - runs docker and pulls down and image if it does not exist.
docker ps - list running docker containers
docker ps -a - list all running containers
docker stop xxxxxxxx - stops a container by container id or name
docker rm container-name - removes a container
docker images - list images
docker rmi image_name - removes an image by name
docker pull image_name - pulls down a docker image and does not execute the container

Docker Commands

docker exec image_name command - executes a command on a specific container that is running.
docker run image_name command - runs the image with a specific command
docker run -d image_name - runs the image in the background or detached mode
docker attach image_id - to command attaches to a specific running container
docker stop $(docker ps -a -q) - Stops all containers quietly
docker rmi image_id - removes a specific image from your system
docker rmi $(docker images -q) --force - removes all docker images by force

Container interaction

docker run busybox ping 8.8.8.8 - runs the busybox container with a continuous ping to google's DNS servers.
docker exec container_id cat /etc/shadow - executes the command on a specific container that is running and displays the list of user accounts configured on that container.
docker exec container_id sh - executes the command on a specific container that is running gives you a shell to interact directly with the container

Container interaction (cont)

Run these 3 command in 2 separate terminal tabs
docker run redis - this command starts a container running redis
docker ps - this command list the running container that you need to grab the container ID from
docker exec -it xxxxxxxxxxxx redis-cli - this command executes the redis-cli client on the running container you just started.Remember xxxxxxxxxxxx represents the container ID you specified in your docker ps command

Container Isolation

By default containers do not interact with one another and this is by design. Lets prove this by running 2 copies of the same kind of container in separate terminal tabs.
docker run -it busybox sh - run this command in the first tab of your terminal
docker run -it busybox sh - run this command in the second tab of your terminal
ls -al- run this command in the first and second tab of your terminal. Each look similar correct?

Container Isolation

touch testfile.txt - run this command in the first tab of your terminal
ls -al- run this command in the first and second tab of your terminal. Do they still look the same?
Why are they different now?
Do you understand what isolation is now?

### Questions?

---

Did run into any issues running any of the commands?

Do you understand how and why you may want to use containers?

What was interesting about this exercise?

Can you run a container, access, interact with it, shut it down, remove it, and run commands in it?

## React App W/ Dynamic Content

Docker
React app with dynamic content
Alfonso Hooker
CEO & Founder
TekPerfect
alfonso@tekperfect.com
(415) 302-7037

Environment Prep
www.tekperfect.com
2

Create an empty directory inside of your local directory called containers if you have not already created one and name it react
Change directories (cd) into the new directory called react, and cd into that folder.
Please make sure to install node via brew install node or install node from the binaries located on the Nodejs website.
To verify that node is installed please run the following command “node -v”

Create the React app
www.tekperfect.com
3

To create the React template please run the followsing command npx create-react-app react-temp
This command will start the process of building the React app template
To verify that the app template build was successful please run the following commands
npm run test (This command will launch the test framework for the application to ensure the test criteria is met.)

Create the React app
www.tekperfect.com
4

To build the React app template run the following command npm run build
This command will start the process of building the React app template.
The final verification step is to run npm run start. This command will start the application and open it via a browser going to http://localhost:3000
Now that you have a working React app template you can now start the process of building the container.

React app container
www.tekperfect.com
5

To get started with building a container you will need to create a new Dockerfile.dev in the react-temp folder where the other files associated with the React app are located.
We will explain later why we are not using the native Dockerfile to build the container.
To build the app with the Dockerfile.dev will need to execute the following command.
docker build -f Dockerfile.dev .

React app build
www.tekperfect.com
6

Now that the build is complete you may notice that in the directory we have a node_modeules folder that has approximately 150 MB of dependencies.
To make our build run faster we are going to get rid of the folder.
How do you do that?
You can do that by running a rm command on the folder. (Please note using the rm command incorrectly can damage your operating system or remove data or code you actually want.

React app run
www.tekperfect.com
7

Now lets run the container we just built. Do you remember the command?
docker run xxxxxxxxxxxx (Where xxxxxxxxxxxx is the container ID).
Now when you try to access it from your browser you can't get to it. Why?
We did not map a local port to the containers ports for redirection. Do you know the command to do that?
docker run -dit -p 3000:3000 xxxxxxxxxxxx

Dynamic React app
www.tekperfect.com
8

Now lets run the container we just built. Do you remember the command?
Let's go to the src directory and modify the App.js file in the src directory. This directory is a subdirectory in the react-temp directory.
Now change the text of the line between the <p> and the </p> to something interesting or funny.
You will note that the text in the app does not reflect your change. Why?

Dynamic React app
www.tekperfect.com
9

The app must be rebuilt to reflect the changes or we must find another way to get the app to load the new file or merge the changes
To do this we are going to use a concept called volumes which will allow us to abandon copying of the files and create references to the files on our local system
To accomplish this you need to run the following command docker run -dit -p 3000:3000 -v /host/directory:/container/directory xxxxxxxxxxx

Dynamic React app
www.tekperfect.com
10

Now make changes to the file again and they should be reflected in the React App
Now let's see if we can make the command syntax easier to run
We can accomplish this by using docker-compose
To use docker-compose we need to create a docker-compose.yml
Now let's breakdown the section of this file that is different from our other docker-compose.yml files specifically the 'build:' section.

Dynamic React app (explained)
www.tekperfect.com
11

Before this section we only had a . which specified to build the project in the current working folder.
However, since we are not using a standard Dockerfile but instead a Dockerfile.dev file we have to specify different options.
In order to make sure the code works we need to specify a 'context:' section and a 'dockerfile:' section.
Now run the docker-compose up --build command and your project should build correctly.

Wrapping up
www.tekperfect.com
12

To verify the code is working correctly you should make a change to the text and see if the webapp is updated automagically ;-)

Questions?
www.tekperfect.com
13
Do you think you understood all the changes you made to get the builds to work?

Would you be comfortable with explaining the various aspects of dynamic changes?

What other things you think would be useful to better understand this exercise?
Did all of your code work?

Did you run into any issues you were unable to troubleshoot?
