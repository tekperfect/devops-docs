# Creating Users And Groups

**Create the following users using the `adduser` command**

- Create a user named edgar
- Create a user named francis
- Create a user named mark
- Create a user named ignacio
- Create a user named sally

> For example if you wanted to create a user called marsha you would type in the following command sudo adduser marsha

- Create the following groups by using the groupadd command
- Create a group called engineering.
- Create a group called finance.
- Create a group called marketing.
- Create a group called it.
- Create a group called sales.

> For example if you wanted to create a group called security you would type in the following command
> `sudo groupadd security`

**Add the following users to those groups by using the `usermod` command**

- Create a group called engineering and assign edgar to it.
- Create a group called finance and assign francis to it.
- Create a group called marketing and assign mark to it.
- Create a group called it and assign ignacio to it.
- Create a group called sales and assign sally to it.

> For example if you wanted to add marsha to the security group you would type in the following command: sudo usermod -a -G security marsha

---

# Folder and Files

The root or ground folder on any Linux OS is “/”
From the forward slash or “/” you want to create the following folders
Change directory to the root by issuing this command cd /
Now that you are at the root of your linux box you need to create the following folder department:

- Use the mkdir command to create the department folder Under the department folder you want to create the following folders sales, marketing, it, engineering, and finance. You must use the “sudo cd department” command to change into that folder once it’s created.

**Create a few files in each folder using the `touch` command**

- In the sales folder create a file called forecast.xls
- In the engineering folder create a file called code.py
- In the it folder create a file called script.py
- In the marketing folder create a file called campaign.ppt
- In the finance folder create a file called payroll.xls

> For example if you wanted to create a file called test.txt using the touch command you type sudo touch test.txt

Change the department folder permission so only members can modify the files using the chgrp command. For example, if I wanted to change the ownership of the folder called security to be owned by the group called security you would issue the following command chgrp security security

**Bonus task: How would you change the permission on the finance folder so only members of the finance team can see the payroll.xls file**

---

Now that you have the directories created

- List the files in each folder individually using the ls command
- List all the files in each folder with one command. However, you need to use the ls command with a command line switch please lookup the options using the man ls command to find the various options available to you via the ls command

If you need to move up one folder use the cd .. command

Applications and Services

For the purposes of this exercise I want you to install apache2, MySQL server, and Postgres - Hint use the command sudo apt-get install name-of-app

Once the applications or services are installed use the command line to stop and start the services - Hint use the command sudo systemctl restart name-of-app

Applications and Services

You can also use the command line to identify the process identifier associated with each of the services - Hint “ps -e | grep name-of-app”

Name one thing you notice about the process ID as you stop and start the service and provide one example of how to stop or kill a service. This may require additional research.
