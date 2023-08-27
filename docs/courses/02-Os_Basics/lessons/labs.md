# Student Labs

## CD Command Lab

**\* Examples**


1. Change from current directory to /usr/local

devops@devops-student:~$ `cd /usr/local`

devops@devops-student:/usr/local$ 

2. Change from current directory to /usr/local/lib directory

devops@devops-student:/usr/local$ `cd /usr/local/lib` 

devops@devops-student:/usr/local/lib$ 

3. Change from current working directory to /usr/local/lib using relative path.

devops@devops-student:/usr/local$ `cd lib` 

devops@devops-student:/usr/local/lib$ 

4. Switch back to previous directory where you working earlier

devops@devops-student:/usr/local/lib$ `cd - /usr/local` 
devops@devops-student:/usr/local$

5. Change Current directory to parent directory or move up one directory

devops@devops-student:/usr/local/lib$ `cd ..` 

devops@devops-student:/usr/local$ 

6. Show last working directory from where we moved (use ‘–‘ switch) as shown.

devops@devops-student:/usr/local$ `cd -- /home/devops`

7. Move up two directories up from where you are now

devops@devops-student:/usr/local$ `cd ../ ../` 

devops@devops-student:/usr$

8. Move to your home directory from anywhere

devops@devops-student:/usr/local$ `cd ~` 

or

devops@devops-student:/usr/local$ `cd` 

devops@devops-student:~$
 
9. Change your present working Directory to “/usr/local/lib/”, change it to “/home/devops/Desktop/ ”, in one line command, by moving up in the directory till ‘/’ then using absolute path

devops@devops-student:/usr/local/lib/$ `cd ../../../home/devops/Desktop/` 

devops@devops-student:~/Desktop$

10. Change from current working directory to /var/www/html without typing in full using TAB

devops@devops-student:/var/www/html$ `cd /v<TAB>/w<TAB>/h<TAB>`

devops@devops-student:/var/www/html$

11. Navigate from your current working directory to /var/l__ _, Oops! You forgot the name of directory and not supposed to use TAB

devops@devops-student:~$ `cd /var/l*` 

devops@devops-student:/var/l$ 
Note: This will move to ‘lib‘ only if there is only one directory starting with ‘l‘. If more than one directory starting with ‘l‘ exist, and no more criteria is provided in command line, it will move to the first directory starting with ‘l‘, alphabetically

12. You need to navigate to your home folder ‘devops‘ home directory, without using TAB.

devops@devops-student:/etc$ `cd /home/dev?` 

devops@devops-student:~$

13. What are pushd and popd in Linux?

Pushd and popd are Linux commands in bash and certain other shell which saves current working directory location to memory and bring to the directory from memory as current working directory, respectively as well as changes directory

devops@devops-student:~$ `pushd /var/www/html`

/var/www/html `~`
devops@devops-student:/var/www/html$
 
The above command saves the current location to memory and changes to the requested directory. As soon as popd is fired, it fetch the saved directory location from memory and makes it current working directory

devops@devops-student:/var/www/html$ `popd ~`
devops@devops-student:/var/www/html$ 

14. Change to a directory containing white spaces. (BTW I am not a fan of directories that contain white space because it makes it difficult to reference directories in scripts and navigate them via the command line)

15. Change to your home directory

devops@devops-student:~$ `cd ~/`

16. Change to the directory with white space
devops@devops-student:~$ `cd busted\ directory/`


devops@devops-student:~/busted directory$

or

devops@devops-student:~$ `cd 'busted directory'` 
devops@devops-student:~/busted directory$ 

or 

devops@devops-student:~$ `cd "busted directory"/` 
devops@devops-student:~/busted directory$

16. Change from current working directory to Downloads and list all its settings with one command

devops@devops-student:/usr$ `cd ~/Downloads && ls`

## LS Command Lab

**\* Examples**

ls -m	Lists directory contents separated by a comma.
ls -Q	Displays directory contents enclosed by quotation marks.
ls -l	Displays files in a long-list format.
ls -lh	Display file size in a human-readable format.
ls -g	Omits group ownership column.
ls -F	Adds a forward slash to directories.
ls -i	Display inode number of files and directories.
ls -a	Display all files including hidden files.
ls *.	Filters files according to the file extension.
ls -la	Displays all files and directories in long list format.
ls -R	Display files and directories recursively.
ls -r	Sort Files in reverse.
ls -X	Sort files alphabetically by file extension.
ls -tl	Display files according to file creation date and time.
ls -n	List UIDs and GIDs.

**\* Lab Exercises**


1. devops@devops-student:~$ `cd ~/`

2. devops@devops-student:~$ `ls -m`

3. devops@devops-student:~$ `cd example1`

4. devops@devops-student:~$ `ls -Q`

5. devops@devops-student:~$ `cd ..`

6. devops@devops-student:~$ `cd example2`

7. devops@devops-student:~$ `ls -l`

8. devops@devops-student:~$ `ls -lh`

9. devops@devops-student:~$ `ls -g`

10. devops@devops-student:~$ `ls -F`

11. devops@devops-student:~$ `ls -i`

12. devops@devops-student:~$ `ls -a`

13. devops@devops-student:~$ `ls *.`

14. devops@devops-student:~$ `cd ..`

15. devops@devops-student:~$ `ls -la`

16. devops@devops-student:~$ `ls -R`

17. devops@devops-student:~$ `cd example2`

18. devops@devops-student:~$ `ls -r`

19. devops@devops-student:~$ `ls -X`

20. devops@devops-student:~$ `ls -tl`

21. devops@devops-student:~$ `ls -n`

## LS Command Lab

**\* Lab Examples**

touch file_name (This creates a file with the name ‘File1‘).

touch File1_name File2_name File3_name (This command creates several files at once).

touch -a fileName (This command changes access time of the file)

touch -c fileName )This command is used to check whether a file is created or not. If not created then don’t create it. This command avoids creating files).

touch -c-d fileName (This command is used to update access and modification time.) 

touch -m fileName (This is used to change the modification time only. It only updates last modification time).

touch -d "1 Jan 2023" devops-students.txt (This command is used to change only modification date.)

touch -r second_file_name first_file_name (This command is used to use the timestamp of another file.)

touch -t YYMMDDHHMM fileName (This is used to create a file using a specified time.)

**\* Lab Exercises**

1. devops@devops-student: `touch your-face`
2. devops@devops-student: `touch your-nose your-eyes your-hair`
3. devops@devops-student: `ls -al`
4. Make note of the time and date stamp of the files you created
5. devops@devops-student: `touch -a your-face`
6. devops@devops-student: `touch -c your-nose`
7. devops@devops-student: `touch -c-d your-face`
8. devops@devops-student: `touch -m your-hair`
8. Run the ls command and make note of the modification times of the files
9. devops@devops-student: `touch -d "1 Jan 2023" your-face`
10. devops@devops-student: `touch -r your-nose your-face`
11. Make note of the time and date stamps of the files
12. devops@devops-student: `touch -t 2302050555 your-hair`
13. What was the result of that command?

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

1. cat apple

To view multiple files

2. cat apples bananas

To view a file with line numbers

3. cat -n pizza

Use cat to create a new file from the contents of another file

4. cat grapes > old-raisins

Cat command can append the contents of one file to the end of another file

5. cat bread >> butter 

Display contents of file in reverse order

6. tac milk

Display the contents of a file if the file has a lot of content and can’t fit in the terminal

7. cat bread | more

Copy the contents of multiple files into a new file

8. cat "cherries" "grapes" "banana" "apple" > fruit-salad

Display  the first 10 lines of a file

9. head fruit-salad

Display the last 10 lines of a file

10. tail fruit-salad

Display the first 26 lines of a file

11. head -n 26 fruit-salad

Display the last 34 lines of a file

12. tail -n 34 fruit-salad

Actively display the contents of a file as its being written to

13. tail -f file_name

# INSTALLING, REMOVING, AND MANAGING APPLICATIONS AND SERVICES

**\* Lab Exercises**

Installing applications

1. sudo apt install python3-pip

2. sudo apt install neofetch

3. sudo apt install ncdu

4. sudo apt install nnn


Removing applications

5. sudo apt remove neofetch

6. sudo apt remove ncdu

7. sudo apt remove nnn

Managing Applications and Services


8. sudo systemctl status apache2

9. sudo systemctl stop apache2

10. sudo systemctl start apache2

11. sudo systemctl restart apache2

12. apt list --installed
