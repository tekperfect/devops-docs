# Amazon Web Services Prep

1. Before we jump into cloud computing I want everyone to understand that you must have very strict policies as it relates to the use of cloud services because if compromised it could cost the company millions of dollars in usage fees, lost revenue, and reputation damage. Now that you are properly scared to do anything now we will start with the prep work of securing our local environments and use these methods to secure our cloud infrastructure.



### SSH Keys


1. We are going to generate two types of ssh keys the first one is a RSA key and to generate a standard RSA key all you need to do is run the following command.

`ssh-keygen`

2. Please make note of where the key is going to be stored and the name of the key. This command will generate both a public and private key.

3. Accepting the default key size is ok. However, would you be comfortable with just ok security if you are protecting millions of dollars of computing infrastructure?

4. Let's generate an RSA key with the recommend size... However, I want us to do some housekeeping so use the rm command to delete the public and private key files you generated with the default command.

5. What command would you run from the current folder you are in to remove the public and private key files you just generated. You can always cd into folder first to remove the files but that's and extra step. I want you all to get familir with using the full path to files and folders to create, move, and remove files.

6. Now let's run the command to generate a proper RSA key. Just press enter to accept the defaults but make note of the location of the files and options.

`ssh-keygen -t rsa -b 4096 -C "unique name or email address to identify this key."`

7. If you are super paranoid about security and want to use the latest key methods to generate your ssh keys you would use the following command to geneate a EDDSA key. Just press enter to accept the defaults but make note of the location of the files and options.

`ssh-keygen -t ed25519 -C "unique name or email address to identify this key."`


8. Now that we have the proper keys created we want to back them up just in case our computer get damaged, stolen, or you accidently delete them.

9. I recommend you zip the keys and password protect them and then store them in Lastpass. Do not store your keys in Google drive or other shared file tool like box or sharepoint. The purpose of storing and backing up these keys is to be able to restore them securely and recover them if you need them.

10. Please make sure you secure each key seperately in LastPass in seperate secure notes for both the public and private keys. The public keys and private keys have the same name but the public key has a file extension with a .pub extension.

11. Once you have secured and created backups of your keys each of you will share your public key with me so that I can use that key to provide you with access to an Ubuntu server in AWS.

12. Additionally I would like each of you to go to IP Chicken and provide me with your public IP address because I will be using this address to authroize you to ssh to my Ubuntu server in AWS.

12. I only allow ssh access to cloud based resources by specific IP. Why do you think I do that?

13. While I am preparing your keys each of you will add those keys to your Ubuntu server by running the following commands.

`ssh-copy-id username@xxx.xxx.xxx.xxx`

13a. If you want to specify the key would like to copy you can use the following syntax.

`ssh-copy-id -i id_ed25519.pub -o "unique name or email address to identify this key." username@xxx.xxx.xxx.xxx`

14. This command will add your key to the authorized keys files on your Ubuntu server. 

### Optional Steps

14a. This can also be done manually by using scp to copy the file to your Ubuntu server and then using the cat command to append the file to your authorized_keys file located in the .ssh folder in your home directory. For those of you that are curious about this method. I recommend you try both. However, before you make any changes please make sure you backup and make note of any permissions on the file before you make any changes to it.

15. What command would you use to create a blank authorized_keys file?

15a. What command would you run to find the authorized_key file on your Ubuntu server?

16. What command would you use to set the permissions on the file to rw for you the owner of the file and no access groups and others. See example below for ways to add and change permissions.

`linux-permissions.png`

17. If you want a reference of what the original permission of the authorized_keys file, please look at the image below.

`authorized-key-permissions.png`


### Updating Your SSH Config

1. Once you have completed the process of adding your authorized key to your Ubuntu server you will need to make one final change to your ssh configuration so that only authrized key logins are accepted. Please note if you make a mistake in this process you always have a way to get into your Ubuntu instance by logging into the console.

2. To make the changes to your ssh configuration you will need to do the following.

3. Login to your Ubuntu server from your Mac

4. Make a backup copy of the /etc/ssh/sshd_config file using the following command or something similar to this

`sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.backup`

5. Now edit the file with your favorite text editor. I use VI but that's just me.

`sudo vi /etc/ssh/sshd_config`

6. For the first change all we are going to do is remove the # sign in front of the "#PubkeyAuthentication yes" line in sshd_config file. See example below for reference.

`ssh-change-1.png`

7. After this change is made you will need to restart the ssh server which will disconnect your from your Ubuntu server.

`/etc/init.d/ssh restart`

8. Now exit your Ubuntu server and reconnect using your username@xxx.xxx.xxx.xxx command. What's different?

9. You were not prompted to provide your password because your public key was added to the authorized_keys file

10. In most production environments users will be required secure their ssh keys with a passphrase to further enhance the security but since we are just using demo machines and accounts not securing you file with a passphrase is ok.


### Connecting To Cloud Resources

1. Now that you understand how authorized_keys work and what changes you need to make to your ssh_config file are required in order to use password free authenication you will now be given access to an actual Ubuntu server hosted in the cloud.

2. Your instructor will share the IP address of the server you will all connect to so that you can navigate a server hosted in AWS.

3. Your initial accounts will be setup as users only and throughout the lesson your instructor will add your account to the sudoers group so you can make changes but first you must crawl before you can walk.

4. During the course of this demo your instructor will install Apache2, MySQL, MongDB, and Postgres on this Ubuntu server that you all will share. Working in a shared environment is vastly different than working on a local resource you own because changes you make impact eveyone that uses the system.

5. After you instructor installs all the required packages on the server I would like you all to attempt to access the web server from your home by plugging in the IP address or FQDN to the server.

### Questions

1. What happened? Why can't you get to the Apache web services remotely?

2. What command would you run to verify that Apache is running and the site is up?

3. What do you know about security in AWS and how to secure systems?

4. Why did I ask you all to use IP Chicken in order to determine your IP addresss?

5. Why is authorizing hosts by specific IP more secure than allow all hosts to ssh via any IP addresss.

