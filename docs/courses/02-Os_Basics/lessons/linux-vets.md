# Linux For Vets

To master linux administration you should be able to do the following

- Modify configuration files of applications or services
- Add disks and partition drives
- troubleshoot netowrking issues
- Create users, groups, and assign individuals admin priviliges
- Create automated jobs using bash scripts in conjunction with cron
- Grant login permissions via ssh keys
- View and extract critical information from log files
- Display system resource utilization and identify issues with running services

===

List services running on Linux
`ps`

List all running services
`ps -e`

List all running services along with directory path associated with them which includes the process identifier
`ps -ef`

Use the ps command along with grep to find a particular service that is running

`ps -e | grep apache`

# Commands | Advanced

>  grep | search for string in files or a specified path

This command allows you to search all the files in the path you specified for the exact text string you are looking for

**\* Examples**

`grep 'string' /path-to-files`

This command allows you to search all the files in the current directory for the exact text string you are looking for

`grep 'string' *`

This command allows you to search all the files in the current directory and subdirectories for the exact text string you are looking for… Note you may need to use sudo to run this command since it may need to traverse multiple directories

`grep -r 'string' *`

This command allows you to search all the files in the current directory for the text string you are looking for ignoring case

`grep -i 'string' *`

This command allows you to search all the files in the current directory for the text string you are looking for and it displays the filename and line the specific string is found in.

`grep -w 'string' *`


This command allows you to search all the files in the current directory for the text string you are looking for, ignores the case of the string, displays the filename the specific string is found in along with displaying the string in red.

`egrep -Rwi --color 'string' *`

This command allows you to search all the files in the current directory for the text string you are looking for, and only displays the filename and the text string you searched for.

`grep -o 'string' *`

This command allows you to search all the files in the current directory for the text string you are looking for, and only displays the filename the string is found in.

`grep -l 'string' *`

This command allows you to search all the files in the current directory for the text string you are looking for, and only displays the filename, the text string you searched for along with the line number the string was found on.

`grep -n 'string' *`


This command allows you to search all the files in the current directory for the text string you are looking for, and displays the filename along with a count of the number of times the string was found in a particular file.

`grep -c 'string' *`

Apache Configuration file location

Default apache index.html file location
`/var/www/html/index.html`

Default apache configuration file location
`/etc/apache2/sites-enabled/000-default.conf`

Log files are located in /var/log

`ls -al /var/log`

`cat /var/log/auth`

Increased Security

Generate a key on your windows or linux system

`ssh-keygen -t rsa`

Copy the id_ras.pub under your directory on target system using ssh and name the file authorized_keys

`cat .ssh/id_rsa.pub | username@xxx.xxx.xxx.xxx 'cat >> .ssh/authorized_keys'`

`ssh username@xxx.xxx.xxx.xxx "chmod 700 .ssh; chmod 640 .ssh/authorized_keys"`

Now connect to the system using just the username and you should be able to authenticate without a password

`ssh username@xxx.xxx.xxx.xxx`

===
Vet Student Activities

The following slides are for students who have been in the program for 6 months or more. If you are a new student and want to try these exercises you are welcome to do so.

Vet students these activities are designed to determine if you have mastered the basics and can expand beyond simple account management, application installs, and permissions.

What I am looking for is an understanding and explanation of these concepts along with showing that you can execute them without a great deal of assistance.

Applications and Services

How do you list all services running on your linux server?

How would you use the grep command to find the process ID for a specific service?

How would you use the grep and ps command to locate the directory the process is running under?

Configuration and Logging

Now that you understand processes and the file structure how would you modify the configuration of the apache2 server and where are those files located?

How would you change the default web page for apache to reflect that you understand how to modify it's configuration?

What other commands could you use in Linux to make a copy of a website so that you did not have to build one from scratch?

Configuration and Logging

The next section of exercises that you will embark on involve the use and gathering of data from log files?

What is the default location log files are written to in linux?

What kind of tools could you install on your system to prevent unauthorized access to your server?

Increasing Security

Configure your Ubuntu server so that you can access if via ssh without a password but make it more secure.
Generate a key on your windows or linux system
Copy the id_ras.pub to the system and name it authorized_keys via ssh
Set the appropriate permissions on the files
Connect to the Ubuntu server with username and IP only without a password.
Why is this more secure than a standard username and password?

Questions?

Did you understand all of the exercises?
Did you lookup things you did not understand or were confusing?
Did you practice the commands and use the man command along with the command to obtain more information about the command - example… “man ls”
