
# **📋 G Suite Administration**

1. [👋 Welcome](#👋-welcome)
1. [💡 Prerequisites](#💡-prerequisites)
1. [G Suite Admin Part 1](#¹-G-Suite-Admin-Part-1)
1. [G Suite Admin Part 2](#²-G-Suite-Admin-Part-2)
1. [G Suite Admin Part 3](#³-G-Suite-Admin-Part-3)


## 👋 Welcome

...

## 💡 Prerequisites




## ¹ G Suite Admin Part 1

> 

> 

---

### Exercise #1 - Logging Into the Admin Console


### Directions
 
1. Open a web browser window and go to admin.google.com.

2. Enter your G Suite administrator account email address and click Next.

3. Enter your administrator password and click Next. The admin console displays.


### Notes


You will normally sign into the admin console from admin.google.com. However, if you're already signed in to another G Suite service you can also access the admin console by clicking the Admin icon that can be found in the Apps Launcher.

Only a user with administrator privileges can access the admin console. As the domain administrator, you can grant administrator privileges to any of your users. We will discuss this later in the course.

### Exercise #2 - Review your Domain Name System (DNS) Records
Introduction

Before you can use any G Suite service, you must associate a verified domain with the G Suite account. Domain information is managed via a Domain registrar (hosting service) that stores Domain Name System (DNS) records for the domain. These records allow organizations to connect to online services like email or websites.

In this exercise, you will sign into your domain's registrar from the admin console. This can only be done if you purchased your domain as part of the G Suite sign up process. If you did not, you must sign in separately to review and update your records. See the Help Center resources at the end of this exercise for more details.

For domains purchased as part of the sign up process, Google also verifies the domain and configures essential DNS records to connect the domain to Google's servers.

Directions

Each registrar has their own console. The instructions below assume your domain is hosted by Google Domains.

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. Click the Domains icon.

3. Click the Manage Domains icon.

4. Click the View Details link for your primary domain. Your domain details will appear on the right hand side of the screen.

5. If you purchased your domain from Google Domains, click MANAGE DOMAIN. This will load the Google Domains console. You should not be required to sign into this console.

If your domain was purchased from another registrar during the G Suite sign up process, look for and expand the Advanced DNS Settings section. Expand this section and use the credentials presented to sign into your DNS console.

6. From the Google Domains page, select DNS from the left hand menu, then scroll down to the 'Synthetic records' card and click > to expand the G Suite section. If you are using another registrar the navigation will be different. Refer to your provider's help to locate your DNS records.

You will see a number of records already populated for you. These include:

Mail Exchanger (MX) records (ensures mail is routed to Google's servers)
A Sender Policy Framework (SPF) TXT record (this allows receiving mail servers to verify that the sending servers are authorized to send mail on your domain’s behalf)
Examples of these are below. Check that they exist in your DNS records

Host name	Address	Record type
@	v=spf1 include:_spf.google.com ?all	TXT
Host name	Record type	Address	Priority
@ (none)	MX	aspmx.l.google.com.	1
@ (none)	MX	alt1.aspmx.l.google.com.	5
@ (none)	MX	alt2.aspmx.l.google.com.	10
Notes:

1. The column names may vary from those above depending upon the registrar you chose when you signed up for the G Suite trial.

2. There are typically 5 MX records. We have just shown the first three here to keep things simple.

Existing domain considerations

Where you want to use an existing domain with a G Suite account you will need to verify the domain using one of the options allowed by Google. For more information please see Sign up for G Suite and Verify your domain for G Suite.

in addition to verifying your domain, if you are using Gmail you will need to update your Mail Exchanger (MX) records to direct mail to the Google servers. For more information see Set up MX records for G Suite Gmail.

It is recommended that you add an SPF record for your domain. If you do not set up SPF, some messages may bounce or be marked as spam. To learn more, see Authorize email senders with SPF.

### Exercise #3 - Navigating the Admin Console

Introduction

The admin console home page shows controls or icons that launch various administrator settings, and has links to tools and common administrative tasks.

The first time you first sign in to the admin console, the most commonly used controls are visible. Additional options are available inside each control or from the Google Admin menu.

Directions

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com. You will see the following dashboard.

insert exercise4-image1

2. Click the three horizontal lines on the top left of the screen to reveal the side menu. This menu makes it easier to see, find, and directly navigate to the information and settings in your admin console:

Easily scan a shorter, multi-layered menu that helps you find things quickly.
Quickly find what you’re looking for by hovering over and clicking through the menu to drill down directly to the pages you want to see.
The streamlined menu removes clutter for delegated admins so they will only see the menu items they have access to with their level of administrative privileges.

insert exercise4-image2

### Exercise #4 - Review your Company Profile
Introduction

The Company profile is where you define company-wide settings for properties such as language, time zone, and company name. You also use this profile to manage policies such as when users can see newly released features in G Suite services.

Directions

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. Click the Company profile icon.

3. Click the Profile section.

This is where you can configure company-wide settings. Explore the various profile settings.

The 'Organization name' will be taken from the information that you provided when you signed up for G Suite. This may be your domain name or the business name you entered at that time. This name will appear to your users in many G Suite services.
The email addresses found in the 'Contact information' section also match the information that was provided during the sign up process.
You can use the 'Support message' section to enter a message users will see when they sign into the User Hub. This is a useful place to add details advising your users how to contact support.
Verify the 'Language' and 'Time zone'. These represent the default settings for new accounts.
The 'New User Features' setting is where you control how fast new features are released to your users for existing services. Scheduled Release is the default and recommended setting. Choose this track to delay releasing new features to users (at least 1 week following rapid release) which will give you more time to train your support staff and prepare users for the coming changes. For more information, see Set up G Suite feature releases for users.
The 'New products' setting allows you to control whether new G Suite services become available to your users as they are released or not. For more information, see Opt in to new services.
4. if you have made any changes, click SAVE.

5. Click the Personalization section. This is where you can upload your company logo and brand the G Suite services for your users. Optionally, create an image file and upload it to your company profile. The recommended size for a logo image is 320 x 132 pixels. See Add your logo for more information.


### Exercise #5 - Add Users Individually

Introduction

In this exercise, you'll manually add an individual user: Alex Bell, the IT Manager.

Directions

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. Click the Users icon.

3. Click Add new user.

4. In the dialog box that appears, create your company's IT Manager user account as follows:

First name: Alfonso
Last name: Hooker
Primary email: alfonso.hooker@devops.tekperfect

Tip: If your account has multiple domains associated with it, you will see a domain drop-down list so you can choose the correct domain for each new user. The domain is the part of the user's email address that appears after the @ symbol.

Each user is assigned to an organizational unit. At this stage of the course we have just one single top level organization so Alfonso will by default be placed into that organization. We will discuss organizational structure later.

Leave the secondary email and phone number fields empty.
You can assign a temporary, randomly generated password or manually enter a temporary password. 

Note: Passwords must be at least 8 characters long and cannot exceed 100 characters. Either way, it’s best practice to ensure that the new user changes this when signing in for the first time so ensure that 'Ask for a password change at next sign in' is enabled. For this exercise, allow G Suite to generate the temporary password.

5. Click ADD NEW USER to create Alex's account.

Congratulations! You've added your first user in your new domain!
Notice the 'Show Password' link in the dialog box. This allows you to see the temporary password generated. You can also copy the password to your clipboard using the 'Click to copy password' link. Alternatively, click MORE ACTIONS from where you can either email or print the login details for your new user.

5. Click DONE.

### Exercise #6 - Add Several Users at Once
Introduction

You've learned how to add users manually; however, when adding many users at once, this method is quite time consuming. Let's see how to bulk upload multiple users at once.

Scenario

You receive this mail from the IT Manager, Alfonso:

Hey G Suite Admin,

Thanks for creating my G Suite account. Now our next task is to get the rest of our user accounts created. Below is a list of people.


First Name
Last Name
Email Address
Title
Alexandria
Ocasio-Cortez
alexandria.ocasio-cortez@devops.tekperfect.com
HR
Katherine
Johnson
katherine.johnson@devops.tekperfect.com
Engineer
Ellison
Onizuka
ellison.onizuka@devops.tekperfect.com
Engineer
Charles
Hooker
charles.hooker@devops.tekperfect.com
CEO
Grace Lee
Boggs
grace.boggs@devops.tekperfect.com
Sales
Jerry
Lawson
jerry.lawson@devops.tekperfect.com	
Game Developer
Edward James 
Olmos
edward.olmos@devops.tekperfect.com
Marketing


Directions

Download the template file

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. Click the Users icon.

3. Click Bulk upload users then click the CSV template link. This will download a blank file with all the required columns to your local machine. Leave this dialog box open to upload the file after editing.  

Add user information

4. Open the CSV file in a spreadsheet application or a text editor if you prefer.

5. Populate the file with a row for each user using the information from the table Alex provided.

The file contains a column for each attribute that appears on the user profile in the admin console and in Gmail contacts.

The following columns are mandatory:
First Name
Last Name
Email Address
Password (enter Ch@nge.me)
Org Unit Path (For this exercise, enter the forward slash symbol / into this column. This represents the root organization)
If you prefer, you can use the example CSV file below as your starting point. Simply edit this file and change the domain part of the email address to match your domain.

users-for-upload.csv
Upload the file

6. Save a copy of your own file or the users-for-upload.csv file to your local machine. Alternatively, if you have created your own file in Google Sheets, click File > Download As > Comma Separated Values (.csv, current sheet).

7. Return to the 'Bulk upload users' dialog box, click ATTACH CSV and browse to the edited spreadsheet you just saved locally, then click UPLOAD to initiate the creation of the user accounts.

If your file has formatting errors, a warning prompts that you may need to re-edit the file.
If successful, the progress of the upload will be reported in the YOUR TASKS list at the top of the page. You'll also receive an email report later.
8. The new users may take a couple of minutes to appear in the user list. If you don’t see them right away, try refreshing the screen. Review the list of users and explore the user settings.

Congratulations! You created multiple users at once!

Notes

It can take up to 24 hours for new user accounts to appear in the searchable domain directory.
If you're uploading more than 500 user accounts, you can optimize the experience by splitting your uploads into smaller batches.

### Exercise #7 Sync Users to G Suite with GCDS
Introduction

As we have seen G Suite accounts can be created manually or in bulk. Either method works well but these methods are more applicable to smaller customers where less frequent user maintenance is needed.

Larger organizations often require a more automated approach to account management. Such customers may choose to deploy Google Cloud Directory Sync (GCDS) which can provision G Suite accounts directly from Microsoft® Active Directory® or LDAP server. In addition to account creation GCDS ensures that users, groups, and shared contacts in G Suite are synchronized with updates that are made to the local directory.

GCDS never modifies local directory information. Updates are only made to the Google Cloud Directory to reflect local changes.

Who should use GCDS

GCDS is particularly relevant to organizations that have a pre-established directory. Using GCDS removes the need to separately manage the Cloud Directory as it performs a one-way synchronization ensuring Google domain data matches the local directory at all times.

Video demonstration

GCDS runs on the customer’s own network so we are unable to provide a practice instance as part of this training. Instead, watch the video lecture, which immediately follows this reading, to see how GCDS is installed and configured in a typical customer environment.

Introduction

G Suite includes many Application Programming Interfaces (APIs) that allow customers and third party developers to integrate with G Suite services and data. One of these APIs is the Admin SDK which can be used to automate administrative operations on users, groups, organizational units, and devices in your G Suite account. Included in the Admin SDK is the Directory API which includes methods to create and manage your user accounts.

GCDS actually uses the Directory API to provision and manage user accounts as part of the sync process.

It is beyond the scope of this training to go into depth on this topic but if you are interested in using any of the G Suite APIs there are some useful resources below.

Resources

Manage your G Suite domain with the Admin SDK
Directory API - User Accounts
G Suite Developer Offerings
Google APIs Explorer

https://developers.google.com/admin-sdk/

### Exercise #8 - Create Admin Managed Groups
Introduction

In this exercise you will create two groups from the admin console. Read through the scenario and directions below in order to practice creating admin managed groups.

Scenario

You receive this mail from Charles, the CEO:

Hey G Suite Admin,

We would like to have a group email address where I (and only I) can send company wide announcements to everyone. I would also like to set up a team group for the use of the executive and managers only.

Can you please create these groups for us? Thanks,

Regards, 
Charles Hooker, CEO
Directions

Create the group for all employees

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. Click the Groups icon.

3. Click Create group and enter the following information:

Name: All employees
Description: Internal mailing list for everyone.
Group email: everyone@devops.tekperfect.com
4. Click NEXT.

5. Set the 'Access type' to Announcement only. Anyone in the organization can view topics but only managers and owners can post.

6. Click CREATE GROUP.

7. Click the Add Members to All employees link.

8. In the resulting page, click on the yellow circle with the + sign to add members and then click the Advanced link at the bottom of the 'Add members to All employees' dialog box.

9. Check the 'Add all current and future users of <your company> to this group with All Email setting' box and click ADD TO GROUP.

10. Refresh the screen, you should see the member list has one entry called 'All users in the organization'. Note: New users will be automatically added to the group as they join your organization.

11. Repeat Step 8 but this time enter Charles's email address. He will be added to the member list with the Member role.

12. Hover over Charles and click the down arrow in the Role column and click Manager to make him the group manager.

13. Click SAVE.

Sam can now email everyone in the organization by emailing everyone@devops.tekperfect.com.

Create the management group

14. Return to the Groups page and create a new group as follows:

Name: Management
Description: Executive group
Group email: management@devops.tekperfect.com
15. Click NEXT.

16. Set the 'Access type' to Restricted (Only members can post and view topics), create the group and add the following members:

Charles Hooker (CEO)
Alfonso Hooker (IT Manager)
Alexandria Ocasio-Cortez  (HR Manager)
17. Change Charles's role to be a group manager so she can add new members as needed.

The management team now has a private group in which to collaborate.

Verify group settings

18. Sign out and sign back in to G Suite at mail.google.com as charles.hooker@devops.tekperfect.com.

19. Send a message to everyone@devops.tekperfect.com and another message to management@devops.tekperfect.com.

20. Open the Groups for Business service at groups.google.com.

21. Click My groups. You should see the both groups listed. Open each group in turn and verify that your messages were delivered.

22. Sign out and sign back in to G Suite at mail.google.com as alexandria .ocasio-cortez@devops.tekperfect.com. You should see the message sent by Charles to everyone in your inbox.

23. Send a message to everyone@devops.tekperfect.com and another message to management@devops.tekperfect.com.

24. Refresh your inbox (you may need to do this a few times). You do not have permissions to post to either group so should receive a delivery failure report for each of the two messages.



25. Send a message to everyone@devops.tekperfect.com and another message to management@devops.tekperfect.com.

26. Refresh your inbox (you may need to do this a few times). You should receive a delivery failure report for the message sent to everyone@devops.tekperfect.com only.

27. Open the Groups for Business service at groups.google.com.

28. Click My groups. You should see the Management group listed. Open the group and verify that your message was delivered.

Notes

1. Administrators, even if not members of a group have all privileges in the admin console.

2. Using the Groups for Business service, your users can also create their own groups. They can create simple email lists, web forums, Q&A groups and collaborative inboxes. As the administrator you can see and manage any of these user created groups from the admin console.

### Exercise #9 - Adding Calendar Resources
Introduction

In this exercise you will create two structured calendar resources for your main building. You will also define some features that can be applied to each resource. Read through the scenario and directions below in order to practice creating calendar resources.

Scenario

You receive this mail from the IT Manager, Alex:

Hey G Suite Admin,

We would like to allow our users to book a couple of our meeting rooms directly from Google Calendar. Can you please add the main boardroom, and the top floor conference room information to our calendar system.

Thanks,

Alex Bell, IT Manager

Directions

In the following instructions, let's assume that you have gathered details about the facilities (features) available in each of two rooms. The first step is to add your building details.

Add building

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. Click the Buildings and resources icon.

3. On the Resource management card, click the OPEN link.

4. Click ADD BUILDING.

5. Click on the yellow circle with the + sign to add a new building. Complete the dialog as follows:

Name: Head Office
Description: Main work location
Floors: 1,2,3,4
Address: Enter your address. (Click the Pencil icon at the end of the Address field to add your address)
6. Click ADD BUILDING.

Note: The Building ID is used to associate a resource with a particular building which is why you must define your buildings first.

Add features

7. In the navigation at the top of the page, switch the view from Buildings to Resources.

8. Click the 'Manage resource features' icon (three horizontal lines with a pencil icon over the bottom line) which is located in the top right corner of the Resources list.

9. Click ADD FEATURE and enter the following details:

Feature name: Refreshments
Feature type: Other
10. Click SAVE.

11. Click ADD FEATURE and enter the following details:

Feature name: Google Meet Hardware
Feature type: Video conferencing
12. Click SAVE.

13. Click CLOSE.

Our features are added so it is time to add our resources.

Add resources

14. Click on the yellow circle with the + sign to add a new resource. Complete the dialog as follows:

Category: Meeting space (this should be the default)
Type: Meeting room
Building: Head Office (this should be the only entry available as you have only added one building)
Floor: 4
Floor section: This indicates where on the floor the room is located. It's optional but enter East.
Resource name: Conference room
Capacity: 10
Features: Select Google Meet Hardware
User visible description: Extension 326 (Free-form description of the room that is visible to users in the room details)
15. Click ADD RESOURCE.

16. Click on the yellow circle with the + sign. Now add your second resource as follows:

Category: Meeting space (this should be the default)
Type: Meeting room
Building: Head Office (this should be the only entry available as you have only added one building)
Floor: 2
Floor section: This indicates where on the floor the room is located. It's optional but enter West.
Resource name: Boardroom
Capacity: 20
Features: Select Google Meet Hardware and Refreshments
User visible description: Extension 316 (Free-form description of the room that is visible to users in the room details)

17. Click ADD RESOURCE.

Congratulations, you have just added two structured calendar resources to your G Suite account.

Explore the settings

18. From the list of resources, click on the Conference room row to open the resource details. On the left hand side you will see an email address and an auto-generated resource name in the following format:

Resource email: devops.tekperfect.com_1993ce917vkushojkrbuv2ckpu2t66gb68o34dpk64q3icph70@resource.calendar.google.com
Auto-generated resource name: Head Office-4-East-Conference room (10) [Google Meet Hardware]

19. Open your Google Calendar and click the + button to the right 'Other calendars' and select Browse resources. You should now see the two resources listed. Check each of them to subscribe. The two resources should now appear in your list of calendars.

20. Create a test event and start typing Head office into the 'Guests' field. You should see the two resources listed in autocomplete for selection.


### Exercise #10 - Add an Email Alias for a User
Introduction

Now that you've added a larger batch of users, some of your users have already signed in and started to use G Suite. In this exercise you will be given a scenario where you are asked to create an email alias for a user. An email alias allows a user to receive email sent to multiple addresses in their Gmail inbox.

Read through the scenario, and then go through the steps to complete the exercise!

Scenario

You receive this email from the CEO:

Hello G Suite Admin,

Thanks for creating my G Suite account. However I have to ask for a minor change. My email is samantha.morse@devops.tekperfect.com but really most people know me as just “sam”. Is there any way I can have this as my email also?

Regards,

Sam Morse, CEO

Directions

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. Click the Users icon.

3. Locate Samantha Morse in the user list, click her name, and click the User information card.

4. Click the Email aliases section.

5. In the Alias text field, enter sam and click SAVE.

6. Now notify Sam about her new email alias and remind her about its limitations:

Dear Sam,

I have created a new email alias for you. In addition to your primary email address, samantha.morse@devops.tekperfect.com, you can now also receive mail sent to sam@devops.tekperfect.com.

However, please be aware that you'll still need to use your primary email address: samantha.morse@devops.tekperfect.com to sign in to G Suite.

Note that it may take up to 24 hours for the email alias to become available.

Regards, Your G Suite Admin




## ² G Suite Admin Part 2

### Exercise #11 - Reset a User's Password
Introduction

As the administrator you're likely to come across a situation where a user needs their password to be reset.

A user may simply forget their password
A user's account is compromised (security concerns)
G Suite includes a feature that allows users to recover their own password but this is disabled by default, and each user must add a recovery phone or email address to their account for this feature to work.

Where the user does not know their password, and recovery information has not been added (or if self-service recovery is not enabled), the administrator must reset the password.

Scenario

Tim Lee has just come back from vacation, he calls to ask you to reset his password, because he's forgotten it and is now locked out of his account.

Directions

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. Click on the Users icon.

3. Access the reset password function by one of two ways:

Hover over Tim Lee in the user list and click Reset password on the right.
Click on Tim Lee in the user list to open his profile and then click RESET PASSWORD on the left.
4. In the 'Reset password' dialog box:

Fill in a temporary password or click Auto-generate password to let Google create one for you.
Check the 'Ask for a password change at the next sign-in'.
Click RESET.
Click the Click to copy password link to copy the password to your clipboard.
Click DONE.
5. Provide Tim with his new password. When he next signs in he will be asked to change his password.

### Exercise #12 - Rename a User
Introduction

As an administrator for your organization's G Suite service, you change a user’s email address in the admin console. You can also change the display name that shows up in emails they send, calendar invites, and so on. Users can also change their own display name but they can’t change their address.

Scenario

You receive this mail from the Grace Boggs:

Hello G Suite Admin,

Thanks for resetting my password. I have another issue with my account, maybe you can help. I don't ever use the name Grace. At work I go by my full name Grace Lee but all my friends and coworkers call me Grace Lee. Can you fix my account so I login and mail with my preferred names?

Thanks,

Grace Lee Boggs

You decide that the best way to implement this is to rename the user to grace-lee.boggs@devops.tekperfect.com to allow her to sign in and use her mail with this new username. Then add an alias of grace.boggs@devops.tekperfect.com to the account.

Directions

1. Ask Grace Boggs to sign out of his G Suite account.

2. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

3. Click the Users icon.

4. In the user list, hover over Grace Boggs and click Rename user on the right.

5. In the 'Rename user' dialog box, read the warning message and enter the following:

First name: Grace Lee
Last name: Boggs
Primary email: grace-lee.boggs. This is the username he'll use to sign in to G Suite.
The First and Last name settings represent the Display Name.

6. Click RENAME and then click CONTINUE to confirm the change.

Now that you have renamed the user to allow her to use her full name (Grace Lee) to sign in and send mails, let's look at his other request to use the name Grace Lee to send mail.

7. If you are not already in Grace Lee Boggs's user profile select Grace Lee Boggs from the users list.

8. Expand the User information card and click on the Email aliases section. Notice here that Grace Boggs’s original email address grace.boggs@devops.tekperfect.com has been added as an alias. This is to ensure that he can still receive mail sent to his old primary address.

9. Add a new alias Grace Lee’s and click SAVE.

Now you can see the difference between just adding an alias for a user and renaming a user.

Notes

It can take up to 10 minutes for a new primary email address (rename) to be reflected throughout the system, 24 hours for domain and personal contact changes to take effect, and up to 3 days before the user can use chat.
It can take up to 24 hours for the alias to become available.

### Exercise #13 - Suspend a User
Introduction

As a G Suite administrator, you can temporarily block a user's access to G Suite services by suspending the user's account. This disables the account without deleting the user or any data in their account. Any content that they own and have shared with others remains accessible to collaborators.

A suspended user can't sign in to the account, and new emails and calendar invitations are blocked. As the account is not deleted a license fee still applies.

Scenario

You receive this email from Alexandria Ocasio-Cortez, the HR Manager:

Hey G Suite Admin,

I had a contractor working with me last week for a project, his name is Jon Baird. He has an account to sign in to our system but for the next few weeks he'll be working somewhere else. Is there a way to prevent him from signing in without losing all the work he's done already? He'll be back to work with us soon.

Regards, Alexandria Ocasio-Cortez

Directions

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. Click the Users icon.

3. Locate Jon Baird in the list and hover over his name, then click More > Suspend user.

4. Click SUSPEND. The Status column for Jon will change from Active to Suspended.

Tip: To view only suspended users, click Add a filter > User status, select Suspended and APPLY the filter. Your filter will also show at the top of the screen. Clear the filter by clicking the cross to the right of the filter value.

Scenario (continued)

A few weeks later, you receive another email from Alexandria Ocasio-Cortez, the HR Manager:

Hey G Suite Admin,

I have a contractor, Jon Baird, who will be working with us again next week. He had an account before but is locked out at my request. Can you please re-enable him?

Regards, Alexandria Ocasio-Cortez

As a G Suite administrator, you can restore a user you (or another administrator) suspended.

Directions (continued)

1. In the user list, filter for suspended users. Locate Jon Baird in the list and hover over his name, then click More > Reactivate.

2. Click REACTIVATE to confirm. Jon will be removed from the suspended user list.

3. Clear the filter and confirm that Jon’s status has been changed back to Active.

Jon can now sign in and has full access to his account and data.

Notes

Administrators manually suspending users is just one way that a G Suite account can be suspended or disabled. If the user is manually suspended by an administrator, it's possible for an administrator to restore their account immediately.
A user can also be automatically suspended from Gmail for exceeding Email sending limits. In this case, the user can still sign in to their G Suite account to access other services, such as Calendar and Drive. But when they try to access Gmail, an error prompts that Google detected unusual activity on the account. Most users will regain access automatically within 24 hours, but in some cases, an administrator can reset the limits for the user and allow them to immediately regain access.
You cannot restore an account that was suspended for abuse or for breaching Google’s Terms of Service.
You cannot restore a user with an abusive account status. Administrators can contact Google Support for more information.

### Exercise #14 - Delete a User
Introduction

When a user leaves your organization you might want to delete their G Suite account. This deletes all of their data and they'll no longer be able to sign in to G Suite. It's important to understand the difference between account deletion and suspension,  so you should develop a process for users leaving the company, and create a policy that best suits your business needs.

Once you delete the account data is retained for a period of 20 days so this does give you the opportunity to restore an account should you need to within a limited time frame. In addition, it is also possible to transfer certain data (eg: Docs, Calendar) to a new owner at the point of account deletion.

Be aware that there are many other considerations that you should be aware of before deleting an account; there may be many other types of data that could be lost without following proper steps.

Scenario

After some time working in the G Suite domain, you get another email from Alexandria Ocasio-Cortez, the HR Manager:

Hey G Suite Admin,

That contractor I had working with me, Jon Baird, has finished up his project. Can you please delete his account from the system as he won't be working here anymore? Will you make sure that any files he still has belong to me now? Don't want to lose anything important.

Regards, Alexandria Ocasio-Cortez

Directions

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. Click the Users icon.

3. Locate Jon Baird in the list and hover over his name, then click More > Delete user.

You now have the option to transfer certain types of data from Jon’s account to a new owner. Lars has asked you to transfer ownership of all of Jon’s files to him.

4. In the dialog ensure 'Drive and Docs' is selected and check 'Include files that are not shared with anyone'. You can deselect 'Calendar' and 'Brand accounts'.

5. Search for Alexandria Ocasio-Cortez to complete the 'Transfer to' field and click DELETE.

Jon’s account will now temporarily be suspended whilst the transfer takes place. The account will then be deleted.

6. Click DONE.

7. Check your inbox. You should receive a notification confirming that the deletion was successful.

### Exercise #15 - Restore a Recently Deleted User
Introduction

The G Suite super administrator can restore a user account up to 20 days after deleting it. After this period, the admin console permanently deletes the user account and it can't be recovered, even by Google technical support.

In most cases, restoring a deleted user account also restores the user's associated data, including email and calendar events; however, Google doesn't guarantee full data recovery for a deleted user.

Scenario

The next day you get a high priority email from Alexandria Ocasio-Cortez, the HR Manager:

Hello G Suite Admin,

I'm afraid I was a little premature in getting you to delete our Jon Baird’s account. We've decided to hire him as a full-time employee.

Is there any way you can restore his user account?

Regards, Alexandria Ocasio-Cortez

Directions

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. Click the Users icon.

3. Click Add a filter and select Recently deleted.

Tip: If you have multiple organizational units, complete this action from the top level organization. Deleted users lose their organization details and are moved to the top level organization. We will discuss organizational structure later in this course.

4. Locate Jon Baird in the list and hover over his name, then click Recover.

5. Click CONTINUE.

6. Select your top level organization and click RECOVER.

7. Clear the Recently deleted filter to return the user list. It can take up to 2 hours to restore an account but you should shortly see Jon appear in the list.

8. If a user was suspended at the time the account was deleted, such as when you transfer ownership of data, the user will remain suspended after the account is restored. To reactivate Jon, locate him in the user list and hover over his name, then click More > Reactivate. Then click REACTIVATE to confirm.

Notes

You can restore only one user at a time.
It may take some time for the user to be visible again in the active user list.
When you restore deleted users after transferring the ownership of their files to other users, the restored users do not automatically acquire ownership of their old files. Instead, they can only edit the files they previously owned.

User Licenses
Introduction

Every user needs a license to use a Google service. For example, a user must have a license for G Suite before they can use Gmail, Google Drive, or any other G Suite service.

There are two types of license, a site-based license and a user-based license. When you sign up for a service that has a site-based license such as Android every user in your organization gets a license so you don't need to assign this type of license. User-based licenses, such as a G Suite license may need to be assigned depending upon your subscriptions and this can be done manually or automatically.

Assigning licenses

If you purchased just one subscription, e.g: G Suite Enterprise all of your users will get this license automatically so you do not need to assign a license.

If you have multiple user-based subscriptions such as G Suite and Google Drive storage you must assign each user a license. You must also assign a license if you have multiple subscriptions to the same service, e.g: you may have G Suite Business and G Suite Enterprise licenses in your organization.

License assignment can be applied to everyone in your organization, at the organizational unit level ( we will discuss organizational structure later in this course) or at the individual user level. It is also possible to configure automatic license assignment for your organization so you do not need to manually assign a license to each new user.

Notes

A single user can have a license for more than one service.

### Exercise #16 - Create Organizational Units
Introduction

In this exercise, you will create two OUs and move your users into the appropriate OU based upon their role in the company.

Directions

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. From the menu (top left) select Directory > Organizational units.

3. Click on the yellow circle with the + sign to create a new OU.

4. Give the OU the name of Executive and click CREATE.

5. Create another OU called Employees.

6. Navigate to your users list. You should see the two new OUs on the left hand side beneath the top level organization.

7. Select Alex, Lars, Samantha, and Timothy by checking the box to the left of their name in the user list.

8. Click More > Change Organizational unit, and select Executive. Then click CONTINUE.

9. Click CHANGE to confirm the move.

10. Repeat Steps 7 - 9 but this time move Ellie, Jon, Tom, and Will to the Employees OU.

11. Review the options in the column to the left of your user list. Here you can see all users and you can now refine (or filter) the users by OU. Practice filtering by checking Users from selected organizational units and picking from the list below to refine the list. Notice how you can pick one or many OUs.

Notes

Changes can take 24 hours to propagate to all users.

### Exercise #17 - Restrict Access to a G Suite Service
Introduction

In the previous exercise you created two OUs beneath your top level organization. One benefit of applying an organizational structure like this is that you can now enable/disable services at an OU level. Settings at one level are normally inherited by any child OUs but it is also possible to override inheritance at the OU level providing for greater flexibility.

Read through the scenario, and then go through the steps to complete the exercise!

Scenario

You receive this email from the CEO:

Hello G Suite Admin,

Alex advised me of a Google service called Takeaway which allows users to export their data from G Suite. Is it possible to enable this service for our executives only but restrict access to our employees? Thanks

Regards,

Charles Hooker, CEO

Google Takeaway is an additional Google service which is enabled by default for all users in the organization so you must disable the service for all users in the Employees OU.

Directions

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. From the menu (top left) select Apps > Additional Google services.

3. On the left hand side click your top level organization,

4. Scroll down the list of services. Hover over 'Google Takeaway' and click on the 3 dots icon at the end of the row. Then click OFF (Override).

5. Click TURN OFF to confirm the change. This disables the service for everyone in your organization. We must now enable the service for your Executive OU.

6. On the left hand side click the Executive OU.

7. Scroll down the list of services and locate the 'Google Takeaway' service. Notice that the service is OFF. This setting has been inherited from the top level organization. Hover over 'Google Takeaway' and click on the 3 dots icon at the end of the row. Then click ON (Override).

8. Click TURN ON to confirm the change. Users in the Executive OU now have access to 'Google Takeaway'. Users in the root organization and any other child OU cannot use the service.

Notes

Changes can take 24 hours to propagate to all users.

### Exercise #18 - Verify Directory Settings
Introduction

In this exercise, you will confirm that contact sharing is enabled for your organization.

Directions

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. From the menu (top left) select Directory > Directory settings.

3. Click Sharing settings.

4. Ensure that 'Enable contact sharing' is selected. If it is disabled, enable it now.

In this section you can also specify which information is shared. For example, you can choose whether to show or hide email aliases, and if you have multiple domains in your organization you can share the entire directory across all domains or restrict sharing to the domain level only (i.e. users in one domain only see other users in that same domain).

5. Click SAVE if you have made any changes.

Notes

Changes can take 24 hours to propagate to all users.

### Exercise #19 - Update User Profiles
Introduction

As an administrator you can add information such as phone numbers, secondary email addresses, and location details to a user's profile. You can edit profiles individually in the admin console or you can use the Admin SDK API or a third party product. You can also use GCDS to update user profiles. Finally, you can also allow users to update some profile information themselves.

In this exercise you will update a user's profile in the admin console. You will then update your directory settings to allow users to update their own profiles.

Scenario

You receive the following email from Alexandria Ocasio-Cortez, the HR Manager:

Hey G Suite Admin,

You may recall that we recently hired Jon Baird. He used to work as a contractor but as he is now a full time employee can you update his job title to be HR Business Partner.

In addition, I understand that G Suite allows users to update some aspects of their own profile. I see no reason why our users should not be allowed to do this so can you please enable this feature. Thanks.

Regards, Alexandria Ocasio-Cortez

Directions

Let's start by updating Jon's job title.

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. Click the Users icon.

3. Locate Jon Baird in the list and click his name, then click the User information card.

4. Click anywhere in the Employee information section. You can now edit this section.

5. Change Jon's Job title to HR Business Partner and click SAVE.

Now let's ensure users can update their own profiles.

6. Select Directory > Directory settings from the left hand menu.

7. Click Profile editing.

8. By default, users can change their 'Birthday' and 'Work location' from their About Me page. Check all other fields so that users can also update their 'Name', 'Photo' and 'Gender'.

9. Click SAVE.

Notes

1. It might take up to 24 hours for changes to appear in the directory.

2. Adding work location information is recommended as this allows Google Calendar to make smart room recommendations based upon the user's location.

3. If you decide to complete your employee ID information (and you are not using SSO or 2SV) you can use these IDs as a login challenge to help protect your user accounts when Google suspects that an unauthorized person is trying to access a user’s account.


### Exercise #20 - Custom Directories
Introduction

In a single domain environment your organization will have one directory (global address list) and all users can see everyone in that directory. In a multiple domain environment you can restrict visibility such that users in one domain can only see other users in their primary domain.

You can also set up custom directories to limit who users can find in autocomplete lists, contacts, and searches. Custom directories are applied at the OU level.

In this exercise you will create a new OU and configure it to use a custom directory.

Scenario

You receive the following email from Alexandria Ocasio-Cortez, the HR Manager:

Hey G Suite Admin,

We are about to commence a new project and will be installing a new expenses system. A consultant will be joining us for a month or so to help us implement the new system and train our users.

Whilst here he will need to have a G Suite account so we can collaborate on project documents, etc. Can you please create the following account.

First name	Last name	Email address	Employee title
Mark	Jones	mark.jones@devops.tekperfect.com	Consultant
We would also like to keep our company directory information confidential from contract staff so can you restrict visibility so that Mark can only see users involved on the project. Please ensure he can look up my details and Jon Baird as he will be leading the implementation on our behalf. Thanks.

Regards, Alexandria Ocasio-Cortez

Directions

There are a number of steps you must complete to fully satisfy the request.

Create a new OU

Custom directories are applied to an OU so let's start by creating an OU.

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. From the menu (top left) select Directory > Organizational units.

3. Click on the yellow circle with the + sign to create a new OU.

4. Give the OU the name of Contractors and click CREATE.

Create the user account

Now we need to create Mark's account.

5. Click the Users icon.

6. Click Add new user.

7. In the dialog box that appears, create and account for Mark Jones as follows:

First name: Mark
Last name: Jones
Primary email: mark.jones@devops.tekperfect.com
Organizational unit: Contractors (use the pencil icon on the right to select the correct OU)
Password: Ch@nge.me
Ensure the 'Ask for a password change at the next sign-in' option is enabled to ensure Mark changes his password when he first signs into his account.
8. Click ADD NEW USER to create the account.

9. Click DONE.

Create a Google group

Custom directories use Google Groups to determine which user information to show so we must create a Google group before we create the custom directory.

10. From the menu (top left) select Directory > Groups.

11. Click Create group.

12. Enter the following Group details:

Name: HR Project
Description: Custom directory group for HR
Group email: hrproject
13. Click NEXT.

14. Choose Team as the access type and click CREATE GROUP.

15. Click the Add members to HR Project link, then click the yellow circle with a + sign to add members. Enter Mark's email address and also add Alexandria and Jon.

16. Click ADD TO GROUP. You should now see all three users listed as members of the group.

17. Hover over Lars and click the down arrow in the Role column and select Manager to make Lars the group's manager.

18. Click SAVE.

Create the custom directory for the new OU

The final step is to define the custom directory.

19. From the menu (top left) select Directory > Directory settings.

20. Click Visibility settings.

21. Select Contractors from the list of OUs on the left hand side of the page.

22. Change the Directory visibility to Users in a custom directory.

23. Click CREATE NEW and enter a name for the new directory of HR Project.

24. In the Search for a group field, add the HR Project group.

25. Click CREATE.

26. In the Choose a custom directory field, select HR Project and click OVERRIDE.

27. Notify Alexandria Ocasio-Cortez that you have fulfilled his request, and don't forget to provide her with Mark's password.

Congratulations you have just added a custom directory to your organization!

Shared Contacts
Introduction

Your organization's directory will store information about users in your G Suite account but it is very likely that you will deal with users from outside of the organization on a regular basis.

Google provides the Domain Shared Contacts API which allows you to add external contacts to your directory. These external contacts will then be presented to your users in services such as Gmail when completing addresses.

In addition to using the API directly to create your external contacts you can also use GCDS. There are also a number of third party apps available which will add this information to your directory.

Notes

Each user can also manage their own personal contacts list where they can add external recipient information.


### Exercise #21 - Add a new Super Administrator
Introduction

In this exercise, you'll grant the 'Super Admin' role to Alex Bell, the IT Manager. This is an example of a pre-built administrator role that's standard on all G Suite accounts.

Instructions

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. Click the Users icon.

3. Locate Alex Bell in the user list and click to enter his account page.

4. Scroll down and select the Admin roles and privileges category card. Alex currently has no Admin roles assigned to him.

5. Click ASSIGN ROLES.

6. Click the slider for the predefined 'Super Admin' role and then click SAVE. You should now see the role has now been assigned to Alex.

Now let’s investigate the specific privileges you have granted to Alex.

7. Return to the admin console home page click the Admin roles icon.

Cancelling your Trial
Introduction

As discussed at the beginning of the course, your G Suite trial period lasts for 14 days. At the end of that time you will be charged unless you have cancelled your subscription.

If you do not intend to take the additional courses in the G Suite Administration series or if your trial period is about to expire and you want to avoid charges, you should cancel your subscription now.

Use the links below to learn more about your trial and how to cancel your G Suite subscription.



8. Click the Super Admin link on the left to view the current users with this role. At this point, this should only be your initial administrator account, plus Alex.

Each pre-built role has a specific set of privileges assigned to it. Super Admin’s have all privileges to the entire organization. Let’s look at another pre-built role and the privileges that are assigned.

9. Return the list of Admin roles and click Help Desk Admin. Then click on the Privileges card and review the assigned privileges. Notice how these administrators can see the organizational structure and have the 'Read' and 'Reset passwords' privileges for users only.

Notes

Privileges assigned to pre-built roles cannot be customized.
You can assign an administrator role to a user on the user's account information page, or from the Admin roles page where you define the administrator roles.
Creating more than three super administrators for your domain can affect some recovery options. See Add recovery options to your administrator account for more details.


### Exercise #22 - Create and Assign a Custom Role
Introduction

In this exercise, you will create an admin role that has a custom set of privileges.

Scenario

You receive a request from the Human Resources Manager, Alexandria Ocasio-Cortez.

Hello G Suite Admin,

I would like to understand more about how our users are interacting with G Suite. That way I can create a customized training plan for the company. Is there any way I can run reports that track apps usage and user behaviors?

Regards, Alexandria Ocasio-Cortez

You decide that, rather than giving him a pre-built role with privileges he doesn't need, it's best to create a custom role. That way you can delegate the ability to run reports, but not give Lars any other administrator privileges.

Directions

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. Click the Admin roles icon.

3. Click CREATE A NEW ROLE.

4. Enter a name for the role, e.g: Reporting Role, optionally enter a description, and click CONTINUE. You will now assign privileges to the new role.

5. You want this custom role to have reporting privileges only so scroll down to the Security category and check the Reports box. Then click CONTINUE.

6. Click CREATE ROLE.

7. Click Assign role and add Alexandria Ocasio-Cortez to the user list. Then click ASSIGN ROLE. Alexandria Ocasio-Cortez should now appear in the list of users with the new role.

Congratulations! You've now built and assigned a custom administrator role to one of your users, which allows you to better delegate administrator tasks in your domain.

Notes

You can assign more than one administrator role to a user. Creating multiple roles with fewer privileges is, therefore, more versatile than one role with many privileges. If a user handles multiple tasks, just assign multiple roles.
Assigning a custom role to a user grants them access to the Admin console. The privileges determine which dashboard controls are in their console, what information the user can access, and which management tasks they can perform. Learn more about administrator privilege definitions.


## ³ G Suite Admin Part 3

### Exercise #1 - Prepare your G Suite Domain
Introduction

This exercise only needs to be completed if the G Suite Enterprise trial domain you used in the previous course 'Introduction to G Suite' has expired. In this case you should create a new domain and populate it as described below:

Instructions

1. Complete the Create your G Suite Trial Account exercise from 'Introduction to G Suite'. You can purchase a new domain or you can use a domain that you already own. Please see the Help Center resource links below for more details on using an existing domain.

2. Create the following OUs:

Executive
Employees
Contractors
3. Create the following G Suite user accounts:

First name	Last name	Email address	Employee title	Org Unit Path
Alex	Bell	alex.bell@yourdomain	IT Manager	/Executive
Ellie	Gray	ellie.gray@yourdomain	Executive Assistant	/Employees
Jon	Baird	jon.baird@yourdomain	HR Business Partner	/Employees
Lars	Ericsson	lars.ericsson@yourdomain	HR Manager	/Executive
Samantha	Morse	samantha.morse@yourdomain	CEO	/Executive
Timothy	Lee	timothy.lee@yourdomain	Finance Manager	/Executive
Tom	Edison	tom.edison@yourdomain	Support Engineer	/Employees
Will	Marconi	will.marconi@yourdomain	Support Engineer	/Employees
Mark	Jones	mark.jones@yourdomain	Consultant	/Contractors
4. Complete the Adding Calendar Resources exercise from 'Introduction to G Suite'.

Help Center resources

If you are bringing your own domain, you should read:

Verify your domain for G Suite
Set up MX records for G Suite Gmail
Authorize email senders with SPF
Creating OUs

Add an organizational unit
Adding users

Add several users at once


### Exercise #1 - Turn Services On or Off for Everyone
Introduction

As the G Suite administrator, you control user access to different types of Google services, including:

G Suite which includes enterprise versions of Gmail, Calendar, Drive and Docs, and more. These are the core services that have a Terms of Service agreement and are fully supported by G Suite Support.
Additional Google Services such as Blogger, Google Books, and more. These services are available to use in G Suite, but aren't covered by the Terms of Service agreement, nor supported by G Suite Support.
Marketplace apps. The G Suite Marketplace lets administrators browse for, purchase, and deploy integrated, business-oriented cloud applications. Warranties and support for these third-party apps are provided by the vendor, but not G Suite Support.
Administrators can turn services on or off for the entire organization or for a particular OU. In this exercise, you'll learn how to configure services to fit your company's business needs.

Scenario

Your company has a strong focus on the confidentiality of their corporate information. As the administrator, you've been asked by the IT Manager to remove the ability to access some Google services to align better with their business policy.

Hey G Suite Admin,

As you know we are working on a very confidential widget at the moment. To prevent any information leaks I don't want anyone to be able to create a blog or site with their company account.

Thanks, 

Alex Bell, IT Manager

Directions

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com. 

2. Click the Apps icon.

3. Click G Suite.

4. Sites is a core service and core services are generally enabled for everyone by default. To turn off this service, locate Sites in the list and click the ellipses (three vertical dots) icon at the end of the row. Then click Turn OFF for everyone.

5. Click TURN OFF to confirm.

6. To verify the service is now disabled, open a new browser tab and go to https://sites.google.com/a/yourdomain

When you try to access the Sites service you should see a message advising that you do not have access to that service.

7. You must now turn off Blogger as per Alex's request. Blogger is an additional service so from the admin console click Apps > Additional Google services.

8. Locate Blogger in the list and click the ellipses (three vertical dots) icon at the end of the row. Then click Turn OFF for everyone.

9. Click TURN OFF to confirm.

You've successfully turned off the two services for your whole organization.

Notes

It can take up to 24 hours for a service ON/OFF change to take effect.
Some services depend on other services. For example, Google+ depends on Calendar, Drive, and others. You can't turn on Google+ services, unless the other services are also on.


### Exercise #2 - Enable/Disable a Service for a Single OU
Introduction

In the previous exercise you disabled two services for your entire organization. In this exercise you will enable and disable a service at the OU level.

Scenario

You receive the following email from Alex.

Hey G Suite Admin,

Thanks for turning off those services for me. However, our CEO has advised me that they will want to create a site at some stage so can you enable the Sites service for our executive only?

Also, can you turn off Google+ for all contractors?

Thanks, 

Alex Bell, IT Manager

Directions

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com. 

2. Click the Apps icon.

3. Click G Suite.

4. Click on the Executive OU (left side of the page). You are now viewing the status for Apps in the Executive OU only. Note that Sites is OFF at the moment as it inherits it's setting from the top level organization.

5. To turn Sites on for this OU only, locate Sites in the list and click the ellipses (three vertical dots) icon at the end of the row. Then click ON (Override).

5. Click TURN ON to confirm. The Sites service status should change to ON.

6. Click another OU and/or the top level organization and verify that the Sites service remains OFF for other parts of the organization.

7. Click on the Contractors OU.

8. Locate Google+ in the list and click the ellipses (three vertical dots) icon at the end of the row. Then click OFF (Override).

9. Click TURN OFF to confirm. You may need to confirm a second time. If prompted, click TURN GOOGLE+ OFF.

You've successfully turned a single service on and another one off at the OU level thus overriding inheritance from the higher level organization.

### Exercise #3 - Enabling a Service Using Groups
Introduction

In the previous exercise you learned how to enable and disable a service for an individual OU. This alignment between service status and organizational structure is very useful but what happens if you want to enable a service for some users in an OU but keep it disabled for others. In this exercise you will learn how to enable a service for specific users by leveraging a Google Group.

Scenario

You receive the following email from Alex.

Hey G Suite Admin,

Sam, our CEO would like to enable Sites for here Executive Assistant Ellie Gray. Can you please do that for her.

Thanks, 

Alex Bell, IT Manager

Directions

1. Open a new incognito browser window and go to mail.google.com.

2. Sign in as Ellie Gray ellie.gray@yourdomain

3. Navigate to https://sites.google.com/a/yourdomain to confirm that Ellie does not have access to the Sites service.

4. Sign out and sign back into your domain as the administrator at admin.google.com. 

You are now going to create a group and make Ellie a member. Then you will enable the Sites service for this group.

5. Click the Groups icon.

6. Click Create group and enter the following information:

Name: Access Sites
Description: Users with access to the sites service regardless of their OU setting
Group email: access.sites@yourdomain
7. Set the 'Access type' to Restricted (Only members can post and view topics)

8. Click CREATE GROUP.

9. Click the Add members to Access Sites link and add Ellie Gray as a member.

Now we will enable Sites access for the group created above.

10. Navigate to Apps > G Suite.

11. Click the Groups link on the left hand side of the page.

12. Add Access Sites to the 'Search for a group' field. The right hand side of the screen will now show status for apps in Access Sites.

13. Locate Sites in the list of services and hover over the row, then click TURN ON.

14. Click TURN ON to confirm.

Verify that Ellie can now access the Sites service.

15. Sign out as the domain administrator and sign back in as Ellie.

16. Navigate to https://sites.google.com/a/yourdomain.

Even though Ellie's OU has Sites disabled, the sites page should load because she is a member of the access group with Sites enabled.

Notes

It can take up to 24 hours for a service ON/OFF change to take effect.
Groups turn on user access to G Suite core services and Google additional services. Groups can’t turn off user access to a service that’s turned on for an organization.
It's a good practice to develop a naming convention for access groups such as the one created in this exercise, e.g. prefix the group name/email with Access or AX.
An access group can contain users from any organizational unit or another group (nested groups).

### Exercise #4 - Set Services Release Track
Introduction

G Suite is 100 percent web, so your users receive new features and updates automatically, without needing to install or update any software. However, you can still control when new features become available for users.

Setting which release track your company is on is an important administration task. It defines when new features and updates are applied in your domain.

To help make that decision, you can choose from:

Scheduled release track: (Recommended and enabled by default) Choose this track to delay releasing new features to users, giving you extra time to train your support staff and prepare users for the coming changes. Google releases features to the Scheduled release track on Tuesdays only, at least one week after the feature was released to the Rapid release track.
Rapid release track: Choose this track if you want users to access new features as soon as Google rolls them out to consumer users. These features have been through testing and quality assurance, but users will see them at the same time you do, before you have a chance to evaluate them for your organization.
Scenario

For most G Suite customers, we recommend the scheduled release track. However your company has decided that they want to access new features as soon as they're available.

Directions

1. Review the G Suite release calendar to see which features are currently on the Rapid release track. As the administrator, you should be aware of new changes; Rapid releases are marked in red.

2. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

3. Click the Company profile icon.

4. Click Profile. You can select domain wide settings using the Profile feature.

5. In the 'New User Features' section, select the Rapid release option.

6. Click SAVE. Your users will now have access to new user features as soon as Google releases them.
