# Jenkins (CI/CD Pipeline) 

## 1.Initial Setup

### What is Jenkins and Why is it so widely used?
Jenkins is a CI/CD platform, which means that it allows users to Integrate (Build, Compile, Test etc), and Deliver (Deploy, Upload, Publish) code from different resources in one single platform. A quick search can show you a list of alternatives, but the reason Jenkins is so widely used because it is open source, and the community had worked hard to create and maintain very useful plugins. One day will come when a definite alternative arrives and Jenkins becomes obsolete, but even then, learning to use Jenkins and it's functionalities will provide very useful and transferable knowledge on how to create and manage CI/CD platforms.
### Installation and Prep

Jenkins can be setup as either a Java .Jar (Java ARchive) application or as a Docker container.
To run Jenkins as an application, it is necessary to Download the JRE (Java Runtime Environment).
This Method is non-persistent, and so the best way is to launch it as a Docker Container. We will run this on AWS, but let's first try to run it in our Local Machine (Localhost).

The Docker Image can be Downloaded from your Terminal
```
docker image pull jenkins/jenkins:lts
```
The Next Step is to run the container:
```
docker container run -d \
    -p [YOUR PORT]:8080 \
    -v [YOUR VOLUME]:/var/jenkins_home \
    --name jenkins-local \
    jenkins/jenkins:lts
```
Some comments about your command arguments
For '-p', try to use a port that is available (8081, 8082 ...). This important as selecting a port that already is being used It can cause conflicts not only for Jenkins, but for whatever other service is operating in that port. Port 8080 is used for for both web traffic and http proxies.

A general way to check if something is already using the port is to open it on a web browser (Ex. type localhost:8081 or whatever port you choose) and see if you get a response.

For a more thorough approach, Windows, Linux and Mac offer tools to verify you port status.

For Windows type 
``` 
netstat -ab
``` 
For Linux:
```
netstat -tulpn | grep LISTEN
```
For Mac
```
lsof -i -n -P | grep LISTEN.
```
For '-v' Choose a name for this Jenkins Instance (Ex. Jenkins1)
A Volume is important because it is where all your information will be stored. It will be accessible even if your Jenkins Instance fails.

After this step is completed, and you will be able to see you Jenkins Instance by typing your Localhost:PORT on any web browser

### Admin Configuration

The First thing you will notice is that Jenkins will request you to input the master password in order to unlock the instance. You can find this password on your command line by typing:
```
docker container exec \
    [CONTAINER ID or NAME] \
    sh -c "cat /var/jenkins_home/secrets/initialAdminPassword"
```
(You can Find your CONTAINER ID & NAME by typing `Docker ps`)

Then, follow the steps by installing the suggested plugins (We will talk about plugins later) and keep the Jenkins url to the default Localhost:PORT.

And there you have it, your own Jenkins instance.

## 2.The Dashboard
### Manage Jenkins 

#### System Configuration
1. Configure System:\
This is the control center of your Jenkins instance. It should only be accessed by the Admin since any change affects the whole system. I will explain most of these options as we learn more about the infrastructure. Also, keep in mind that more options will become available the more plugins we install.
2. Global Tool Configuration :\
This is were we configure third party tools/apps that you or your org might want to use with a specific version.
3. Plugin Manager:\
The Plugin Manager is one of the most powerful parts of Jenkins. A wide array of software tools have been created by the OSS community and will make your CI/CD infrastructure more robust. We will be using some of the most important ones, but the most important thing to remember is that Plugins also come with Versions, which means that they are interdependent and changes (Updates) to a plugin can affect others as well. Moreover, Upgrading your Jenkins version (which you will constantly need to, due to the continuing security patches) will also make some plugins incompatible. 
- Here is where the mention of a Staging server first becomes important. It is always considered best practice to keep a copy of your production Jenkins environment purely for the purpose of making upgrades and making sure the overall environment remains stable.
- If your Jenkins instance sits on a server with a corporate network, you might have trouble downloading plugins unless you setup the configuration for the HTTP proxy under the Advanced option.
- Updating plugins will require Jenkins to "Reboot", something it can only do when no Jobs are running on the server. Make sure you schedule updates so that no one is affected by it.
- We will cover the creation of new plugins for the more advanced part of this course.

4. Manage Nodes and Clouds:\
This page gives you an overall view of all your working nodes ( which we will explain later). You can monitor their health, remove, modify and reboot them depending on the issues they are facing.
#### Security
1. Configure Global Security: \
Let's skip Global Security for now as this page is likely the most important part of Jenkins and requires it's own chapter to explain its intricacies fully.
2. Manage Credentials: \
This is the place where you store credentials, suc as Git tokens, API ID and Secrets, Username/password combinations and more. Stored credentials are masked and can be used by anyone who had access to Configure or Build Jobs. 
- When storing credentials you should also provide the __ID__ (The credential's nickname) and __Description__ options. They are necessary so the users know what are each of these credentials are when selecting them in their projects. Providing these two options is also best practice since if omitted, Jenkins will provide random values for its ID and make it ambiguous for the users.
- We will learn of manipulate these credentials better on the __Declarative Pipeline__ section, as Jenkins provides a plugin that allows us to instantiate and access these credentials within a Job (Ex. Passing a credential to a variable in order to call a REST Api.)
- Another good best practice is to make sure only service accounts are added to the credentials page, and prevent individuals from adding their own credentials. User credentials and Tokens usually have expiry dates, and it could be detrimental and not to say messy, that Jobs rely on these types of credentials to build. Always think about what you can do to make a system more stable.

3. Configure Credential Providers:\
This page allows you to disable credential type options. Not really necessary if your Admin team doesn't allow normal users to create their own credentials.
4. Manage Users
If you or your Admin team Have an authentication (Ex: LDAP) system in place, there is no need to worry about this page, unless the Admin team wants to maintain specific elevated accounts for Admins in different sites.
#### Status Information
1. System Information:\
Provides you with a list of names for System properties, environment variables, and Plugins. They will come in handy when your Job experiences failures, since the return status will provide information about what went wrong. 
- Another thing to take from this page is that the Jenkins Environment Variables can be used in your Jenkins jobs just as you would any other environment variables you create for your jobs.
2. System Log
### Build Executors




### Verify Environment

## 3.Pipelines
### Create your first job

## 4. Shared Libraries Architecture

## Live OPS

## Debugging and Development
