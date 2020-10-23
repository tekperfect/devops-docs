# Linux System Administration

## File Structure

Root or ground folder on any Linux OS is “/”
From the forward slash or “/” I want you to create the following folders
“cd /” “mkdir tree-trunk” “cd tree-trunk” “mkdir branches” “cd branches” “mkdir leaves”
Creating these folders demonstrates how the linux file structure works.
You have a root level folder which all other directories start from and each folder can contain a multitude of subfolders

## Command Exercises

Now that you understand the basics of navigating the linux file system please use and issue the following commands in this google document
At the end of this lab I am going to ask you all a series of questions to assess your understanding of the lab and exercise to be certain you understand the use of the commands.
Use the following document as your guide to understanding the concepts you need to be a linux system administrator.

## Creating files

Create some files in each folder using the touch command
In the trunk folder create a file called bark
In the branch folder create a file called buds
In the leaves folder create a file called maple

Now that you have the directories created us the ls command
List the files in each folder individually
List the files in each folder with one command

## Applications and Services

How do you list all services running on your linux server

How would you use the grep command to find the process ID for a specific service

How would you use the grep and ps command to locate the directory the process is running under

Configuration and Logging

Use the wget command to pull down a copy of the following website? https://tekperfect.com/

Install Apache using apt-get… what is the full command to install Apache on your Linux server?

What command would you use to change the default apache web page to point to the location of copy of the TekPerfect website? What are the two methods to accomplish this goal?

## Configuration and Logging

The next section of exercises that you will embark on involve the use and gathering of data from log files?

What is the default location of log files in linux?

How would you find unauthorized users attempting to connect to your server via ssh or http on your server?

What kind of tools could you use on your system to prevent unauthorized access to your server?


## Creating Users and Groups

Create the following users using the adduser command
Create a user named edgar
Create a user named francis
Create a user named mark
Create a user named ignacio
Create a user named sally

For example if you wanted to create a user called marsha you would type in the following command sudo adduser marsha



## Creating Users and Groups


Create the following groups by using the groupadd command
Create a group called engineering.
Create a group called finance.
Create a group called marketing.
Create a group called it.
Create a group called sales.

For example if you wanted to create a group called security you would type in the following command sudo groupadd security

## Creating Users and Groups


Add the following users to those groups by using the usermod command
Create a group called engineering and assign edgar to it.
Create a group called finance and assign francis to it.
Create a group called marketing and assign mark to it.
Create a group called it and assign ignacio to it.
Create a group called sales and assign sally to it.

For example if you wanted to add marsha to the security group you would type in the following command:  sudo usermod -a -G security marsha


Folder and Files
The root or ground folder on any Linux OS is “/”
From the forward slash or “/” you want to create the following folders
Change directory to the root by issuing this command  cd /
Now that you are at the root of your linux box you need to create the following folder department
Use the mkdir command to create the department folder 
Under the department folder you want  to create the following folders sales, marketing, it, engineering, and finance. You must use the “sudo cd department” command to change into that folder once it’s created.


## Files and Permissions 

Create a few files in each folder using the touch command
In the sales folder create a file called forecast.xls
In the engineering folder create a file called code.py
In the it folder create a file called script.py
In the marketing folder create a file called campaign.ppt
In the finance folder create a file called payroll.xls

For example if you wanted to create a file called test.txt using the touch command you type sudo touch test.txt


## Files and Permissions 


Change the department folder permission so only members can modify the files using the chgrp command. For example, if I wanted to change the ownership of the folder called security to be owned by the group called security you would issue the following command chgrp security security

Bonus task: How would you change the permission on the finance folder so only members of the finance team can see the payroll.xls file



## Files and Permissions 


Now that you have the directories created

List the files in each folder individually using the ls command
List all the files in each folder with one command. However, you need to use the ls command with a command line switch please lookup the options using the man ls command to find the various options available to you via the ls command

If you need to move up one folder use the cd .. command

## Applications and Services

For the purposes of this exercise I want you to install apache2, MySQL server, and Postgres -  Hint use the command sudo apt-get install name-of-app

Once the applications or services are installed use the command line to stop and start the services - Hint use the command sudo systemctl restart name-of-app


## Applications and Services

You can also use the command line to identify the process identifier associated with each of the services - Hint “ps -e | grep name-of-app”

Name one thing you notice about the process ID as you stop and start the service and provide one example of how to stop or kill a service. This may require additional research.


## Vet Student Activities

The following slides are for students who have been in the program for 6 months or more. If you are a new student and want to try these exercises you are welcome to do so.

Vet students these activities are designed to determine if you have mastered the basics and can expand beyond simple account management, application installs, and permissions.

What I am looking for is an understanding and explanation of these concepts along with showing that you can execute them without a great deal of assistance. 


## Applications and Services

How do you list all services running on your linux server?

How would you use the grep command to find the process ID for a specific service?

How would you use the grep and ps command to locate the directory the process is running under?


## Configuration and Logging

Now that you understand processes and the file structure how would you modify the configuration of the apache2 server and where are those files located?

How would you change the default web page for apache to reflect that you understand how to modify it's configuration?

What other commands could you use in Linux to make a copy of a website so that you did not have to build one from scratch?


## Configuration and Logging

The next section of exercises that you will embark on involve the use and gathering of data from log files?

What is the default location log files are written to in linux?

What kind of tools could you install on your system to prevent unauthorized access to your server?


## Increasing Security

Configure your Ubuntu server so that you can access if via ssh without a password but make it more secure.
Generate a key on your windows or linux system
Copy the id_ras.pub to the system and name it authorized_keys via ssh
Set the appropriate permissions on the files
Connect to the Ubuntu server with username and IP only without a password.
Why is this more secure than a standard username and password?
\


## Questions?

Did you understand all of the exercises?
Did you lookup things you did not understand or were confusing?
Did you practice the commands and use the man command along with the command to obtain more information about the command - example… “man ls” 

