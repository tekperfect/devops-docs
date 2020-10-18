## Linux System Hardening

Background
Tools - What tools can you leverage to stop DoS attacks
Attacks - What kind of attacks are out there?
Services - What are the most vulnerable services?
Testing - How would you test your server hardening?

Tools

What is fail2ban, acct, and lynis?
How do you install it?
What are some of the usage options?
How can you leverage these tools to harden your security?

Fail2ban

Installation examples - sudo apt-get install fail2ban
Configuration files - jail.conf
ignoreip = 127.0.0.1/8 # Fail2ban will ignore these IPs.
bantime = 600 # Setting up ban time length in seconds.
backend = auto # Define the monitoring log policy.
destemail = root@localhost # Email address for alerts
banaction = iptables-multiport # Action performed for banning.
port = 0:65535 # Port ranges to be banned
Options - Additional options available via configuration file
Alerts - Typically sent via email or written to log files

Acct

Installation examples - sudo apt-get install acct
Usage examples - syntax
ac
ac -d
ac username
sa
sa - u
lastcomm
Options - Additional options available via command line
Alerts & Logging - How to you pull alerts and logs

Lynis

Installation examples - sudo apt-get install lynis
Usage examples - syntax
lynis -c
Output - What did you find?

- Checking mount points - Checking /home mount point [ SUGGESTION ]
  - Query swap partitions (fstab) [ NONE ]
  - Testing swap partitions [ OK ]
  - ACL support root file system [ ENABLED ]
  - Mount options of / [ OK ]
  - Checking search domains [ FOUND ]
  - Searching DNS domain name [ FOUND ]
    Alerts & Logging - How to you pull alerts and logs

Why are these tools important?

They are vital to protecting a public facing system that multiple people access.
They leverage logging and alerting mechanisms to protect the OS.
They offer vital information on the status of your operating systems security.
