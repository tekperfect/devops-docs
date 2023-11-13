# Installing Active Directory using the GUI

1. Login to your Windows 2022 server as the Administrator

2. Launch Server Manager

![AD](1-AD.png)

3. Select the Add Roles and Features option

![AD](2-AD.png)

4. Select Next to Continue

![AD](3-AD.png)

5. Select Role Based or Feature Based installation 

![AD](4-AD.png)

6. Make sure the Select a Server from the Server pool option is select and click next.

![AD](5-AD.png)
![AD](6-AD.png)
![AD](5-AD.png)

7. Make sure Active Directory Domain Services and DNS Server are selected and click next. You may be prompted to accept the defaults for installing these services.

![AD](8-AD.png)

8. Now select next to continue the installation 

![AD](9-AD.png)

9. Now select next to continue

![AD](10-AD.png)

10. Now select next to continue

![AD](11-AD.png)

11. Now select next to continue

![AD](12-AD.png)

12. Now select next to continue

![AD](13-AD.png)

13. The installation should begin

14. Once the installation is complete click on the close button

![AD](14-AD.png)

15. Now go to the upper right hand corner of the screen and select the post installation task associated with promoting the server to a domain controller by selecting the "Promote this server to a domain controller" selection.

![AD](15-AD.png)

16. Now you will need to type in the name of the domain you are creating. The domain names typically are in the form of fully qualified domain names like tekperfect.com or microsoft.com. However, if the domain controller is public organization will often use a domain_name.internal name when creating it.

![AD](16-AD.png)

17. Next you will need to supply a password used to restore the domain in case of disaster. Please choose a password that will not be too difficult to remeber and store it in your password manager.

![AD](17-AD.png)

18. Select next to continue

![AD](18-AD.png)

19. Next you will need to accept the netbios name that will be used for the domain. Typially you will not need to change it and click on the next button.

![AD](19-AD.png)

20. Select next to continue

![AD](20-AD.png)

21. Select next to continue

![AD](21-AD.png)

22. To finalize the domain controller configuration click on the Install button.

![AD](22-AD.png)

23. Congratulations you have completed the installation of AD (Active Directory). Please reboot your system and login to the new domain with your Administrator credentials.

# Installing Active Directory using Powershell

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


# Managing Active Directory from the GUI

On your server...


Open 'Active Directory Users & Computers'


Right-click the domain | Click 'Properties'


Click on the 'Group Policy' tab


Highlight the 'Default Domain Policy' | Click 'Edit'


Drill down to:

Computer Configuration | Windows Settings | Security Settings | Local Policies | Security Options


The 2 items you are looking for are:

`Interactive Logon: Message Title...`

`Interactive Logon: Message Text...`


Change these to whatever you want.


## Active Directory

To quickly list all the groups in your domain, with members, run this command:

`dsquery group -limit 0 | dsget group -members –expand`

To find all users whose accounts are set to have a non-expiring password, run this command:

`dsquery * domainroot -filter “(&(objectcategory=person)(objectclass=user)(lockoutTime=*))” -limit 0`

To list all the FSMO role holders in your forest, run this command:

`netdom query fsmo`

To refresh group policy settings, run this command:

`gpupdate`

To check Active Directory replication on a domain controller, run 
this command:

`repadmin /replsummary`

To force replication from a domain controller without having to go 
through to Active
Directory Sites and Services, run this command:

`repadmin /syncall`

To see what server authenticated you (or if you logged on with 
cached credentials) you can run either of these commands:

`set l`

`echo %logonserver%`

To see what account you are logged on as, run this command:

`whoami`

To see what security groups you belong to, run this command:

`whoami /groups`

To see the domain account policy (password requirements, lockout 
thresholds, etc) run this command:

`net accounts`


## System Administration and the GUI 

Windows supports several useful keyboard shortcuts:

`Windows Key+G`

Display gadgets in front of other windows.

`Windows Key++ (plus key)`

Zoom in, where appropriate.

`Windows Key+- (minus key)`

Zoom out, where appropriate.

`Windows Key+Up Arrow`

Maximize the current window.

`Windows Key+Down Arrow`

Minimize the current window.

`Windows Key+Left Arrow`

Snap to the left hand side of the screen

`Windows Key+Right Arrow`

Snap to the right hand side of the screen.

To quickly launch an application as an administrator (without the right-click, run as administrator), type the name in the Search programs and files field, and then press Ctrl-Shift-Enter.

Need to make a quick screencast to show someone how to do 
something? The Problem Steps Recorder can create an MHTML file that shows what you have done by creating a screen capture each time you take an action. Click the Start button and type ‘psr’ to open the Problem Steps Recorder.

Windows includes a screen scraping tool called the Snipping Tool. I have tons of users request a license for SnagIt, only to find this free tool (it’s under Accessories) does what they need.

A great way to save all your command line tools and make them available across all your computers is to install Dropbox or Google Drive, create a folder to save all your scripts and tools, and add that folder to your path. That way, they can be called from the command line or any other scripts, and if you update a script, it will carry across to any other machine you have.

You can free up disk space on your servers by disabling hibernate. Windows will create a hiberfil.sys equal to the amount of RAM. This is very useful with VMs that have lots of RAM but smaller C: drives. To disable hibernation, and reclaim that space, run this command:

`powercfg -h off`

You can get to the complete collection of Sysinternals tools online. You can even invoke them from the run command. Use the url: http://live.sysinternals.com or the UNC path: \\live.sysinternals.com\tools.

Speaking of the Sysinternals tools, almost any command line in this article can be run remotely on another machine (as long as you have administrative rights) using the psexec command included in the Sysinternals tools.

You can kill RDP sessions at the command line when you find that all the RDP sessions to a server are tied up.
regsvr32 query.dll (You only have to do this the first time.)

`query session /server:servername`

`reset session # /server:servername`

You can create a list of files and display the last time they were accessed, which is very useful when a network drive is low on space and users swear they have to have that copy of Office 2003 on the network. My advice? If they haven’t touched it in two years, burn it to DVD or write it to tape and then delete it from disk:

`dir /t:a /s /od >> list.txt` 

You can see all the open files on a system by running this command:

`openfiles /query`

You can pull all the readable data out of a corrupt file using this command:

`recover filename.ext`

Need to pause a batch file for a period of time but don’t have the sleep command from the old resource kit handy? Here’s how to build a ten second delay into a script:

`ping -n 10 127.0.0.1 > NUL 2>&1`

If your Windows website has stopped responding, or is throwing a 500 error, and you are not sure what to do, you can reset IIS without having to reboot the whole server. Run this command:
iisreset

You can use && to string multiple commands together; they will run sequentially.

If you find yourself restarting services frequently, you can use 
that && trick to create a batch file called restart.cmd and use it to restart services:
`net stop %1 && net start %1`

You can download a Windows port of the wget tool from here, and use it to mirror websites using this command:

`wget -mk http://www.example.com/`

### Group Policy Management

1. When working in Windows domains group policy management is an essential part of you daily administration responsibilities.

2. What is a group policy? Group Policy management is an domain managment tool used for managing users and computers through Group Policy settings. You can manage Group Policy settings and Group Policy Preferences in an Active Directory Domain Services (AD DS) environment through the Group Policy Management Console (GPMC).

3. As part of our lesson we are going to make 3 group policy changes after you create 5 user acounts, 5 groups, and 5 OU's, Please create the following users groups and OU's.

 Create a user named edgar with the full name Edgar Allen Poe
 Create a user named francis with the full name Francis Ford Coppola
 Create a user named mark with the full name Mark Ruffalo
 Create a user named sonia with the full name Sonia Sotomayor
 Create a user named sydney with the full name Sydney Park 
 Create a user named dwayne with the full name Dwayne Johnson 
 Create a user named michelle with the full name Michelle Yeoh

 Create a group called engineering
 Create a group called finance
 Create a group called marketing
 Create a group called it
 Create a group called sales
 Create a group called devops
 Create a group called security

4. Assign each user to a group

5. After the users are assigned to a group create an OU for each of the groups under the domain that correspond to each of the groups that you created.

6. Move each of the users to OU's that they are associated with.

7. Now with all th pre work complete create a new server and join that server to the domain you already created. Your instructor will walk you through this process.

8. Once the system is joined to the domain you will login to your domain controller and modify the following group policies by running the Group Policy managment tool (GPMC).

### Default Domain Password Policy

Modify Default Domain Password Policy 
To modify the password policy you will need to modify the default domain policy. 

1. Open the group policy management console 

2.  Expand Domains, your domain, then group policy objects

3. Right click the default domain policy and click edit

4. Now navigate to Computer Configuration\Policies\Windows Settings\Security Settings\Account Policies\Password Policy

![GPMC](password-policy.png)

5. Now double click one of the settings to edit. For example, I’ll double chick on minimum password length. 

I’m going to change this setting from 7 to 14 characters and then click apply.

6. Next we are going to change the maximum password age to 90 days so that people onl have to change their password every three months 42 days is a little too heavy handed.

7. Next we are going to set the enforce the password history to 10 passwords 24 password is too much for most people to overcome.

8. After you have move those changes and applied them we are going to create a group policy from scratch.

9. Before we move on to creating a policy from scratch we are going to change the account lockout policy to lock an account after 5 failed login attempts. This is to protect account from brute force attacks. To modify the account lockout policy go "Account Policies", Account Lockout Policy, and change the duration and reset time to 10 minutes. This will slow down and attack while not keeping the user out of their account for too long if they remeber their password.

![GPMC](account-lockout.png)

### Create a GPO from Scratch

1. On the left pane of the console tree, under the Domains option, right-click on the domain for which the group policy needs to be applied and click on the Create a GPO in this domain, and link it here option.

2. Create a new group policy and name it appropriately (For example, Logon Banner). Click on OK.

3. Right-click on the new group policy (Logon Banner) and click on Edit. This opens the GroupPolicy Management Editor.

4. In the left pane of the Group Policy Management Editor, navigate to Computer Configuration> Policies > Windows Settings > Security Settings > Local Policies and select Security Options.

5. On the right pane of the console, select the Interactive Logon: Message text for users attempting to logon policy. This is used to specify the text message to be displayed to the users at the time of logon.

6. In the Security Policy Settings tab, check the Define this policy settings in the template checkbox. Enter the logon message to be displayed and click Apply and OK.

7. Next, select the Interactive Logon: Message title for users attempting to login policy. This is used to specify the title that appears on the title bar of the Interactive logon window.

8. In the Security Policy Settings tab, check the Define this policy settings in the template checkbox. Enter an appropriate title and click Apply and OK.

9. After configuring the title and text of the interactive logon message, run the following command to apply the group policy from the command line. `gpupdate /force` 

10. Now that we have all of these policies in place you need to test them by using one of the accounts you created. By loggin into the new server you created to verify that the logon banner, password complexity, and account lockout are working properly. To make the testing easier you may need to add the accounts you arse testing with to the domain admins group so they can logon to the server. Typically we would use a Windows 11 or 10 workstation but provisioning client machines in AWS costs money.

11. If you are interested in where the current logon banner policy is located for the domain you can find it here.

![GPMC](logon-banner.png)
