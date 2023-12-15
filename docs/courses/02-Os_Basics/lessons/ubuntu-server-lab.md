# Milestone 1 Lab

## Build an Ubuntu Server

1. Download the ubuntu server image from the following link below.

## Ubuntu Server Image Link 👇🏾
[![Ubuntu](ubuntu-server.png)](https://drive.google.com/file/d/1o9lV2bKUhwM4FVkDgzRrVLCF5G3Yw427/view?usp=sharing)

2. Use parallels to build the server and follow the prompts during the install process.

3. To start the Ubuntu server installation after you have successfully downloaded the iso image you will need to open parallels control center and click on the plus button in the upper right hand corner.

![UBUNTU-SERVER](1-control-center.png)

4. Now select the install Windows, Linux, or MacOS from an image file button

![UBUNTU-SERVER](2-create-new-vm.png)

5. Now select the choose manually button.

![UBUNTU-SERVER](3-choose-manually.png)

6. Next you need to click on the select file link.

![UBUNTU-SERVER](4-select-file.png)

7. Next you need to select the Download folder where you downloaded the image and then select the image named ubuntu-22.04.3-live-server-arm64.iso.

![UBUNTU-SERVER](5-downloads.png)

8. Next click on the continue button.

![UBUNTU-SERVER](6-server-install.png)

9. Now type in Ubuntu Linux Server in the name field and click on the create button.

![UBUNTU-SERVER](7-name-server.png)

10. Next you will begin the installation wizard via a set of prompts. The mouse cannot be used during the install process you will need to use the keyboard. Most of the options will be default but please pay attention to the images in these instructions to be certain you select the correct options.

![UBUNTU-SERVER](8-start-install.png)

11. To start the install click in the VM windows and hit the enter key.

![UBUNTU-SERVER](9-select-english.png)

12. English should be selected by default all you need to do is hit enter to continue.

![UBUNTU-SERVER](10-continue-without-updating.png)

13. Use the tab key until Continue without updating is selected. Please note you may not see this screen and you may just need to just select continue and press the enter key.

![UBUNTU-SERVER](11-accept-keyboard.png)

14. Accept the default keyboard selection and tab to Done and press enter to continue.

![UBUNTU-SERVER](12-accept-ubuntu-standard.png)

15. Continue to accept the defaults and hit enter to continue.

![UBUNTU-SERVER](13-accept-network.png)

16. Accept the network defaults and hit enter to continue.

![UBUNTU-SERVER](14-no-proxy.png)

17. Accept the proxy default of nothing and enter enter to continue.

![UBUNTU-SERVER](15-accept-mirror.png)

18. Accept the mirror default and hit enter to continue.

![UBUNTU-SERVER](16-tab-to-done.png)

19. Make sure use an entire disk has an x in the check box field and set up this disk as an LVM group is selected the other selections should not be checked and tab down to the done selection and hit the enter key.

![UBUNTU-SERVER](17-accept-storage.png)

20. Accept the defaults and hit enter to continue

![UBUNTU-SERVER](19-tab-to-continue.png)

21. Next you will see a box about being sure you wish to continue. Tab to the continue option and press enter.

![UBUNTU-SERVER](20-enter-name.png)

22. Now enter your full name, a name for your server ubuntu-server or somthing similar, a username like your first name, and pick a password that you will remeber but will meet the security requirements. Please make sure you use lowercase characters for your username and server name.

![UBUNTU-SERVER](21-skip-for-now.png)

23. One the next screen you are going to make sure skip for now is selected and tab to the continue button and press enter.

![UBUNTU-SERVER](22-install-openssh-server.png)

24. Now on the next screen please make sure Install OpenSSH server is selected and tab to the done option and press enter.

![UBUNTU-SERVER](23-tab-to-done.png)

25. On the next screen just done make any changes just tab to the done button and press enter.

![UBUNTU-SERVER](24-reboot-now.png)

26. Your installation should begin please make sure to wait until the updates have finished before you select the reboot now option.

![UBUNTU-SERVER](25-login.png)

27. Once the installation is complete and your system is rebooted you shold be taken to a blank login screen where you will enter the username and password you created.

28. If you encounter any errors or issues during the installation please ask your instructor for assistance.

# Download Lab Files

1. Download all the lab files below to your mac
## Sample Videos 👇🏾
[![Sample Movie ZipFile](zip-files.png)](https://drive.google.com/file/d/1BjuZErHky_DfhOVEwkn7S7F9CkmEAjAd/view?usp=sharing)


2. Download all the lab files below to your mac
## Sample Log 👇🏾
[![Log ZipFile](zip-files.png)](https://drive.google.com/file/d/1GF5T3qE9_3AZHzEGo35JyoUuu-2k7H14/view?usp=sharing)

3. Download all the lab files below to your mac
## Sample Images 👇🏾
[![Images ZipFile](zip-files.png)](https://drive.google.com/file/d/1qVdhfbcsgO9g-apxSeWvwKZKRDeA72QJ/view?usp=sharing)

4. Download all the lab files below to your mac
## Sample Documents 👇🏾
[![Documents ZipFile](zip-files.png)](https://drive.google.com/file/d/1F4zWNMxjjstetWg-A2h7jKk8lAmmgsGg/view?usp=sharing)

5. Download all the lab files below to your mac
## Command Completion Exercises 👇🏾
[![Command Completion ZipFile](zip-files.png)](https://drive.google.com/file/d/1i8aF6x4lcAcF9AmJiNnFTlz37n0RQCKf/view?usp=sharing)

6. Download all the lab files below to your mac
## Audio Files 👇🏾
[![Audio ZipFile](zip-files.png)](https://drive.google.com/file/d/1jhyk2yc7DQTfXYueNzxz-ktAr8dTKv7n/view?usp=sharing)

7. Download all the lab files below to your mac
## Ascii Art Exercises 👇🏾
[![Ascii Art ZipFile](zip-files.png)](https://drive.google.com/file/d/1PFVQBhvivw5yMVlENjvidRQQyfPpApZk/view?usp=sharing)

8. Download all the lab files below to your mac
## Sample Archives 👇🏾
[![Archive ZipFile](zip-files.png)](https://drive.google.com/file/d/1vRstOKzrtxRIrByvAh0ZwyqMmnAvVhYz/view?usp=sharing)

# INSTALLING APPLICATIONS AND SERVICES

**\* Lab Exercises**

Installing applications

1. `sudo apt install apache2`

2. `sudo apt install mysql-server`

3. `sudo apt install postgresql`

4. `sudo apt install unzip`

5. `sudo apt install net-tools`

6. Now I want you to do the following to complete these labs. Create 5 new users with the following names: `barack sonia hiro priyanka dwayne` Their full names when creating he accounts should be `Barack Obama Sonia Sotomayor Hiro Murai Priyanka Chopra Dwayne Johnson`.

7. Now create 5 groups `finance hr it marketing sales` using the following command `sudo groupadd group_name`

8. Create 6 diretories the first directory should be called groupdata and it should be located off of the root folder so if you ran a pwd command in the folder is should look like this `/groupdata`. Now the other 5 directories should be located under the groupdata folder and be called `finance hr it marketing sales`


9. Use the sudo usermod command to add each of the users to one of the groups you just created `sudo usermod -a -G groupName userName` 

10. For example if you wanted to add barack to the it group you would run the following command `sudo usermod -a -G it barack`

11. Now I want to use the scp command to copy all the labs files you downloaded earlier on your Mac to /tmp folder location on your Ubuntu server. Remeber the sytax for the command is `scp filename_you_want_to_copy username@xxx.xxx.xxx.xxx:/tmp`

12. If you want to copy all the files in zip files you downloaded on your Mac with one scp command what would that command look like. (Hint: You would use the *.zip wildcard with the scp command.

13. After you have all of the zip files are copied over to your Ubuntu server VM move the files from your /tmp folder to your home folder.

14. What is the command to move the files from the /tmp folder to your home folder?
# RECONFIGURE APACHE WEB SERVER 

15. Once the files are in your home folder. Use the unzip command to unzip the files?

16. How do you know if the files are unzipped?

**\* Lab Exercises**

Fun with Apache2

1. Before you start making changes to your apache server you want to backup the main index.html file to a backup folder. This will ensure you can restore the apache server to it's original configuration.

2. To accomplish this taks you need to use the cd command to cd to the /var/www/html folder.

3. Create a directory in the /var/www/html folder called backup and copy the /var/www/html/index.html file into the backup folder.

4. Once you can confirm you have the back folder and the copy of the index.html folder run a pwd command while in the /var/www/html folder and you should see a folder called back cd into the backup folder and run an ls -al command and you should see the index.html file. If you do not then you either created the folder in the wrong location or you copy command did not work properly make sure you use sudo with most of your commands since you will be creating files and folders in priviliged directories.

5. After you have confirmed you have a backup copy of the index.html file edit the original index.html file located in the /var/www/html folder by using the vi command.

6. While in vi change the the following in the index.html`It works!` to `Your Name is the best`.

7. Obviously you want to use your actual name place of Your Name.

8. This exercise may be tricky for folks please reference the vi cheatsheet if you have any trouble editing the file.

## VI Cheatsheet 👇🏾
[![VI Cheatsheet](cheatsheet.png)](https://www.atmos.albany.edu/daes/atmclasses/atm350/vi_cheat_sheet.pdf)

9. Save the changes and restart apache. Do know how to save changes in a file that you are editing in vi? (Hint <esc key> :wq)

10. To restart apache you need to run the following command `sudo /etc/init.d/apache2 restart`

11. Now open browser on your mac and plug in the IP address of your ubuntu server VM. Do you know what the IP address is and how to find it?

12. You should see the edited Apache2 page with your name is the best. If you don't see that then you may have missed a step or have a typo in the changes you made.

13. Copy the sample-1.png file located in images folder in your home directory to /var/www/html.

14. Now edit the index.html file located in /var/www/html with vi and change the line `<img src="icons/ubuntu-logo.png" alt="Ubuntu Logo"` to `<img src="sample-1.png" alt="Ubuntu Logo"`   

15. Save the changes to the index.html file and restart apache.

16. Open or refresh the browser page you opened before to see what changes occured with your apache instance.

17. I know these exercisses are challenging but if you master the navigation, copy, move, remove, editing, searching, and locating of files you will be able navigate the linux files system from a command line with ease.

# DEMO WHAT YOU KNOW

1. Work with your instructor and go into a breakout room.

2. Your instructor will give you an assignment that will demonstrate the use of all the commands and skills you have learned so far.

3. Please remeber this is not a test you can use documenation from the google classrom to help you answer the questions. You can also use the man command and search the Internet to provide the answer to your quesitons. Please remeber to test the commands on your Ubuntu server in order to validate they are correct. You should also use the ls, ls -al, and pwd commands to validate where you are and where you want to go.

4. Your instructor strongly recommends using the <tab> key so that your ssh, scp, cp, mv, rm, mkdir, adduser, chown, and chgrp commands are successful and you don't have typos.

5. Good luck with the exercises and please put all the commands in the assessment file located in the google drive folder associated with your name.   

# EXTRA CREDIT LAB

1. Download the resume html template from the following link 
## Resume Template 👇🏾
[![Resume Template](zip-files.png)](https://drive.google.com/file/d/1cAq2tDL9woEh5nRwpXIXMXCvxSFwH6BW/view?usp=sharing)

2. Using the scp command copy the file to your Ubuntu server to the /tmp folder.

3. Login to your Ubuntu server via your Mac terminal and copy the resume.zip file from the /tmp folder to your home directory.

4. Unzip the resume.zip file in your home folder using the unzip command.

5. Use the cp command to copy the entire resume folder to the /var/www/html folder.

6. Use vi to Edit the apache configuration file located at /etc/apache2/sites-enabled/000-default.conf.

7. Change the DocumentRoot line to point to the index.html file located in the resume folder you copied earlier. Please note the index.html file is located a few folders beneath the /var/www/html/resume directory so you will need to use the cd command to locate it.

8. Update the resume template with your name and skills and customize it so that it reflects the skills you have learned so far.

9. For an additional challenge find a download a picture of yourself from either your linked in profile or some other place and copy it to your Ubuntu server or specifiy a path to the file in the html code. Please ask your instructor if any of this information is unclear.

10. The purpose of this exercise is to further your comfort level with using the scp, cp, cd, vi, pwd, and ls commands.

