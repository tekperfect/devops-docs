### AD Ubuntu & Amazon Lab Evaluation

If you feel like you have a grasp of the Active Diretory and Group policy managment exercises I want you all to take on the following tasks.

1. Destroy all your Windows and Ubuntu VM's except the OpenVPN one. (This is optional if you want to keep the Windows and Ubuntu VM's around for reference purposes.

2. Create 3 new VM's... 2 Windowsi VM's and 1 Ubuntu VM.

3. Create 2 security groups the first security groups should be named `Secure Windows Access` and the second security group should be named `Secure Ubuntu Access`.

4. The `Secure Windows Access` security group should have the three rules. One RDP inbound only to allow your IP to connect to it via Royal TSX or any ohther RDP client, One inbound only rule by my IP to connect to your Windows instances, one All Traffic rule for 172.31.0.0/16 and be associated with your Windows instances you created so they can talk to one another which will allow the join domain feature to work.

5. The `Secure Ubuntu Access` security group should have only two rules. One SSH access inbound only for your IP and one rule ssh inbound for my IP.

6. For the two Windows servers one is going to be a domain controller and one is going to be a member server.

7. The domain controllers computer name is going to be Thanos and the Member server is going to be named Ironman.

8. On the machine named Thanos that is going to be your domain controller you are going to install Active Directory and name the domain marvel.com.

9. One the member server named Ironman you are going to create two file shares one called heroes and another called villans.

9a. You are also going to create a homdrive folder directory on the Ironman server and in that directory create home drive folder for each of the heroes and villans. Please note you only need to share the homedrive folder and use the \\servname\homedrive\%username% to make the home directory for each user using the Group Policy manager.

10. In Active Directory create two groups and two OU's the groups and OU's should be named heros and villians.

11. In Active directory create the following users

### Create Users

 - Create a user named Loki 
 - Create a user named Vulture
 - Create a user named Namor 
 - Create a user named Green Goblin
 - Create a user named Eric Killmonger

 - Create a user named Black Panther
 - Create a user named Spiderman
 - Create a user named Thor
 - Create a user named Wolverine
 - Create a user named Dare Devil

### Create Groups

 - Create a group called heroes
 - Create a group called villians

### OU and Group association
 - Make sure all the users are added to the domain admins group.
 - Add Loki, Vulture, Namor, Green Goblin, and Eric Killmonger to the villians group and OU
 - Add Black Panther, Spiderman, Thor, Wolverine, and Dare Devil to the heroes group and OU

### Group Policy

12. Create two group policies one heroes and villians and link them to the OU's and create a drive mapping for each user so that has a home drive for them and a group drive associated the group they are affiliated with.

13. Create home drive and group drives shares on the server Ironman for all the users and one for each group heroes and villians.

### Group Policy Continued

1. Edit the default domain group policy and change the minimum password lenghth from 7 to 12 characters.

2. Next we are going to change the maximum password age to 90 days so that people onl have to change their password every three months 42 days is a little too heavy handed.

3. Next we are going to set the enforce the password history to 10 passwords 24 password is too much for most people to overcome.

9. Change the account lockout policy to lock an account after 5 failed login attempts. This is to protect account from brute force attacks. To modify the account lockout policy go "Account Policies", Account Lockout Policy, and change the duration and reset time to 10 minutes. This will slow down and attack while not keeping the user out of their account for too long if they remeber their password.

10. Change the Logon Banner to read the following "Only heroes and villians are allowed on this domain. Humans without super powers are prohibited.

# Ubuntu Server Build

Download Lab Files on your Mac and scp them to your Ubuntu server you just created

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

11. Unzip all the files you copied from your Mac to your Ubuntu server and after they are extracted you should see a corresponding directory name.

# RECONFIGURE APACHE WEB SERVER

Setup Apache

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

### That's it your done the evaluation is complete!!! Congrats
