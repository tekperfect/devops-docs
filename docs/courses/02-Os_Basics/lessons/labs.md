# Student Labs

## CD Command Lab

**\* Examples**


1. Change from current directory to /usr/local

$ `cd /usr/local`

2. Change from current directory to /usr/local/lib directory

$ `cd /usr/local/lib` 

3. Change from current working directory to /usr/local/lib using relative path.

$ `cd lib` 

4. Switch back to previous directory where you working earlier

$ `cd - /usr/local` 

5. Change Current directory to parent directory or move up one directory

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

11. Navigate from your current working directory to /var/l__ _, Oops! You forgot the name of directory and not supposed to use TAB

$ `cd /var/l*` 

Note: This will move to ‘lib‘ only if there is only one directory starting with ‘l‘. If more than one directory starting with ‘l‘ exist, and no more criteria is provided in command line, it will move to the first directory starting with ‘l‘, alphabetically

12. You need to navigate to your home folder ‘parallels‘ home directory, without using TAB.

$ `cd /home/par?` 

13. What are pushd and popd in Linux?

Pushd and popd are Linux commands in bash and certain other shell which saves current working directory location to memory and bring to the directory from memory as current working directory, respectively as well as changes directory

$ `pushd /var/www/html`

The above command saves the current location to memory and changes to the requested directory. As soon as popd is fired, it fetch the saved directory location from memory and makes it current working directory

$ `popd ~`

14. Change to a directory containing white spaces. (BTW I am not a fan of directories that contain white space because it makes it difficult to reference directories in scripts and navigate them via the command line)

15. Change to your home directory

$ `cd ~/`

16. Change from current working directory to Downloads and list all its settings with one command

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

11. $ `ls *.`

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

6. $ `touch -c-d your-face`

This is used to change the modification time only. It only updates last modification time

7. $ `touch -m your-hair`

** Run the ls command and make note of the modification times of the files

This command is used to change only modification date

8. $ `touch -d "1 Jan 2023" your-face`

This command is used to use the timestamp of another file

9. $ `touch -r your-nose your-face`

** Make note of the time and date stamps of the files

This is used to create a file using a specified time

10. $ `touch -t 2302050555 your-hair`

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

7. `cp ~/ascii-art/* ~/kitchen/refrigerator`

8. `cp ~/refrigerator/milk spoiled-milk`

9. `cp ~/refrigerator/eggs rotten-eggs`

10. `cp ~/refrigerator/bananas rotten-bananas`

11. `cp ~/refrigerator/grapes raisins`

12. `cp ~/refrigerator/meat to rotten-meat`


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
