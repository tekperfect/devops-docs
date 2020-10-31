## Linux System Hardening

### ⏱ Agenda
1. [🏆 Learning Objectives](#%f0%9f%8f%86-learning-objectives)
1. [🔨 Cyber Attacks](#🔨-Cyber-Attacks)
1. [⚒ Tools](#⚒-Tools) 
1. [✅ For Understanding](#✅-For-Understanding)


# 🏆 Learning Objectives
**By the end of this, you'll be able to...**

1. Understand how to leverage proper tools for the right job
1. Understand the basics of Acct, Fail2ban and Lynis
1. Explain attacks and their variety 
1. Properly test against said attacks

# 🔨 Cyber Attacks
> **What is an cyber attack?**

Unlike physical attacks in real life, there are a lot more things going on in a cyber attack. Cyber attacks involve the use of one or more computer by an individual. These attacks come in all shapes and form, such as:

- DOS (Denial Of Service)
- MIM (Man In the Middle)
- SSH Cracking

and there are plenty more. Today we will be focusing on how to regulate traffic or unwanted users accessing to our server, to prevent attacks such as DOS or multiple failed connection like ssh Cracking. And if an attack succeed we will have another defense monitoring what users are doing on the server


# ⚒ Tools

Here are the tools that will be helping you along with securing your server. Go ahead and install them one by one, if you can't remeber it's `apt-get install`.


### Fail2ban
Fail2Ban is an intrusion prevention software framework that protects computer servers from brute-force attacks.

Configuration files - jail.conf<br/>
ignoreip = 127.0.0.1/8 # Fail2ban will ignore these IPs.<br/>
bantime = 600 # Setting up ban time length in seconds.<br/>
backend = auto # Define the monitoring log policy.<br/>
destemail = root@localhost # Email address for alerts<br/>
banaction = iptables-multiport # Action performed for banning.<br/>
port = 0:65535 # Port ranges to be banned<br/>
Options - Additional options available via configuration file<br/>
Alerts - Typically sent via email or written to log files

### Acct
Acct - is a process accounting file command use to monitor user status and activities 

Usage examples:
```bash
ac
ac -d
ac username
sa
sa - u
lastcomm
```
Options - Additional options available via command line<br/>
Alerts & Logging - How to you pull alerts and logs
 
### Lynis

Usage examples
```bash
lynis -c
```
What was the output?

- Checking mount points - Checking /home mount point [ SUGGESTION ]
  - Query swap partitions (fstab) [ NONE ]
  - Testing swap partitions [ OK ]
  - ACL support root file system [ ENABLED ]
  - Mount options of / [ OK ]
  - Checking search domains [ FOUND ]
  - Searching DNS domain name [ FOUND ]
    Alerts & Logging - How to you pull alerts and logs

# ✅ For Understanding

Why are these tools important?<br/>
What is an cyber attack?<br/>
How is one way to prevent a intrustion into your server? How would you implment your method step by step?


<!-- 
They are vital to protecting a public facing system that multiple people access.
They leverage logging and alerting mechanisms to protect the OS.
They offer vital information on the status of your operating systems security.

Cyber attacks are made with one or more computer by an individual or group


fail2ban system works

-->
