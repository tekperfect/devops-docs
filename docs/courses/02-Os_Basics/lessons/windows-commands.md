# Windows Commands


ipconfig (list the ip configuration of a system)

`ipconfig`


dir (list the files in the current directory)

`dir`


Change Directory

`cd c:\`


Copy files from one folder to another
Command Example:

`copy c:\source c:\destination`

`xcopy c:\source c:\destination`


Track path to host or IP address


`tracert xxx.xxx.xxx.xxx`

`traceroute www.google.com`


Shows the current directory you are in

`echo %cd%`


Displays the name of the user you are logged in as

`echo %username%`


View or edit the contents of a file

`type filename`


Edit a file

`edit filename`


Powershell command that displays the last few lines of file

`Get-Content filename`


Connect to a remote windows system

`mstsc 192.168.1.1` or `mstsc windows.tekperfect.com`


systeminfo (displays system information about your computer)

`systeminfo`


See all network connections your computer has open

`net use`


route print or netstat -r (see your routing table and network connections)

`netstat -na` 


Ping (send and echo or are you alive command to a system)

`ping google.com`

`ping 192.168.1.1`


nslookup (lookup domain name)

`nslookup google.com`


mkdir (create a directory)

`mkdir directory_name`


shutdown (shutdown and computer)

`shutdown /r`


Redirect output of a command to a file

`ping > c:\filename.txt`


Append the output of a command to a file

`tracert >> c:\filename.txt`


## Powershell commands


Install Active Directory using the following commands from Powershell. You will need to specify the domain name when running the third command.


`get-windowsfeature`


`install-windowsfeature AD-Domain-Services`


`Install-ADDSForest -CreateDnsDelegation:$false -DatabasePath “C:\Windows\NTDS” -DomainMode “Win2012R2” -DomainName “domain_name.com” -DomainNetbiosName “DOMAIN_NAME” -ForestMode “Win2012R2” -InstallDns:$true -LogPath “C:\Windows\NTDS” -NoRebootOnCompletion:$false -SysvolPath “C:\Windows\SYSVOL” -Force:$true`


`Add-WindowsFeature RSAT-AD-PowerShell`


Install IIS using the following commands from Powershell.


`import-module ServerManager`


Add-WindowsFeature Web-Server


Create AD User from commands in Powershell.


`New-ADUser -Name "New_User" -UserPrincipalName New_User@domain_name.com`


`Set-ADAccountPassword -Identity “New_User”`


Create AD Groups from commands in Powershell.


`New-ADGroup -name GroupName -GroupScope Global`


## Change Login Banner on Windows via Group Policy


On your server...


Open 'Active Directory Users & Computers'


Right-click the domain | Click 'Properties'


Click on the 'Group Policy' tab


Highlight the 'Default Domain Policy' | Click 'Edit'


Drill down to:

Computer Configuration | Windows Settings | Security Settings | Local Policies | Security Options


The 2 items you are looking for are:

'Interactive Logon: Message Title...'

'Interactive Logon: Message Text...'


Change these to whatever you want.


## Active Directory

1. To quickly list all the groups in your domain, with members, run this command:

dsquery group -limit 0 | dsget group -members –expand

2. To find all users whose accounts are set to have a non-expiring password, run this command:

dsquery * domainroot -filter “(&(objectcategory=person)(objectclass=user)(lockoutTime=*))” -limit 0

3. To list all the FSMO role holders in your forest, run this command:

netdom query fsmo

4. To refresh group policy settings, run this command:

gpupdate

5. To check Active Directory replication on a domain controller, run 
this command:

repadmin /replsummary

6. To force replication from a domain controller without having to go 
through to Active
Directory Sites and Services, run this command:

repadmin /syncall

7. To see what server authenticated you (or if you logged on with 
cached credentials) you can run either of these commands:

set l

echo %logonserver%

8. To see what account you are logged on as, run this command:

whoami

9. To see what security groups you belong to, run this command:

whoami /groups

10. To see the domain account policy (password requirements, lockout 
thresholds, etc) run this command:

net accounts


## Windows Networking

11. To quickly reset your NIC back to DHCP with no manual settings, run this command:
netsh int ip reset all

12. To quickly generate a text summary of your system, run this command:
systeminfo | more

13. To see all network connections your client has open, run this command:
net use

14. To see your routing table, run either of these commands:
route print
netstat -r

15. Need to run a trace, but don’t have Netmon or Wireshark, and aren’t allowed to install either one? Run this command:
netsh trace start capture=yes tracefile=c:\capture.etl
netsh trace stop

16. To quickly open a port on the firewall, run this command, changing the name, protocol, and port to suit. This example opens syslog:
netsh firewall set portopening udp 161 syslog enable all

17. To add an entry to your routing table that will be permanent, run the route add command with the –p option. Omitting that, the entry will be lost at next reboot:
route add 0.0.0.0 mask 0.0.0.0 172.16.250.5 –p

18. Here’s a simple way to see all open network connections, refreshing every second:
netstat –ano 1

19. You can add a | findstr value to watch for only a specific connection, like a client ip.addr or port:
netstat –ano | findstr 216.134.217.20

20. You can use the shutdown to shutdown or reboot a machine, including 
your own, in a simple scheduled task like this:
shutdown –r –t 0 –m \\localhost

21. To make planned DNS changes go faster, reduce the TTL on the DNS records you plan on changing to 30 seconds the day before changes are to be made. You can set the TTL back to normal after you confirm the changes have been successful.

22. Set a short lease on DHCP scopes that service laptops, and set 
Microsoft Option 002 to release a DHCP leas on shutdown. This helps to ensure your scope is not exhausted and that machines can easily get on another network when the move to a new site.
Windows 7

23. Want to enable the local administrator account on Windows 7? Run 
this command from an administrative command prompt. It will prompt you to set a password:
net user administrator * /active:yes

24. You can do the same thing during install by pressing SHIFT-F10 at the screen where you set your initial user password.
Windows 7 supports several useful new keyboard shortcuts:

25. Windows Key+G
Display gadgets in front of other windows.

26. Windows Key++ (plus key)
Zoom in, where appropriate.

27. Windows Key+- (minus key)
Zoom out, where appropriate.

28. Windows Key+Up Arrow
Maximize the current window.

29. Windows Key+Down Arrow
Minimize the current window.

30. Windows Key+Left Arrow
Snap to the left hand side of the screen

31. Windows Key+Right Arrow
Snap to the right hand side of the screen.

32. To quickly launch an application as an administrator (without the right-click, run as administrator), type the name in the Search programs and files field, and then press Ctrl-Shift-Enter.
Here are some tips that can save you from buying commercial software:

33. Need to make a quick screencast to show someone how to do 
something? The Problem Steps Recorder can create an MHTML file that shows what you have done by creating a screen capture each time you take an action. Click the Start button and type ‘psr’ to open the Problem Steps Recorder.

34. Need to burn a disc? The isoburn.exe can burn ISO and IMG files. You can right click a file and select burn, or launch it from the command line.

35. Windows 7 includes a screen scraping tool called the Snipping Tool. I have tons of users request a license for SnagIt, only to find this free tool (it’s under Accessories) does what they need.

36. You can download this bootable security scanner from Microsoft that will run off a USB key, which is very useful if you suspect a machine has a virus.

37. A great way to save all your command line tools and make them available across all your computers is to install Dropbox, create a folder to save all your scripts and tools, and add that folder to your path. That way, they can be called from the command line or any other scripts, and if you update a script, it will carry across to any other machine you have.
Windows 2008

38. You can free up disk space on your servers by disabling hibernate. Windows 2008 will create a hiberfil.sys equal to the amount of RAM. This is very useful with VMs that have lots of RAM but smaller C: drives. To disable hibernation, and reclaim that space, run this command:
powercfg -h off

39. You can get to the complete collection of Sysinternals tools online. You can even invoke them from the run command. Use the url: http://live.sysinternals.com or the UNC path: \\live.sysinternals.com\tools.

40. Speaking of the Sysinternals tools, almost any command line in this article can be run remotely on another machine (as long as you have administrative rights) using the psexec command included in the Sysinternals tools.

41. You can kill RDP sessions at the command line when you find that all the RDP sessions to a server are tied up.
regsvr32 query.dll (You only have to do this the first time.)
query session /server:servername
reset session # /server:servername

42. You can create a list of files and display the last time they were accessed, which is very useful when a network drive is low on space and users swear they have to have that copy of Office 2003 on the network. My advice? If they haven’t touched it in two years, burn it to DVD or write it to tape and then delete it from disk:
dir /t:a /s /od >> list.txt 

43. The Microsoft Exchange Err command is one of the best all around troubleshooting tools you will find, as it can decode any hex error code you find as long as the products are installed on the machine. Download it from here.

44. You can see all the open files on a system by running this command:
openfiles /query

45. You can pull all the readable data out of a corrupt file using this command:
recover filename.ext

46. Need to pause a batch file for a period of time but don’t have the sleep command from the old resource kit handy? Here’s how to build a ten second delay into a script:
ping -n 10 127.0.0.1 > NUL 2>&1

47. If your Windows website has stopped responding, or is throwing a 500 error, and you are not sure what to do, you can reset IIS without having to reboot the whole server. Run this command:
iisreset

48. You can use && to string multiple commands together; they will run sequentially.

49. If you find yourself restarting services frequently, you can use 
that && trick to create a batch file called restart.cmd and use it to restart services:
net stop %1 && net start %1

50. You can download a Windows port of the wget tool from here, and use it to mirror websites using this command:
wget -mk http://www.example.com/

# Windows Security Best Practices


## 1. Clean up the Domain Admins Group

- There should be no day to day user accounts in the Domain Admins group, the only exception is the default Domain Administrator account.

- Members of the DA group are too powerful. They have local admin rights on every domain joined system (workstation, servers, laptops, etc).

This is what the bad guys are after.

- Microsoft recommends that when DA access is needed, you temporarily place the account in the DA group. When the work is done you should remove the account from the DA group.

- This process is also recommended for the Enterprise Admins, Backup Admins and Schema Admin groups.

### What’s the big deal?

- It’s becoming way to easy for attackers to obtain or crack user credentials.

- Once attackers gain access to one system they can move laterally within a network to seek out higher permissions (domain admins).

- One method of doing this is called pass the hash.

- Pass the hash allows an attacker to use the password hash to authenticate to remote systems instead of the regular password.

- These hashes can be obtained from end user computers.

- All it takes is one compromised computer or user account for an attacker to compromise a network.

- Cleaning up the Domain Admins group is a great first step to increasing your network security.  This can defiantly slow down an attacker.

- The process to remove accounts from the DA group is not easy. I know first hand as I’ve recently gone through this process. It’s very common to have way too many accounts in the DA group.

**Things will break so be prepared.**

- Before you start removing accounts from this group, document and review the accounts with your team.

- Then slowly start removing accounts one by one. It can be a painful process but it’s worth it.

- This is a huge accomplishment and will greatly reduce your attack surface.


## 2. Use at Least Two Accounts (Regular and Admin Account)

- You should not be logging in every day with an account that is a local admin or has privileged access (Domain Admin).

- Instead create two accounts, a regular account with no admin rights and a privileged account that is used only for administrative tasks.

- However, do not put your secondary account in the Domain Admins group, at least permanently.

- Instead, follow the least privilege administrative model. Basically, this means all users should log on with an account that has the minimum permissions to complete their work.

- You may read in other articles and forums to put your secondary account in the Domain Admins group.

- This is not a Microsoft best practice and I would advise against it. Again temporary is OK but it needs to be removed as soon as the work is done.

You should use a regular non admin account for day to day tasks such as checking email, browsing the internet, ticket system and so on. You would only use the privileged account when you need to perform admin tasks such as creating a user in Active Directory, logging into a server, adding a DNS record, etc.

Look at these two scenarios.

## Scenario 1 – IT Staff with Domain Rights

Steve logs into his computer with a privileged account, checks his email and inadvertently downloads a virus. Since Steve is a member of the DA group the virus has full rights to his computer, all servers, all files, and the entire domain. This could cause serious damage and result in critical systems going down.

Now, take the same scenario but this time Steve is logged in with his regular non admin account.

## Scenario 2 – IT Staff with Regular Rights

Steve checks his email and inadvertently downloads a virus. The virus has limited access to the computer and no access to the domain or other servers. This would cause minimal damage and prevent the virus from spreading through the network.

By simply using a regular account you can increase security and avoid causing serious damage.

It’s very easy to delegate admin tasks without giving staff domain admin rights. Here are some common tasks that can be delegated to a secondary admin account.

- Rights to Active Directory Users and Computers

- DNS

- DHCP

- Local admin rights on servers

- Group Policy

- Exchange

- Local admin rights on workstations

- Vsphere or Hyper-v Administration


- Regular account

- Account for Server Administration

- Account for Network Administration

- Account for Workstation Administration

By using two accounts and implementing the least administrative privileged model you will greatly reduce your security risks and avoid situations like scenario 1.

## 3. Secure The Domain Administrator account

- Every domain includes an Administrator account, this account by default is a member of the Domain Admins group.

- The built in Administrator account should only be used for the domain setup and disaster recovery (restoring Active Directory).

- Anyone requiring administrative level access to servers or Active Directory should use their own individual account.

- No one should know the Domain Administrator account password. Set a really long 20+ characters password and lock it in a vault. Again the only time this is needed is for recovery purposes.

In addition, Microsoft has several recommendations for securing the built in Administrator Account.  These settings can be applied to group policy and applied to all computers.

- Enable the Account is sensitive and cannot be delegated.
- Enable the smart card is required for interactive logon
- Deny access to this computer from the network
- Deny logon as batch job
- Deny log on as a service
- Deny log on through RDP

For more details on securing the Domain Administrator account see this Microsoft article, Securing Built in Administrator Accounts in Active Directory

## 4. Disable the Local Administrator Account (on all computers)
The local administrator account is a well known account in Domain environments and is not needed.

**Not needed, is that true?**

Yes

You should be using an individual account that has the necessary rights to complete tasks.

**What is the problem with the local admin account?**

Two Problems.

- It is a well known account, even if re-named the SID is the same and is well known by attackers.
- It’s often configured with the same password on every computer in the domain.

Attackers just need to compromise one system and now they have local admin rights on every domain joined computer.

If you need to perform admin tasks on the computer (install software, delete files, etc)  you should be doing so with your individual account, not the local admin account.

Even if the account is disabled you can boot into safe mode and use the local administrator account.

As an administrator, I know these best practices are not always practical or introduce a huge inconvenience.

What if the network is down or the NIC card died, what if you need to drop it from the domain and re-add it? There are ways around this but it can really slow you down.

**If you cannot disable the account here are recommendations for securing the account. A better alternative is to use the Microsoft LAPS tool (Covered below in tip #5)**

- Deny access to this computer from the network
- Deny log on as a batch job
- Deny log on as a service
- Deny log on through RDP

For more details see the following article, Securing local administrator accounts and groups

## 5. Use Local Administrator Password Solution (LAPS)

**Local administrator Password Solution (LAPS)** is becoming a popular tool to handle the local admin password on all computers.

**LAPS** is a Microsoft tool that provides management of local account password of domain joined computers. It will set a unique password for every local administrator account and store it in Active Directory for easy access.

This is one of the best free options for mitigation against pass the hash attacks and lateral movement from computer to computer.

It’s very common that organizations deploy Windows using an image based system. This makes it quick to deploy a standard configuration to all devices.

But..

This often means the local administrator account will be the same on every computer. Since the local Administrator account has full rights to everything on the computer, all it takes is for one of them to get compromised, then the hacker can access all the systems.

LAPS is built upon the Active Directory infrastructure so there is no need to install additional servers.

The solution uses the group policy client side extension to perform all the management tasks on the workstations. It is supported on Active Directory 2003 SP1 and above and client Vista Service Pack 2 and above.

If you need to use the local admin account on a computer you would retrieve the password from active directory and it would be unique to that single computer.



For step by step instructions on installing LAPS see this article, How to Install Local Administrator Password Solution (LAPS)


## 6. Use a Secure Admin Workstation (SAW)

A **secure admin workstation** is a dedicated system that should only be used to perform administrative tasks with your privileged account.

It should not be used for checking email or browsing the internet. In fact… it should not even have internet access.

**What tasks would you do on a SAW?** 

- Active Directory administration
- Group Policy
- Managing DNS & DHCP Servers
- Any task that requires admin rights on servers
- Admin rights to Management Systems such as VMware, Hyper-v, Citrix
- Office 365 Administration

You get the idea.

Basically, when you need to use your privileged account to perform admin tasks you should be doing it from a SAW.

Daily use workstations are more vulnerable to compromise from pass the hash, phishing attacks, fake websites, keyloggers and more.

Using a secure workstation for your elevated account provides much greater protection from those attack vectors.

Since attacks can come from internal and external it’s best to adopt an assume breach security posture.

Due to the continuous threats and changes to technology the methodology on how to deploy a SAW keeps changing. There is also PAW and jump servers to make it even more confusing.

**Here are some tips to help get you started:**

- Use a clean OS install (use latest Windows OS)
- Apply hardening security baseline (See tip#25)
- Enable full disk encryption
- Restrict USB ports
- Use personal firewall
- Block internet
- Use a VM – Terminal Server works well
- Minimal software installed
- Use two factor or smart card for access
- Restrict systems to only accept connections from the SAW

**Here is my typical workflow using a SAW:**

- Log into my computer with my regular account to check email and view new support requests. I have a request to give a user permissions to a shared folder.
- I will log into my SAW with my privileged account that has rights to modify AD group membership and add the user to the necessary AD security group.

Pretty straightforward right?

It may seem like a hassle but I actually find it more convenient this way. I can remote in when off network and have a server that has all the tools I need. I also don’t have to worry about re-install all of my support software if I need to re-image my computer.

**Resources:**

https://docs.microsoft.com/en-us/windows-server/identity/securing-privileged-access/privileged-access-workstations

## 7. Enable Audit policy Settings with Group Policy

Ensure the following Audit Policy settings are configured in group policy and applied to all computers and servers.

Computer Configuration -> Policies -Windows Settings -> Security Settings -> Advanced Audit Policy Configuration

**Account Logon**  
Ensure ‘Audit Credential Validation’ is set to ‘Success and Failure’  

**Account Management**  
Audit ‘Application Group Management’ is set to ‘Success and Failure’  
Audit ‘Computer Account Management’ is set to ‘Success and Failure’  
Audit ‘Other Account Management Events’ is set to ‘Success and Failure’  
Audit ‘Security Group Management’ is set to ‘Success and Failure’  
Audit ‘User Account Management’ is set to ‘Success and Failure’  

**Detailed Tracking**  
Audit ‘PNP Activity’ is set to ‘Success’  
Audit ‘Process Creation’ is set to ‘Success’  

**Logon/Logoff**  
Audit ‘Account Lockout’ is set to ‘Success and Failure’  
Audit ‘Group Membership’ is set to ‘Success’  
Audit ‘Logoff’ is set to ‘Success’  
Audit ‘Logon’ is set to ‘Success and Failure’  
Audit ‘Other Logon/Logoff Events’ is set to ‘Success and Failure’  
Audit ‘Special Logon’ is set to ‘Success’  

**Object Access**  
Audit ‘Removable Storage’ is set to ‘Success and Failure’  

**Policy Change**  
Audit ‘Audit Policy Change’ is set to ‘Success and Failure’  
Audit ‘Authentication Policy Change’ is set to ‘Success’  
Audit ‘Authorization Policy Change’ is set to ‘Success’  

**Privilege Use**  
Audit ‘Sensitive Privilege Use’ is set to ‘Success and Failure’  

**System**  
Audit ‘IPsec Driver’ is set to ‘Success and Failure’  
Audit’ Other System Events’ is set to ‘Success and Failure’  
Audit ‘Security State Change’ is set to ‘Success’  
Audit ‘Security System Extension’ is set to ‘Success and Failure’  
Audit ‘System Integrity’ is set to ‘Success and Failure’  

Malicious activity often starts on workstations, if you’re not monitoring all systems you could be missing early signs of an attack.

In the next section, I’ll cover what events you should be monitoring.

## 8. Monitor Active Directory Events for Signs of Compromise

You should be monitoring the following Active Directory events to help detect compromise and abnormal behavior on the network.

Here are some events you should be monitoring and reviewing on a weekly basis.

- Changes to privileged groups such as Domain Admins, Enterprise Admins and Schema Admins
- A spike in bad password attempts
- A spike in locked out accounts
- Account lockouts
- Disabled or removal of antivirus software
- All actives performed by privileged accounts
- Logon/Logoff events
- Use of local administrator accounts

**How do you monitor events in Active Directory?**  

The best way is to collect all the logs on a centralized server then use log analyzing software to generate reports.

Some log analyzers come pre built with Active Directory security reports and others you will need to build them your self.

Here are some of the most popular log analyzers.

- Elk Stack
- Lepid
- Splunk
- ManageEngine ADAudit Plus
- Windows Event Forwarding

With a good log analyzer, you will be able to quickly spot suspicious activity in your Active Directory environment.

Here are some screenshots from an analyzer that I use. The first screenshot shows a spike in account lockouts.

That is definitely not normal.



In this screenshot, you can see a huge spike in logon failures. Without a log analyzer, these events would be hard to spot.



## 9. Password Complexity Sucks (Use Passphrases Instead)

8 characters with complexity is no longer a secure password. Instead, use a minimum of 12 characters and train users on passphrases.

The longer the password the better.

Passphrases are simply two or more random words put together. You can add numbers and characters if you want but I wouldn’t make it a requirement.

Studies have shown when you require complexity it is used in a similar pattern and then repeated.  Hackers have caught onto this and there are now huge passwords lists (freely available) that contain millions of easy to guess passwords.

**Know anyone that uses passwords like this?**

S@mmer2018, or Winter2018! June2018$

These are awful password and are easily guessed.

Long passwords and using the passphrase technique makes it more difficult for password cracking software and for hackers to guess.

- Better Password Policy
- Set 12 character passwords
- Remember 10 password history
- use passphrases
- Lockout policy 3 attempts

The key to using passphrases is to be totally random with each word, you don’t want to type out a sentence where the next word can be guessed.

- Good passwords using passphrases
- Bucketguitartire22
- Screenjugglered
- RoadbluesaltCloud

The above examples are totally random. These would take a very long time to crack and most likely no one would guess them.

Bad passphrase examples

- Ireallylikepizza22  
- Theskyisblue44  

NIST recently updated their password policy guidelines in Special Publication 800-63 to address new requirements for password policies.

If your organization must meet certain standards then make sure those standards support these password recommendations.

Also be sure to update your companies written policy.

## 10. Use Descriptive Security Group Names

First of all, make sure you apply permissions to resources with security groups not individual accounts, this makes managing resources much easier.

Next, don’t name your security groups with a generic name like helpdesk or HR Training.

When you have generic names like this they will get used on all kinds of resources and you will have lost all control of security.

And there is no easy way to see what all a security group has permissions to. Yes, there are tools that you can run but if you have a medium or large size environment this will be a huge task.

**Here is a recent example of how this can get out of control (real story).**

I was working with a client on cleaning up permissions to Active Directory. There were multiple security groups that had delegated permissions to Active Directory.

There was a group called helpdesk, another group IS Support and one more called AD Modify.

I was under the impression only Helpdesk staff had rights to Active Directory to reset passwords and unlock accounts.

Come to find out these groups were used for other resources such as the helpdesk software, network share and printers. So it included various IT staff.

Once I removed these groups I got phone calls from programmers and business analyst asking why they couldn’t reset users passwords anymore. Why on earth are programmers resetting user passwords?

I clear precise Security group name would have prevented this from happening.

If you don’t name the security group specific then it can be a catch all for permissions to many other things.

**Here are some good examples of how to name groups.**

**Example 1:** Allow helpdesk to reset passwords  
**Security group name:** IT-Helpdesk-ActiveDirectory  

Since the group name is precise, this would help prevent it from being used on other resources like a printer or network share.

**Example 2:** Allow HR rights to a shared folder
**Security group name:** HR-Training-Folder-RW

Again, this has a very specific name and helps identify what it should be used for.

You can come up with your own naming convention just get specific with the name and avoid generic one word group names.

## 11. Cleanup Old Active Directory User & Computer Accounts

- You need to have a procedure in place to detect unused user and computer accounts in Active Directory.

- You don’t want a bunch of unused accounts sitting in Active Directory just waiting for an attacker to discover and use.

- This can also cause issues with reporting, patching and slow down group policy.

I run a process each month to detect and remove unused accounts.

Here is a step by step guide I wrote for how to clean up old accounts in Active Directory. 

## 12. Do NOT Install Additional Software or Roles on Domain Controllers

- Domain controllers should have limited software and roles installed on them.

- DC’s are critical to the enterprise, you don’t want to increase security risks by having additional software running on them.

- Windows Server Core is a great option for running the DC role and other roles such as DHCP, DNS, print servers and file servers.

- Server Core runs without a GUI and requires fewer security patches due to its smaller footprint.

I’ve been running core on several clients for years and it’s been a great choice. Very stable

More software, more roles = increased security risks.

Keep your DCs lean and clean.

## 13. Continues Patch Management & Vulnerability Scanning

Attackers are quick to exploit known vulnerabilities.

If you do not regularly scan and remediate discovered vulnerabilities you are at a much greater risk for comprise.

There are a large number of vulnerability and scanning tools available, see my list of the top 6 patch management software compared.

**Tips for Continues Vulnerability Management**

- Scan all systems at least once a month to identify all potential vulnerabilities. If you can scan more frequently than that’s even better.
- Prioritize the finding of the vulnerability scans and first fix the ones that have known vulnerabilities in the wild.
- Deploy automated software updates to operating systems
- Deploy automated updated to 3rd party software
- Identify out of date software that is no longer supported and get it updated.

## 14. Use DNS Services to Block Malicious Domains

You can prevent a lot of malicious traffic from entering your network by blocking malicious DNS lookups.

Anytime a system needs to access the internet it will in most cases use a domain name.

Computers talk to each other by IP address so the computers use DNS to map a domain name to an IP address.

There are several services available that check DNS queries for malicious domains and blocks them.

**How does this work?**

These DNS services gather intelligence about malicious domains from various public and private sources. When it gets a query for a domain that it has flagged as malicious it will block access when your system attempts to contact them.

Here is a video from Quad 9 that explains their DNS service.



**Here is an example:**



Step1: Client clicks a link that goes to example.net

Step2: Local cache is checked

Step 3: DNS Service checks if the domain is on its threat list, it is so it returns a block reply.

In the above example since the DNS query returned a block, no malicious traffic ever entered into the network.

**Here are some of the most popular secure DNS services**

- Quad9
- OpenDNS
- Comodo Secure DNS

I’m currently using Quad9, it’s free and easy to setup.

Also, most IPS (Intrusion Prevention Systems) systems support the ability to check DNS lookups against a list of malicious domains.

## 15. Run Critical Infrastructure on latest Windows Operating System

With each new version of Windows OS, Microsoft includes built in security features and enhancements.

Just staying on the latest OS will increase overall security.

**New Security Features in Server 2016**

- Shielded Virtual Machines
- Just Enough Administration
- Headless Windows Defender
- Credential Guard
- Device Guard

Here is a good video from Microsoft on Windows Server 2016 Security.



## 16. Use Two Factor Authentication for Remote Access

- Compromised accounts are very common and this can provide attackers remote access to your systems through VPN, Citrix, or other remote access systems.

- Check your Office 365 or ADFS logs, you will be surprised at how many login attempts are coming from China and Russia.

- One of the best ways to protect against compromised accounts is two factor authentication. This will also help against password spaying attacks.

Let’s say a user fell for a phishing attempt that asked the user to verify their username and password.

Now the attacker has that users Active Directory credentials. The attacker could now gain access to a number of systems from anywhere.

If the user had two factor enabled this could prevent access even though the account has been compromised. The attacker would need the second set of credentials to get logged in.

There really is no stopping accounts getting compromised there are too many ways for attackers to gain the credentials.

If your using Office 365 and depending on what package you have MFA may be included. Take advantage of this feature.

**Popular two factor authentication solutions**

- DUO
- RSA
- Microsoft MFA

## 17. Monitor DHCP Logs for Connected Devices

You should know what is connected to your network if you have multiple locations with lots of users and computers this can be challenging.

There are ways to prevent only authorized devices from connecting but this can be costly and a lot of work to set up. If you have the resources then that is the way to go.

Another method that is already available to you is to monitor the DHCP logs for connected devices.

You should have all end user devices setup to use DHCP. You can then look at the logs to see what is connecting. You should have a naming convention for your equipment, this will make it easy to spot possible unauthorized devices.

In the screenshot below I can easily spot a device that does not follow my computer naming convention.

minint-1bdvd67 is not something I recognize. I will need to look into this and see if it is an authorized device.



## 18. Monitor DNS Logs for Security Threats
Most connections start with a DNS query. All domain joined systems should be set up to use your local Windows DNS server.

With this setup, you can log every internal and external DNS lookup. When a client device makes a connection to a malicious site it will log that site name in the DNS logs.

These malicious domains are usually odd, random character domains that raises red flags.

Here are some screenshots of suspicious DNS lookups from my logs. These repeatedly show up in my logs for a handful of devices.

I seriously doubt a user is trying to go to this site intentionally. These kinds of lookup need to be looked into to determine if it’s malicious or not.





To view the DNS lookups you first need to enable the DNS debug logs on the Windows Servers.

**Steps to enable DNS debug logs on Windows Server**

Step 1: Open the DNS Management Console

Step 2: Right click and select properties

Step 3: Click Debug Logging Tab

Step 4: Check the box “Log packets for debugging



Once you have the debug logs setup you can import those logs into an analyzer to quickly spot malicious activity.

You can also convert the log file to a csv to make it easier to read and filter.

## 19. Use Latest ADFS and Azure Security Features

**ADFS and Azure** have some great security features. These features will help with password spraying, account compromise, phishing and so on.

No matter what level of office 365 you are on there are some features you should look into.

Of course, the premium subscriptions have the best security features.

But

Microsoft does improve and add new features at every level (At least this is what I’ve noticed since being on Office 365).

**Here are some features that are worth looking into:**

- Smart Lockout – Uses algorithms to spot unusual sign on activity.
- IP Lockout – Uses Microsoft’s database of known malicious IP addresses to block sign on ins.
- Attack Simulations – You should be doing regular phishing tests to help train end users. Microsoft will be releasing phish simulator software very soon.
- MFA Authentication – Microsoft’s 2 factor solution
- Banned passwords – Checks passwords against a known list
- Azure AD Connect Health – Provides several good reports
- Custom bad passwords – Ability to add custom banned passwords to check against.

I’m currently running a hybrid office 365 setup. In azure I can see several risky sign on reports.



Azure alerted me to a sign on that came from China from one of our accounts.



Some of these features are available with the latest ADFS version and some are included with office 365 subscription.

Definitely check out all the available security features in ADFS, Office 365 and Azure.

**Resources:**

https://cloudblogs.microsoft.com/enterprisemobility/2018/03/05/azure-ad-and-adfs-best-practices-defending-against-password-spray-attacks/

## 20. Use Office 365 Secure Score

- Secure score analyzes your office 365 organization security based on activity and security settings.

- Secure Score checks your Office 365 services then checks your settings and activities and provides you a security score.

- Once it analyzes your score it will provide a detailed list of what was scored and recommended actions to fix the issues.

- You will need a Premium or Enterprise subscription to access this feature, in addition, you will need to be assigned the global admin or custom role.

Microsoft continues to expand and add additional features to Secure Score.

If you have access to this feature then take advantage of it.



## 21. Plan for Compromise ( Have a recovery plan)

If your network was compromised today or hit with RansomWare, what would you do?

Do you have a response policy? Have you tested and trained staff on how to handle such an event?

Cyber attacks can shut down systems and bring business operations to a halt.

The City of Atlanta was shut down by a cyber attack, this prevented residents from paying online utility bills. In addition, Police officers had to write reports by hand.

Last I checked it cost more than $5 million for them to recover from the attack.

A good incident response plan could have limited the impact and enabled services back online much faster.

**Here are a few things to include in an incident response plan**

- Create an incident response policy and plan
- Create procedures for performing incident handling and reporting
- Establish procedures for communicating with outside parties
- Establish  response teams and leaders
- Prioritize servers
- Walkthrough and training

NIST has a great guide on computer security incident handling, https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-61r2.pdf

## 22. Document Delegation to Active Directory

The best way to control access to Active Directory and related resources is to use Security Groups.

If your delegating rights to individuals then you are losing control of who has access.

Create custom groups with very specific names, document who has rights and a process for adding new users.

Don’t just allow users to be added to these custom groups without an approval process. This is just another way permissions can get out of control.

Know what groups are delegated to what resources, document it and make sure your team is on the same page.

## 23. Lock Down Service Accounts

**Service accounts** are those accounts that run an executable, task or service, AD authentication, etc.

These are wildly used and often have a password set to never expire.

These accounts will often end up with too many permissions and more often than not are a member of the domain admins group.

Bad..very bad

Sometimes this is suggested by the vendor.

Don’t allow that to happen, there are ways to make it work without DA access.

**Here are some tips for locking down service accounts.**

- Use long Strong passwords
- Give access to only what is needed
- Try to avoid granting local administrator rights
- Do not put in Domain Admins
- Deny logon locally
- Deny logon as a batch
- Require vendors to make their software work without domain admin rights

## 24. Disable SMBv1

- SMBv1 is 30 years old and Microsoft says to stop using it (They have been saying that for a long time).

- SMB (Server Message Blocks) is a network file and printer sharing protocol.

- SMBv1 has been replaced by SMBv2 and SMBv3.

- Many viruses can spread and exploit flaws in the SMBv1 protocol.

In addition, to the security issues with SMBv1 it’s not an efficient protocol, you will lose performance with this old version.

Beginning with Windows 10 Fall Creators Update SMBv1 will be disabled by default.

If you are running an older Windows version or still on Windows 7, here is how you disable it.

**Warning: You will want to test this. Even though most operating systems support smbv2 and smbv3, you can still run into issues with some older application.**

**Method 1:** Disable Through Windows Features

**Step1:** Go to Programs and Features > Turn Windows features on or off

**Step2:** Scroll through the list and uncheck “SMB 1.0/CIFS File Sharing Support”

You will be prompted to restart.



**Method 2:** Disable in Registry

If you are still running Windows 7 you will have to edit the registry to disable SMBv1.

Navigate to this key

>HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters

Right click the parameters key and choose New > DWORD (32-bit) value.

Name the new value SMB1. It should by default be value 0 which disabled it.



To disable SMBv1 across all computers you can use group policy registry preference.  This will allow you to create the above registry setting on all computers.

## 25. Use Security Baselines and Benchmarks

A default install of the Windows Operating system has many features, services, default settings and enabled ports that are not secure.

These default settings should be reviewed against known security benchmarks.

Establishing a secure configuration on all systems can reduce the attack surface while maintaining functionality.

There are several resources that provide security benchmarks.

Microsoft has a Security Compliance Toolkit that allows you to analyze and test against Microsoft recommended security configuration baselines.

Another great resource is **CIS SecureSuite**

It also provides security configuration baselines. In addition, it provides tools that can scan a system and provide a report on failures.

Most of the recommended settings can be set up using Group Policy and deployed to all computers.

Here is a screenshot of the CIS Securesuite tool. It ran a scan on my computer and generated a report on all the settings that passed and failed.


CIS Securesuite can also scan against other systems like cisco, vmware, linux and more.

**Recommended Tool:** SolarWinds Server & Application Monitor


This utility was designed to Monitor Active Directory and other critical services like DNS & DHCP. It will quickly spot domain controller issues, prevent replication failures, track failed logon attempts and much more.

What I like best about SAM is it’s easy to use dashboard and alerting features. It also has the ability to monitor virtual machines and storage.



## Windows Video Link 👇🏾
[![WINDOWS AD INSTALL](windows.png)](https://drive.google.com/file/d/1N7TP8H-7-nv9IKPObkIMAFS2Q6zC3wvT/view?usp=sharing)


## Windows Server Install ISO Link 👇🏾
[![WINDOWS SERVER ISO](iso.png)](https://tekperfect-devops-uploads.s3-us-west-1.amazonaws.com/WIN_SERVER_STD_CORE_2019_64BIT.ISO)

## Windows Server Image 👇🏾
[![WINDOWS SERVER Image](windows-vm.png)](https://tekperfect-devops-uploads.s3-us-west-1.amazonaws.com/windows-2019-server.ova)


## Windows Questions
1. How do you setup Active Directory on a Windows server via the GUI?

2. What is the interface you use ie... What is the name?

3. How would you setup Active Directory on Windows using code or from the command line
4. What is the name of the language you would use to install it?

5. What is the extension of the script that you would run to install it?

6. What additional services get installed when you install Active Directory?

7. Why are those services need and what are they used for?

8. Name at least one other tool or service you could install from Server Manager.

9. What is a group policy and why are they important in Windows environments?

10. Name one group policy related to security that you would want in a corporate environment.
