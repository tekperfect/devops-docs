# Windows Commands


ipconfig (list the ip configuration of a system)

ipconfig


dir (list the files in the current directory)

dir


Change Directory

cd c:\


Copy files from one folder to another
Command Example:

copy c:\source c:\destination

xcopy c:\source c:\destination


Track path to host or IP address


tracert xxx.xxx.xxx.xxx

traceroute www.google.com


Shows the current directory you are in

echo %cd%


Displays the name of the user you are logged in as

echo %username%


View the contents of a file

type filename


Edit a file

edit filename


Powershell command that ead the last few lines of file

Get-Content filename


Connect to a remote windows system

mstsc 192.168.1.1 or mstsc windows.tekperfect.com


systeminfo (displays system information about your computer)

systeminfo


See all network connections your computer has open

net use 


route print or netstat -r (see your routing table and network connections)

netstat -na 


Ping (send and echo or are you alive command to a system)

ping google.com

ping 192.168.1.1


nslookup (lookup domain name)

nslookup google.com


mkdir (create a directory)

mkdir directory_name


shutdown (shutdown and computer)

shutdown /r


Redirect output of a command to a file

ping > c:\filename.txt


Append the output of a command to a file

tracert >> c:\filename.txt


## Powershell commands


Install Active Directory using the following commands from Powershell. You will need to specify the domain name when running the third command.


get-windowsfeature


install-windowsfeature AD-Domain-Services


Install-ADDSForest -CreateDnsDelegation:$false -DatabasePath “C:\Windows\NTDS” -DomainMode “Win2012R2” -DomainName “domain_name.com” -DomainNetbiosName “DOMAIN_NAME” -ForestMode “Win2012R2” -InstallDns:$true -LogPath “C:\Windows\NTDS” -NoRebootOnCompletion:$false -SysvolPath “C:\Windows\SYSVOL” -Force:$true


Add-WindowsFeature RSAT-AD-PowerShell


Install IIS using the following commands from Powershell.


import-module ServerManager


Add-WindowsFeature Web-Server


Create AD User from commands in Powershell.


New-ADUser -Name "New_User" -UserPrincipalName New_User@domain_name.com


Set-ADAccountPassword -Identity “New_User”


Create AD Groups from commands in Powershell.


New-ADGroup -name GroupName -GroupScope Global
Windows Shortcut Commands




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


