## Patching Windows

**\* Examples**

Run Windows Updates

1. UsoClient StartScan – Start the scan for available updates
2. UsoClient StartDownload – Download but not install the updates or patches you scanned for.
3.UsoClient StartInstall – Install all downloaded updates.
4. UsoClient ScanInstallWait – Scans, downloads, and installs the updates
5. UsoClient RestartDevice – Restarts your computer to complete the update installation
6. UsoClient ResumeUpdate – Resumes the installation of update after reboot
7. UsoClient RefreshSettings – Refresh the update settings to the default


## Add Printers

** Add a printer Windows 10

If you are installing a local printer, connect the printer to your PC via USB or WiFi. Otherwise, for network or shared printers, proceed to the next step.

Right-click the Windows 10 Start menu and click Settings.

Then, on Windows Settings, click Devices.

On the left pane of the Devices settings screen, click Printers & scanners.

When Printers & scanners screen opens, click Add a Printers or scanner. Then, wait for the wizard to detect your printer.

If your printer is detected, proceed to install the drivers. As I mentioned at the beginning of this Itechguide, Windows 10 may not have a driver for your printer. In that instance, you have to manually download the driver. However, if your printer is NOT automatically detected, use the steps below to install your printer.

You are Done

However If not then following the remaining steps should help

Click The printer that I want isn’t listed. The Find a printer by other options screen will open.

You may need to select this option if you want to install a network printer.

Finally, to add a printer on Windows 10 from Windows Settings, on the Find a printer by other options screen, select one of the options, click Next and proceed to install your printer.


** Add a printer Windows 11

To add a printer, click on the Start button, type "Settings" in the search bar, and hit Enter. Alternatively, you can hit Windows+i to open Settings. On the left hand side of the Settings menu, click "Bluetooth & devices

Click "Add device" near the top right of the Printers and scanners page. Windows will attempt to detect your printer. Let this run for a bit --- say 30 seconds to a minute . Depending on your PC and the printer, it could take a little while to identify the printer correctly.

If your printer doesn't appear, click "Add manually." A pop-up window will present you with a few choices.


##  Manage and View Windows Event and Application Logs

View Windows Server Event logs from command line

1. Get-WinEvent -ListLog *

Get Windows logs based on the type of log you want to view

2. Get-WinEvent -LogName <LogName>

View the last 10 lasest security event logs

3. Get-WinEvent -LogName Security -Newest 10


Obtain the last 5 events from the application log

4. Get-WinEvent -LogName 'Application' -MaxEvents 5

To filer for events with a specific event ID use the following syntax. 

5. Get-WinEvent -FilterHashtable @{ Logname='Security'; Id='4672' }

To further refine your PowerShell log searches, you can use the Get-Date cmdlet in your query. For example, to limit our query of Security log entries with ID 4672 to the last hour, we can use this command:

6. Get-WinEvent -FilterHashtable @{ Logname='Security'; Id='4672'; StartTime=(Get-Date).AddHours(-1) }

To search an event log for specific words in the event log message, use the Message parameter. For example, to search the Security event log for the word Logoon, use the following command:

7. Get-WinEvent -LogName Security -Message *Logon*

##  Manage Processes and Services

1. Get-Process | Where-Object { $_.MainWindowTitle } | Format-Table ID,Name,Mainwindowtitle –AutoSize

To stop a process using powershell use the following command

2. - Stop-Process -Name "ProcessName" -Force

To stop a process by PID process identifier use the folloiwng command

3. Stop-Process -ID PID -Force

Another method of listing running tasks via the standard command prompt running as an adminstrator

4. tasklist | more

Query a specific service you are interested in

5. sc queryex servicename

Kill a process by PID process identifier. Please note The /f flag is used to kill the process forcefully. Failure to use the /F flag will result in nothing happening in some cases

6. taskkill /f /pid [PID]

To kill a process on a remote desktop or server 

7. taskkill /S AnsibleServer /U RemoteAccountName /P RemoteAccountPassword /IM chrome.exe /F

To stop start and restart services on a Windows server use the following commands via the standard command line

8. net start [serviceName]

9. net stop [serviceName]

To restart a service you would use Powershell

10. Restart-Service -Name [serviceName]

# Top Admin Commands

Gets items in a specified location. To list the folders in my drive C, I will run the command below:

1. Get-ChildItem c:/

You could use the Get-ChildItem Cmdlet to list items in a folder, then pipe the result to Copy-Item Cmdlet to copy the items to a new location. The command below will do the job:

2. Get-ChildItem C:\folder-name | Copy-Item -Destination C:\NewFolder

Once you know the name of the WMI class, you can execute Get-WmiObject to return useful information from a local or remote computer. Below is a list of the most important WMI classes you may need

3. Get-WmiObject -List -Class Win32*

or

4. Get-WmiObject -Class Win32_OperatingSystem

In order to run remote commands on another Windows server you can use the following command

5. Enter-PSSession Computer1

or if you want to run a command on multiple servers you can use this command

6. Invoke-Command -ComputerName Computer1, Computer2, Computer3, -ScriptBlock {Get-Process}

To open a persistent remote PS session on computers Computer1, Computer2, execute the command below:

7. $session = New-PSSession -ComputerName Computer1, Computer2


# Active Directory Powershell commands

To create a new computer object in a specified organizational unit (OU), enter the cmdlet:

1. New-ADComputer -Name "ComputerName" -SamAccountName "ComputerName" -Path "OU=Computers,DC=Domain,DC=com"

Create new security groups

2. New-ADGroup -Name "Security Group Name" -SamAccountName "SecurityGroupName" -GroupCategory Security -GroupScope Global -DisplayName "Security Group Name" -Path "CN=Groups,DC=Domain,DC=com" -Description "Brief description of the what security group is used for"

Create a new user account

3. New-ADUser -Name "User Account Name" -SamAccountName "UserAccountName" -AccountPassword (ConvertTo-SecureString "password" -AsPlainText -Force) -DisplayName "User Name" -Enabled $True -GivenName "FirstName" -Path "CN=Users,,DC=Domain,DC=com" -Server "controller.domain.com" -Surname "LastName" -UserPrincipalName "username@domain.com"

Create a new OU

4. New-ADOrganizationalUnit -Name "OU Name" -Path "DC=Domain,DC=com"


Add/remove users or computer objects to/from groups

5. Add-ADGroupMember SecurityGroupName -Members Username01 -Server "controller.domain.com" Remove-ADGroupMember SecurityGroupName -Members Username01 -Server "controller.domain.com"

Obtain the locally stored password from a computer object

6. Get-AdmPwdPassword -ComputerName "computer.domain.net"

Joining a computer to a domain

7. Add-Computer -DomainName "domain.com" -Credential Domain\Username -Restart -Force

Enable/Disable users, computers, or service accounts

8. Enable-ADAccount -Identity "ComputerName"

Disable-ADAccount -Identity “Username”

Unlock user accounts

9. Unlock-ADAccount -Identity "Username"

Locate disabled computer or user accounts

10. Search-ADAccount -AccountDisabled | FT Name,ObjectClass

