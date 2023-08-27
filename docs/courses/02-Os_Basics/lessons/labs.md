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
 
9. Change your present working Directory to “/usr/local/lib/”, change it to “/home/devops/Desktop/ ”, in one line command, by moving up in the directory till ‘/’ then using absolute path.

devops@devops-student:/usr/local/lib/$ `cd ../../../home/devops/Desktop/` 

devops@devops-student:~/Desktop$

10. Change from current working directory to /var/www/html without typing in full using TAB.

devops@devops-student:/var/www/html$ `cd /v<TAB>/w<TAB>/h<TAB>`

devops@devops-student:/var/www/html$

11. Navigate from your current working directory to /var/l__ _, Oops! You forgot the name of directory and not supposed to use TAB.

devops@devops-student:~$ `cd /var/l*` 

devops@devops-student:/var/l$ 
Note: This will move to ‘lib‘ only if there is only one directory starting with ‘l‘. If more than one directory starting with ‘l‘ exist, and no more criteria is provided in command line, it will move to the first directory starting with ‘l‘, alphabetically

12. You need to navigate to your home folder ‘devops‘ home directory, without using TAB.

devops@devops-student:/etc$ `cd /home/dev?` 

devops@devops-student:~$

13. What are pushd and popd in Linux?

Pushd and popd are Linux commands in bash and certain other shell which saves current working directory location to memory and bring to the directory from memory as current working directory, respectively as well as changes directory.

devops@devops-student:~$ `pushd /var/www/html`

/var/www/html `~`
devops@devops-student:/var/www/html$
 
The above command saves the current location to memory and changes to the requested directory. As soon as popd is fired, it fetch the saved directory location from memory and makes it current working directory.

devops@devops-student:/var/www/html$ `popd ~`
devops@devops-student:/var/www/html$ 

14. Change to a directory containing white spaces. (BTW I am not a fan of directories that contain white space because it makes it difficult to reference directories in scripts and navigate them via the command line)

15. Change to your home directory

devops@devops-student:~$ `cd ~/`

16. Change to the directory with white space.
devops@devops-student:~$ `cd busted\ directory/`


devops@devops-student:~/busted directory$

or

devops@devops-student:~$ `cd 'busted directory'` 
devops@devops-student:~/busted directory$ 

or 

devops@devops-student:~$ `cd "busted directory"/` 
devops@devops-student:~/busted directory$

16. Change from current working directory to Downloads and list all its settings with one command.

devops@devops-student:/usr$ `cd ~/Downloads && ls`
