# Atlassain JIRA Admin Guide

## Using the Directory Browser

### About Directories
Crowd supports an unlimited number of user directories. A **directory** can be one of the following types:

### Internal to Crowd.

- Connected to Crowd via an LDAP connector (e.g. for Active Directory), with all authentication and user/group management in LDAP.
- A Crowd internal directory for user/group management but with authentication delegated to LDAP (e.g. Active Directory).
- Connected via a custom directory connector (e.g. for a legacy database).

- Once you have defined a directory in Crowd, you can map it to applications. 
- Crowd will then pass authentication and authorization requests to the directory, for all applications that are mapped to that directory. 
- Modification of directory entities (users and groups) can be done via the Crowd Administration Console or via the application, depending on the application's capabilities.

You can even map multiple directories to an application, providing the application with a single view of multiple directories in a specified order.

## About the Directory Browser
The **Directory Browser** allows you to view and search for configured directories.

### To use the Directory Browser

1. Log in to the Crowd Administration Console.
2. In the top navigation bar, click Directories.
3. This displays the Directory Browser which shows all the directories that exist in your Crowd system. You can refine your search by specifying a Name (note that this is case-sensitive), or Active/Inactive directories.
(info) An Inactive directory cannot be used by any applications, regardless of whether or not they are mapped to it.
4. To view or edit a directory's details, click on the directory's name

You created one default directory when you set up Crowd. To add more directories, see Adding a Directory


**Directories** contain authentication and authorization information about users, groups and roles. Crowd supports an unlimited number of directories. Administrators can use different directories to create silos of users. For example, you might store your customers in one directory and your employees in another.
Crowd supports the following types of directory:

### Crowd Internal Directory
Internal directories use the Crowd database to store user, group and role information. Internal directories are stored in Crowd's database server.

### Delegated Authentication Directory
A Delegated Authentication directory combines the features of an internal Crowd directory with delegated LDAP authentication. This means that you can have your users authenticated via an external LDAP directory while managing the users and groups in Crowd. You can use Crowd's flexible and simple group management when the LDAP groups do not suit your requirements. Alternatively, you can have Crowd import users' group memberships from LDAP each time they authenticate.

## LDAP Directory Connector

### Remote Crowd Directory Connector
Remote Crowd directories allow Crowd to Crowd connections. In other words, one Crowd server can obtain users and groups from another Crowd server.

### Custom Directory Connector
Custom directory connectors allow developers to connect Crowd to custom user-stores, such as existing databases or legacy systems.
You can add as many directories of each type as you need.

To add a directory,

1. Log in to the Crowd Administration Console.
2. In the top navigation bar, click Directories.
3. Click Add Directory.
4. This will display the Select Directory Type screen (screenshot below).

5. Select the type of directory you want to add:
- 'Internal' — see Configuring an Internal Directory
- 'Delegated Authentication' — see Configuring a Delegated Authentication Directory
- 'Connector' — see Configuring an LDAP Directory Connector (e.g. Microsoft Active Directory)
- 'Remote Crowd' — see Configuring a Remote Crowd Directory
- 'Custom' — see Configuring a Custom Directory Connector

(info) Once a directory has been configured, you will need to specify permissions for its users. You can then map the directory to appropriate applications.

## Configuring an LDAP directory connector

1. Log in to the Crowd Administration Console.
2. In the top navigation bar, click Directories.
3. The Directory Browser opens.
4. Click Add Directory. 
5. Select Connector.
6. Complete the configuration information required on each of the tabs to finish setting up the connector and click 

### General configuration notes

- By default, the Cache Enabled setting on the 'Details' tab is selected. We recommend you leave this setting selected. For more information, see Configuring Caching for an LDAP Directory.
- If you select the Manage Groups Locally setting on the 'Connector' tab (available only if you've selected the Cache Enabled check box), new groups are created and updated in the Crowd database and not propagated to the LDAP server. 
- Memberships of local groups are also stored locally. This makes it possible to augment the group structure with new groups even with a read-only LDAP server. When this option is enabled, only local groups can be created and updated, while groups synchronized from the remote directory cannot be locally modified.
- If you select the Use the User Membership setting on the 'Connector' tab, Crowd will use the group membership attribute on the user when it retrieves the members of a given group, which will result in a more efficient retrieval. 
- If you select the Use 'memberOf for Group Membership setting on the 'Connector' tab, Crowd will use the 'memberOf' attribute when it retrieves the list of groups a users belongs to, which will result in a more efficient retrieval. If you don't select this setting, Crowd will use the members attribute on the group ('member' by default) for the search.
- Crowd will synchronize user renames made in the LDAP server, provided that the User Unique Identifier Attribute is set in the 'Configuration' tab. If this attribute is not set and a user is renamed in the LDAP server, Crowd will not be able to track the user's identity, and will delete the user with the old name and create a new user with the new name. Crowd does not support group renames.
- If the directory type you're using guarantees the format of DNs, we recommend selecting the Use Naive DN Matching setting on the 'Connector' tab to allow Crowd to do a direct, case-insensitive, string comparison when it compares DNs. This setting can significantly improve performance. 

- Specify the Username on the 'Connector' tab in the following format: cn-adminstrator, cn=users, dc=ad, dc=acmecorp, dc=com.
- If you specify the User Name RDN attribute, the DN for each LDAP entry is composed of two parts: the RDN and the location within the RDN directory where the recored resides. The RDN is the portion of your DN that is not related to the directory tree structure.
- By default the Synchronise group memberships when logging in option is set to For newly added users only. This will synchronize group memberships for users who have been created in the LDAP directory, but not yet synchronized to Crowd. This is recommended for convenience, without sacrificing performance. Other options are to synchronize the memberships Every time a user logs in, which was the behaviour in - Crowd 2.7, 2.8 and 2.9, and to Never synchronise the memberships, which was how Crowd behaved before version 2.7.
- If you are connecting to the LDAP directory as a user affected by query limits (for example using a DN that is not a RootDN in OpenLDAP, with olcSizeLimit set) some operations might not return all results. Currently it is recommended to connect as a user that is unaffected by limits. 
- If you have successfully added your connector, but aren't able to see any data when you browse the LDAP directory, make sure that any non-standard object types and filters are configured correctly.

By default, the Active setting on the 'Details' tab is selected. Only clear this setting if you want to prevent all users within the directory from accessing mapped applications. 

**Inactive directories:**  

- Are not included when Crowd searches for users, groups, or memberships
- Still appear in the Crowd Administration Console screens
- You can also configure site-wide LDAP connection pool settings. See Configuring the LDAP Connection Pool.

## Directory-specific configuration notes

- Apache Directory Server (ApacheDS)
- There are two known issues with ApacheDS and Crowd:
- ApacheDS 1.0.2 does not support password resets without a restart. This is an ApacheDS limitation.
- ApacheDS does not support paged results. CWD-1109: Cannot browse users or groups if Use Paged Results is enabled. Again, this is an ApacheDS limitation.

### Apple Open Directory
- Crowd's Apple Open Directory support is read-only. You cannot add or update user details or group details in a Crowd-connected OS X Open Directory server. Users will not be able to change their passwords from Crowd or from Crowd-connected applications.
- Crowd will check both the gidNumber and the memberUid attributes to determine if a user is a member of a group. The name of the gidNumber attribute is not configurable — Crowd will always use this attribute to determine membership.
- The RFC 2307 schema does not support nesting of groups, so Crowd does not support nested groups in Apple Open Directory.

### Fedora Directory Server
- Crowd supports read-only connections to Fedora DS using the Posix/NIS schema RFC 2307. You cannot add or update user details or group details in a Crowd-connected Fedora Directory server. Users will not be able to change their passwords from Crowd or from Crowd-connected applications.
- Crowd will check both the gidNumber and the memberUid attributes to determine if a user is a member of a group. The name of the gidNumber attribute is not configurable — Crowd will always use this attribute to determine membership.
- The RFC 2307 schema does not support nesting of groups, so Crowd does not support nested groups in Fedora DS.

### Microsoft Active Directory
- If you want to use a secure SSL connection, make sure you configure an SSL Certificate before enabling this setting.
- We recommend selecting the Enable Incremental Sync setting to allow Crowd to retrieve changes made after the last synchronization when possible.
- Specify the Base DN in the following format: dc=domain1,dc=local. You will need to replace the domain1 and local for your specific configuration. Microsoft Server provides a tool called ldp.exe which is useful for finding out and configuring the the LDAP structure of your server.
- If you want to use Crowd to add users or change passwords in Microsoft Active Directory, you will need to install an SSL certificated generated by your Active Directory server and then install the certificate into your JVM keystore. Please read the instructions:  
    1. Configuring an SSL Certificate for Microsoft Active Directory.
    2. Crowd will synchronize the user status with Active Directory. If a user account is disabled in Active Directory, the user will be deactivated in Crowd, and reciprocally, if a user is deactivated in Crowd, the user account will be disabled in Active Directory. To prevent this synchronization,  use Manage User Status Locally in the 'Connector' tab.
    3. Users' primary groups in Active Directory will be displayed as regular memberships in Crowd. However, you will not be able to change or remove the user's primary group through Crowd's user interface.
    4. If you are using a single Active Directory domain, you should disable "Use node referrals" in the directory configuration. If you have a forest, you should read User lookup fails with PartialResultException in Jira server and ensure your DNS server is configured appropriately.

- We have not tested Crowd integration with Active Directory Application Mode (ADAM). However, ADAM and Active Directory share the same code base, LDAP interface and API. So ADAM should work with Crowd, following the same integration instructions as above. If you try it, we'd be interested to hear of your experiences.
- Crowd's Filter out expired users feature requires an LDAP connection that exposes the accountExpires attribute. Care should be taken when connecting to the Active Directory Global Catalog as it does not replicate the aforementioned attribute by default. This may cause inconsistent user status in Crowd.

### Posix Schema for LDAP or Open LDAP
- Currently, Crowd supports read-only access to the directory based on the Posix schema. You cannot add or update user details.Crowd supports read-only connections to an LDAP directory using the Posix/NIS schema. This is useful if you have a Unix installation and want to integrate with an LDAP directory. The Posix/NIS schema allows integration between an LDAP directory and the Unix NIS (Network Information Service).
- Crowd will check both the gidNumber and the memberUid attributes to determine if a user is a member of a group. The name of the gidNumber attribute is not configurable — Crowd will always use this attribute to determine membership.
The RFC 2307 schema does not support nesting of groups, so Crowd does not support nested groups in the Posix schema.


### LDAP Object Structures

The Crowd LDAP connectors assume that all container objects (groups) have the full DN to the associated member. Currently the membership attributes on a User object are not used by Crowd.

- Supported Object Types
- groupOfUniqueNames
- inetorgperson
- posixGroup
- posixUser
- zimbraAccount
- Microsoft Active Directory

The Active Directory LDAP connector assumes that all LDAP object types are of the default structure. Any changes to the default object structure of the User and Group objects will require a custom connector to be coded.

### Supported Attributes
Crowd's LDAP connectors support the adding and updating of the following user attributes when integrating with an LDAP server via an LDAP directory connector:

- surname
- given name
- email
- password

If you need support for additional LDAP attributes, the Crowd LDAP connector can be extended. With a license purchase, full source is available and the LDAP connectors can be modified to support any number of attributes.

## Configuring your Mail Server

Once you have configured your mail server as described below, Crowd can send email notifications to users at specific events, such as when a user requests a password reset or a server event occurs.

On this page:

Accessing the Mail Configuration Screen
To configure SMTP email,

1. Log in to the Crowd Administration Console.
2. In the top navigation bar click,  > Mail configuration.
3. Enter the details of your mail server as described below.
4. Click Update.

### Mail Server Option 1: SMTP
 

Enter the details as follows:

- Server alert email — The email address which will receive notifications about server events. For example, Crowd will send an email message to this address when the number of users approaches the license limit.
- From Email Address — Crowd will add this email address as the 'sender' on the emails generated by Crowd and sent to users.
- Subject Prefix — The prefix which will appear at the start of the email subject, for all emails generated by Crowd. This can be useful for email client programs that offer filtering rules.
- Mail Server Type — Select the 'SMTP Server' radio button.
- SMTP Host — The hostname of the SMTP mail server, e.g. 'localhost' or 'smtp.acme.com'.
- SMTP Port — The port on which the SMTP mail server listens. The default is '25'.
- Username — The username that your Crowd server will use when it logs in to your mail server.
- Password — The password that your Crowd server will use when it logs in to your mail server.
- Timeout — Maximum time Crowd tries to send messages. The default is '60' seconds.
- Use Secure Sockets Layer (SSL) — Select this check-box if you want to access your mail server over SSL (Secure Sockets Layer). This ensures that all email communications between Crowd and your mail server are encrypted, provided your mail server supports SSL.

Additionally, as you are connecting to an SSL service, you will need to import the SMTP server certificate into a Java keystore. The process is described in Configuring Crowd to Work with SSL.

## Mail Server Option 2: JNDI Location
 

Select the 'JNDI Location' if you want to connect to a mail server via a datasource managed by your application server.

Enter the details as follows:

- Server alert email — The email address which will receive notifications about server events.
- From Email Address — Crowd will add this email address as the 'sender' on the emails generated by Crowd and sent to users.
- Subject Prefix — The prefix which will appear at the start of the email subject, for all emails generated by Crowd. This can be useful for email client programs that offer filtering rules.
- Mail Server Type — Select the 'JNDI Location' radio button.
- JNDI Location — The datasource name of a javax.mail.Session object which has been set up by your application server.

### Configuring the JNDI Resource

For example, in Tomcat 5.5 (the default application server that is bundled with the Crowd distribution (not EAR-WAR)), your JNDI location would be java:comp/env/mail/CrowdMailServer, and you would add the following section in conf/server.xml or conf/Catalina/localhost/crowd.xml, inside the <Context> node:

<Context path="/crowd" docBase="${CATALINA_HOME}/crowd-webapp" reloadable="false">
  <Resource name="mail/CrowdMailServer"
    auth="Container"
    type="javax.mail.Session"
    mail.smtp.host="yourmailserver.example.com"
    mail.smtp.port="25"
    mail.transport.protocol="smtp"
    mail.smtp.auth="true"
    mail.smtp.user="your_userid"
    password="your_password"
   />
</Context>

If you have problems connecting, add a mail.debug="true" parameter, which will let you see SMTP-level details when testing the connection.

You will also need to ensure that the JavaMail classes and Java Beans Activation Framework are present in your application server's classpath.

If JavaMail is not present in your application server installation, you will receive the following error in your log file:

java.lang.NoClassDefFoundError: javax/mail/Authenticator
If the Activation Framework is not present in your application server installation, you will receive the following error in your log file:

java.lang.NoClassDefFoundError: javax/activation/DataSource

## Backing Up and Restoring Data

You can back up your Crowd data by exporting it to an XML file in the Crowd shared directory. The data includes:

- Your Crowd server configuration details, including connection details for all your directories and applications.
- Any internal directories that exist.
- Important Note about Crowd Backup Functionality

We recommend that you back up your data regularly, especially before any significant configuration changes and before upgrading Crowd. You should also perform regular backups of your database and your Crowd Home directory.

**To schedule daily backups of your Crowd data,**

1. Log in to the Crowd Administration Console.
2. In the top navigation bar, click  > Backup.
3. In the Schedule Backup panel, select the Enable scheduled backups to XML and choose the time.
4. Click Submit.

When scheduled backups are enabled, Crowd will create a daily backup in the /backups directory under your Crowd shared directory. Backup files will be rotated to retain the most recent fifty daily backups.

**To manually back up your Crowd data,**

1. Log in to the Crowd Administration Console.
2. In the top navigation bar, click  > Backup.
3. In the Manual Backup panel, select the Reset Domain checkbox if the backup file will be restored onto a different server. Selecting Reset Domain will reset the domain to blank. (After you restore the data, you can change the domain as described in Domain.)
4. Enter an appropriate Backup File Name. This will be the name of the XML file that Crowd will create. When the backup process has finished, you will find the backup file in the /backups directory under your Crowd shared directory.
5. Click Submit.

**To restore your Crowd data,**

1. Log in to the Crowd Administration Console.
2. In the top navigation bar, click  > Restore.
3. In the Restore File Path field, type the path to the backup file, including the name of the XML file.
4. Click Submit. 

### Active status and backups

While Crowd allows you to locally set the active status of users in directories without proper active status support (eg. OpenLDAP), those changes will not be stored in the backup XML. When restoring from a backup, all of those users will be subsequently reactivated.

Crowd versions 3.4.6, 3.5.1, and 3.6.0 come with the possibility to export connector users to the backup file, allowing you to preserve the active flag status after a restore. This option however will increase the size of the backup file and may require increasing Crowd’s memory limits.

## Logging and Profiling

When troubleshooting problems with your Crowd installation, it is often useful to change the level of information provided by your Crowd server so that more information, messages and warnings are shown than usual. This page describes how to:

- Adjust the settings which affect Crowd's logging.
- Enable performance profiling. With performance profiling turned on, your system output console will show a record of the time it takes (in milliseconds) to complete each Crowd action. This will help with diagnosing performance problems. The resulting output will be large, so you should not enable it for long periods. You can see an example of performance profiling output here.

### Summary of the Logging Levels

Crowd uses Apache's log4j logging service. The amount of information written to the log file is determined by the logging 'level'. The type of message output at each level is as follows:

**Level**

Type of Message Written to the Log

**DEBUG**

Used to troubleshoot SSO problems only. These are low-level details that most people never need to know about. NOTE: This setting may cause user passwords to be logged.

**INFO**

Informational messages about what Crowd is doing. Usually not interesting.

**WARN**

Warnings that something may have gone wrong, or other messages a system administrator may wish to know. These are conditions that, while not errors in themselves, may indicate that the system is running sub-optimally.

**ERROR**

Indications that something has gone wrong in Crowd. The person responsible for configuring Crowd should be notified.

**FATAL**

Indications that something has gone wrong so badly that the system cannot recover.

**ALL**

All possible log messages.


## Finding the Crowd Log File
When you report a problem to Atlassian Support, we may ask you to send us your atlassian-crowd.log file. The location of the log file may vary, depending on your Crowd installation type. Provided that you have not changed the log file location from the default, the Crowd log file is at the location described below.

**Installation Type**

**Location of Log File**

**Crowd Standalone edition**

Crowd 2.0.3 and older versions: In the root directory of your Crowd application, e.g. atlassian-crowd-2.0.0/atlassian-crowd.log
Crowd 2.0.4 and newer versions: In the Crowd application Home Directory, e.g. Crowd-Home-Directory/logs/atlassian-crowd.log

Crowd Standalone running as a Windows service

C:\Windows\system32\atlassian-crowd.log


### Changing the Log Settings
You can change the log settings in two ways:

- Set the logging levels at runtime via the Administration Console, as described immediately below. Your changes will be in effect only until you next restart Crowd.
- Edit the log configuration file, as described in the Advanced section below. Your changes will take effect next time you start Crowd, and for all subsequent sessions.

## Crowd Data Center

For Crowd Data Center, you'll need to change the log settings on each node.


Configuring the Log Settings and Performance Profiling via the Administration Console
If necessary, you can edit the configuration file directly

If you change the log settings via the Administration Console, the changes are not written to the log4j.properties file and are therefore discarded when you next stop Crowd. Also, not all logging behavior can be changed via the Administration Console. For logging configuration not mentioned below, or to change the log settings permanently, you will need to stop Crowd and then edit the log configuration file instead.

The 'Logging & Profiling' screen tells you whether performance profiling is currently on or off, and shows a list of all currently defined loggers. On this screen you can:

- Turn performance profiling on or off. With performance profiling turned on, your system output console will show a record of the time it takes (in milliseconds) to complete each Crowd action. This will help with diagnosing performance problems. The resulting output will be large, so you should not enable it for long periods. You can see an example of performance profiling output here.
- Set the logging level for each class or package name, or reset all logging levels to the default setting.
Refer to the section on logging levels above. Any changes made in this way will apply only to the currently-running Crowd lifetime.

**To configure profiling and logging,**

1. Log in to the Crowd Administration Console.
2. In the top navigation bar, click  > Logging & Profiling.
3. The Logging and Profiling screen appears, as shown below. The screen has the following sections:

    - Performance Profiling — Click the Enable Profiling button to turn profiling on, or Disable Profiling' to turn it off. (You will only see one of these buttons.)
    - Log4j Logging — This section shows the loggers currently in action for your Crowd instance.
4. You can change the logging level by selecting a value from the New Level dropdown list. Above is a definition of each level. You can also read the Apache documentation for more information.
5. You can click the Revert to Default button if you want to reset the logging levels to the values shipped with your Crowd installation.
6. Click the Update Logging button to save any changes you have made in the Log4j Logging section.


## Description of the loggers:

**Logger**

Description

**com.atlassian.crowd**

This is the parent of the crowd package loggers. Any children which do not have a level assigned to them will inherit the level from their parent. This logger should be set to DEBUG only if you are investigating SSO issues.

**com.atlassian.crowd....XFireFaultLoggingMethodHandler**

Can be helpful if a Crowd SOAP service fault is thrown. It is best to enable DEBUG for all three XFire classes simultaneously when troubleshooting Crowd's SOAP service.

**com.atlassian.crowd....XFireOutLoggingMethodHandler**

The Crowd server outputs the incoming SOAP request method and parameters. This is useful when debugging your applications or monitoring the level of traffic for an integrated application.

**com.atlassian.crowd....XFireInLoggingMethodHandler**

The Crowd server outputs the outgoing SOAP request method and parameters. This is useful when debugging your applications or monitoring the level of traffic for an integrated application.

**com.atlassian.crowd.license**

Useful for troubleshooting certain licensing issues in Crowd.

**com.atlassian.crowd.startup**

Can be helpful for troubleshooting startup errors in Crowd.

**root**

This is the root of the logger hierarchy, i.e. it is the parent of all loggers. The level assigned to the root will be the default level for any loggers which do not have a specific level and do not inherit from another parent.


**Advanced Log Configuration**  
Terminology: In log4j, a 'logger' is a named entity. Logger names are case sensitive and follow a hierarchical naming standard. For example, the logger named com.foo is a parent of the logger named com.foo.Bar.


**Finding the Log Configuration File**  
Crowd's logging behavior is defined in the following properties file:

For Crowd installations: {CROWD-INSTALL}/crowd-webapp/WEB-INF/classes/log4j.properties
This file is a standard log4j configuration file, as described in the Apache log4j documentation.


**Editing the Log Configuration File**  
To configure the logging levels and other settings on a permanent basis:

1. Stop Crowd.
2. With a text editor, open the log4j.properties file in the location described above.
3. Adjust the output level to the required level of importance listed in the section on levels above.
4. Save the log4j.properties file.
5. Restart Crowd to have the new log settings take effect.
6. When diagnosing a server problem you need to adjust Crowd's package logging to:
log4j.logger.com.atlassian.crowd=DEBUG


**Changing the Destination of the Crowd Log File**  
Terminology: In log4j, an output destination is called an 'appender'.

**To change the destination of the Crowd log file:**  

1. Stop Crowd.
2. With a text editor, open the log4j.properties file in the location described above.
3. Look for the org.apache.log4j.RollingFileAppender entry in the 'Log File Locations' section of the file. This appender controls the default logging destination described above.
4. Edit the following line, and replace atlassian-crowd.log with the full path and file name for the required logging destination:
log4j.appender.filelog.File=atlassian-crowd.log.
5. Save the log4j.properties file.
6. Restart Crowd to have the new log settings take effect.

**Adjusting the Log Settings for CrowdID**  
The Crowd Administration Console does not give access to the CrowdID log settings. To adjust the logging levels of the CrowdID OpenID server, you will need to modify the configuration file at this location:

For Crowd installations of CrowdID: {CROWDID-INSTALL}/crowd-openidserver-webapp/WEB-INF/classes/log4j.properties

**Look and Feel**

**Ask the community**

**You can use the configuration panel to customize you login screen.**

## Before you begin
Only Crowd administrators can make changes to the look and feel of the login screen.

**To make changes to the login screen**  
1. Go to  > Look and feel. 
2. Make changes the following login screen elements:
    - logo - the image displayed at the top of the login screen; supported file formats: JPG, PNG.
    - welcome text - the text displayed above the credentials.
    - accent color - the color of the button and the the Remember me checbox. 
3. Click Save. 

The login screen with your changes will be displayed to logging users from now on. If you want to go back to the default settings, click the Restore defaults button next to the Save button. 

