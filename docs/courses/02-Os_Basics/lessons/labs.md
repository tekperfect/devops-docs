# Student Labs

## CD Command Lab

**\* Examples**


1. Change from current directory to /usr/local

$ `cd /usr/local`

2. Change from current directory to /usr/local/lib directory

$ `cd /usr/local/lib` 

3. Switch back to previous directory where you working earlier

$ `cd /usr/local` 

4. Change Current directory to parent directory or move up one directory

$ `cd ..` 

6. Show last working directory from where we moved (use ‘–‘ switch) as shown.

$ `cd -- /home/parallels`

7. Move up two directories up from where you are now

$ `cd ../ ../` 

8. Move to your home directory from anywhere

$ `cd ~` 

or

$ `cd` 

9. Change your present working Directory to “/usr/local/lib/”, change it to “/home/parallels/Desktop/ ”, in one line command, by moving up in the directory till ‘/’ then using absolute path

$ `cd ../../../home/parallels/Desktop/` 

10. Change from current working directory to /var/www/html without typing in full using TAB

$ `cd /v<TAB>/w<TAB>/h<TAB>`

11. What are pushd and popd in Linux?

Pushd and popd are Linux commands in bash and certain other shell which saves current working directory location to memory and bring to the directory from memory as current working directory, respectively as well as changes directory

$ `pushd /var/www/html`

The above command saves the current location to memory and changes to the requested directory. As soon as popd is fired, it fetch the saved directory location from memory and makes it current working directory

$ `popd -n`

12. Change to a directory containing white spaces. (BTW I am not a fan of directories that contain white space because it makes it difficult to reference directories in scripts and navigate them via the command line)

13. Change to your home directory

$ `cd ~/`

14. Change from current working directory to Downloads and list all its settings with one command

$ `cd ~/Downloads && ls`

## LS Command Lab

**\* Examples**

**\* Lab Exercises**

CD to your downloads directory

1. $ `cd ~/Downloads`

Lists directory contents separated by a comma.

2. $ `ls -m`

CD to the ascii-art directory you extracted from the zip file if you did not extract the zip file run the `unzip ascii-art.zip` command

3. $ `cd ascii-art`

Displays directory contents enclosed by quotation marks

4. $ `ls -Q`

Displays files in a long-list format

5. $ `ls -l`

Display file size in a human-readable format

6. $ `ls -lh`

Omits group ownership column

7. $ `ls -g`

Adds a forward slash to directories

8. $ `ls -F`

Display inode number of files and directories

9. $ `ls -i`

Display all files including hidden files

10. $ `ls -a`

Filters files according to the file extension.

11. $ `ls *`

Displays all files and directories in long list format.

12. $ `ls -la`

Display files and directories recursively

13. $ `ls -R`

Sort Files in reverse

14. $ `ls -r`

Sort files alphabetically by file extension

15. $ `ls -X`

Display files according to file creation date and time

16. $ `ls -tl`

List UIDs and GIDs

17. $ `ls -n`

## Touch Command Lab

**\* Lab Examples**


touch -t YYMMDDHHMM fileName (This is used to create a file using a specified time.)

**\* Lab Exercises**

This creates a file 

1. $ `touch your-face`

This command creates several files at once

2. $ `touch your-nose your-eyes your-hair`

This command displays the long directory listing of the files in a folder

3. $ `ls -al`

** Make note of the time and date stamp of the files you created

This command changes access time of the file

4. $ `touch -a your-face`

This command is used to check whether a file is created or not. If not created then don’t create it. This command avoids creating files

5. $ `touch -c your-nose`

This command is used to update access and modification time

6. $ `touch -m your-hair`

** Run the ls command and make note of the modification times of the files

This command is used to change only modification date

7. $ `touch -d "1 Jan 2023" your-face`

This command is used to use the timestamp of another file

8. $ `touch -r your-nose your-face`

** Make note of the time and date stamps of the files

This is used to create a file using a specified time

9. $ `touch -t 2302050555 your-hair`

** What was the result of that command?

# MKDIR, CP, MV, & RM Labs

**\* Lab Exercises**

** Make some directories

1. `mkdir kitchen`

2. `cd kitchen`

3. `mkdir refrigerator`

4. `mkdir trash`

5. `mkdir sink`

6. `mkdir compost`


** Copy some files
** For this lab please note that the directories you need to copy the files from or to may not exist so you will need to create them. The purpose of this exercise is not only to use the copy command but to also identify how to properly use and understand the syntax of the source and destination of the copy command.

7. `cp ~/ascii-art/* ~/kitchen/refrigerator/`

8. `cp ~/refrigerator/milk spoiled-milk`

9. `cp ~/refrigerator/eggs rotten-eggs`

10. `cp ~/refrigerator/bananas rotten-bananas`

11. `cp ~/refrigerator/grapes raisins`

12. `cp ~/refrigerator/meat rotten-meat`


** Check what's in the directories


13. Run an ls command on each of the 5 directories you created individually

14. Run an ls command on each of the 5 directories you created collectively

15. What is the difference between those commands?


** Move some files around

16. `mv ~/kitchen/refrigerator/spoiled-milk ~/sink`

17. `mv ~/kitchen/refrigerator/rotten-eggs ~/compost`

18. `mv ~/kitchen/refrigerator/rotten-bananas ~/compost`

19. `mv ~/kitchen/refrigerator/raisins ~/compost`

20. `mv ~/kitchen/refrigerator/rotten-meat ~/trash`

** Delete some files and directories

21. `rm ~/kitchen/sink/milk`

22. `rmdir ~/kitchen/compost`
23. `rmdir ~/kitchen/trash`

24. What error did you get when you ran those commands?

25. How would you solve it?

26. `rm ~/kitchen/compost/*`

27. `rm -d ~/kitchen/trash/rotten-meat` (what's unique about this commnad)

28. `rmdir ~/kitchen/compost`

29. `rmdir ~/kitchen/trash`

30. `rm -r ~/kitchen`

# CAT, TAIL, & HEAD Labs

To view a single file 

1. `cat apple`

To view multiple files

2. `cat apples bananas`

To view a file with line numbers

3. `cat -n pizza`

Use cat to create a new file from the contents of another file

4. `cat grapes > old-raisins`

Cat command can append the contents of one file to the end of another file

5. `cat bread >> butter` 

Display contents of file in reverse order

6. `tac milk`

Display the contents of a file if the file has a lot of content and can’t fit in the terminal

7. `cat bread | more`

Copy the contents of multiple files into a new file

8. `cat "cherries" "grapes" "banana" "apple" > fruit-salad`

Display  the first 10 lines of a file

9. `head fruit-salad`

Display the last 10 lines of a file

10. `tail fruit-salad`

Display the first 26 lines of a file

11. `head -n 26 fruit-salad`

Display the last 34 lines of a file

12. `tail -n 34 fruit-salad`

Actively display the contents of a file as its being written to

13. `tail -f file_name`

# COMMAND COMPLETION LAB

1. Change directories to the `/home/parallels/Downloads/command-completion/` folder if you have not extracted the zip file your downloaded please use the command `unzip command-completion.zip` to extract the files.

2. Once you are inside the command-completion folder you need to do the following copy the text files in the directory to the folder name associated with them for example copy the file called assertivenesses.txt to the folder assertivenesses. The subsuquent files need to be copied into the folders that are nested under the assertiveness folder. This is where command completion will come in hand when using the copy command.

3. Extra credit - What command would you run to concatenate all the files in the folder into one file name combined into the folder named abcedefghijklmnopqrstuvwxyz which is located under the zookeepers folder.

# INSTALLING, REMOVING, AND MANAGING APPLICATIONS AND SERVICES

**\* Lab Exercises**

Installing applications

1. `sudo apt install python3-pip`

2. `sudo apt install neofetch`

3. `sudo apt install ncdu`

4. `sudo apt install nnn`


Removing applications

5. `sudo apt remove neofetch`

6. `sudo apt remove ncdu`

7. `sudo apt remove nnn`

Managing Applications and Services

Show status of Apache web services

8. `sudo systemctl status apache2`

Stop Apache web services

9. `sudo systemctl stop apache2`

Start Apache web services

10. `sudo systemctl start apache2`

Restart Apache web services

11. `sudo systemctl restart apache2`

List all install packages

12. `apt list --installed`

# CREATING AND DELETING USERS

When creating users please specify the username in lower case characters and use a password that is at least 8 characters and is not a dictionary word. Weak passwords are the foundation of compromised systems and environments.

1. `sudo adduser username` Then follow the prompts to enter the password and full name you can skip the other options related to room number and phone number by just hitting enter.

2. `sudo deluser username` This command deletes a user please note that once the user is deleted it cannot be recovered. If the data and information pertaining to the account needs to be maintained you should just reset the password on the account and set the shell on the account to dev null.

# PERMISSIONS GROUPS AND OWNERSHIP

1. Login to your Ubuntu instance from your Mac with the newly created account based on your name.

2. Create a file called get-history.sh using the touch command.

3. Edit the file using vi, vim, or pico or any other editor of your choosing.

4. Put the following text into the file `history > ~/my-command-history.txt`

5. Save the file and exit it. Do you remeber how to do that in vi?

6. Now run the following command to make the file executable.

7. `sudo chmod 755 get-history.sh`

8. Run the script by running this command `./get-history.sh`

9. Congratulations you just created your first script

10. Bonus question what is an alternate chmod command you could run on the get-history.sh file to achieve the same result as `sudo chmod 755 get-history.sh`. Hint: The command uses letters instead of numbers.

11. Now we are going to copy that script to another directory and change ownership of it

12. Run this command to copy the file to the /tmp folder `sudo cp get-history.sh /tmp`

13. Now change to the /tmp directory. Do you know how to do that ?

14. Once you are in the directory run the following command.

15. Run the `ls -al` command to make note of the current file ownership.

16. Now run the command `sudo chown parallels get-history.sh`

17. Run the `ls -al` command again to make note of the current file ownership. What changed?

18. Now lets create a group by running the following command.

19. `sudo groupadd devops`

20. Run the `ls -al` command again to make note of the current file group ownership.

21. Now run the following command `sudo chgrp devops get-history.sh`

22. Run the `ls -al` command again to make note of the current file group ownership. What changed?

23. Now I want you to do the following to complete these labs. Create 5 new users with the following names: `barack sonia hiro priyanka dwayne` Their full names when creating he accounts should be `Barack Obama Sonia Sotomayor Hiro Murai Priyanka Chopra Dwayne Johnson`.

24. Now create 5 groups `finance hr it marketing sales`

25. Create 6 diretories the first directory should be called companydata and it should be located off of the root folder so if you ran a pwd command in the folder is should look like this `/groupdata`. Now the other 5 directories should be located under the groupdata folder and be called `finance hr it marketing sales`

26. Now change the group ownership of each of the folders you just created to correspond to the name group. For example the it group should be owned by the it group. If you need a add a users to a specific group you can run the following command `sudo usermod -a -G adm username`. For example if you wanted to add barack to the it group you would run the following command `sudo usermod -a -G it barack`. 

27. Once you have completed these exercised please run the get-history.sh command and drop the file into the individual google drive that I will share with each of you.

## IDENTIFY SYSTEM PROCESSES

1. To list running processes on the system run the following command.

2. `ps -e`

3. To list running processes with the location of the executable or binary they are associated with run the following command.

4. `ps -elf`

5. To list the process id associated with the apache service you should have already installed on your Ubuntu VM run the following command.

6. `ps -e | grep apache` Take note of the process id number associated with the service.

7. Now run the following command to restart the apache service.

8. `sudo /etc/init.d/apache2 restart`

9. Now run the ps command with the grep command again and see if you can identify the difference.

10. Understanding how to identify processes and services on your Ubuntu is an essential part of managing the systems. Please practice these commands so that you understand how they work.

