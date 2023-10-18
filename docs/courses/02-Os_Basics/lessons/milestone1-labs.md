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
##  👇🏾
[![Sample Movie ZipFile](zip-files.png)](https://drive.google.com/file/d/1BjuZErHky_DfhOVEwkn7S7F9CkmEAjAd/view?usp=sharing)


2. Download all the lab files below to your mac
##  👇🏾
[![Log ZipFile](zip-files.png)](https://drive.google.com/file/d/1GF5T3qE9_3AZHzEGo35JyoUuu-2k7H14/view?usp=sharing)

3. Download all the lab files below to your mac
##  👇🏾
[![Images ZipFile](zip-files.png)](https://drive.google.com/file/d/1qVdhfbcsgO9g-apxSeWvwKZKRDeA72QJ/view?usp=sharing)

4. Download all the lab files below to your mac
##  👇🏾
[![Documents ZipFile](zip-files.png)](https://drive.google.com/file/d/1F4zWNMxjjstetWg-A2h7jKk8lAmmgsGg/view?usp=sharing)

5. Download all the lab files below to your mac
##  👇🏾
[![Command Completion ZipFile](zip-files.png)](https://drive.google.com/file/d/1i8aF6x4lcAcF9AmJiNnFTlz37n0RQCKf/view?usp=sharing)

6. Download all the lab files below to your mac
##  👇🏾
[![Audio ZipFile](zip-files.png)](https://drive.google.com/file/d/1jhyk2yc7DQTfXYueNzxz-ktAr8dTKv7n/view?usp=sharing)

7. Download all the lab files below to your mac
##  👇🏾
[![Ascii Art ZipFile](zip-files.png)](https://drive.google.com/file/d/1PFVQBhvivw5yMVlENjvidRQQyfPpApZk/view?usp=sharing)

8. Download all the lab files below to your mac
##  👇🏾
[![Archive ZipFile](zip-files.png)](https://drive.google.com/file/d/1vRstOKzrtxRIrByvAh0ZwyqMmnAvVhYz/view?usp=sharing)


# INSTALLING APPLICATIONS AND SERVICES

**\* Lab Exercises**

Installing applications

1. `sudo apt install apache2`

2. `sudo apt install mysql-server`

3. `sudo apt install postgresssql`

# RECONFIGURE APACHE WEB SERVER 

**\* Lab Exercises**

Fun with Apache2

1. Before you start making changes to your apache server you want to backup the main index.html file to a backup folder. This will ensure you can restore the apache server to it's original configuration.

2. To accomplish this taks you need to use the cd command to cd to the /var/www/html folder.

3. Create a directory in the /var/www/html folder called backup and copy the /var/www/html/index.html file into the backup folder.

4. Once you can confirm you have the back folder and the copy of the index.html folder run a pwd command while in the /var/www/html folder and you should see a folder called back cd into the backup folder and run an ls -al command and you should see the index.html file. If you do not then you either created the folder in the wrong location or you copy command did not work properly make sure you use sudo with most of your commands since you will be creating files and folders in priviliged directories.

5. After you have confirmed you have a backup copy of the index.html file edit the original index.html file located in the /var/www/html folder by using the vi command.

6. While in vi change the the following `<title>Apache2 Ubuntu Default Page: It works</title>` to <title>Apache2 Ubuntu Default Page: Your Name is the best</title>.

7. Obviously you want to use your actual name place of Your Name.

8. This exercise may be tricky for folks please reference the vi cheatsheet if you have any trouble editing the file.

##  👇🏾
[![VI Cheatsheet](cheatsheet.png)](https://www.atmos.albany.edu/daes/atmclasses/atm350/vi_cheat_sheet.pdf)
