
# **📋 G Suite Administration Part 1**

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

## Example Image 👇🏾
![Example Image](google-admin-ex3a.jpg)

2. Click the three horizontal lines on the top left of the screen to reveal the side menu. This menu makes it easier to see, find, and directly navigate to the information and settings in your admin console:

Easily scan a shorter, multi-layered menu that helps you find things quickly.
Quickly find what you’re looking for by hovering over and clicking through the menu to drill down directly to the pages you want to see.
The streamlined menu removes clutter for delegated admins so they will only see the menu items they have access to with their level of administrative privileges.

## Example Image 👇🏾
![Example Image](google-admin-ex3b.jpg)

### Exercise #4 - Review your Company Profile
Introduction

The Company profile is where you define company-wide settings for properties such as language, time zone, and company name. You also use this profile to manage policies such as when users can see newly released features in G Suite services.

Directions

1. If you are not already signed in, sign in to your domain as the administrator at admin.google.com.

2. Click the Company profile icon.

3. Click the Profile section.

This is where you can configure company-wide settings. Explore the various profile settings.

## Example Image 👇🏾
![Example Image](google-admin-ex4a.jpg)

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
Primary email: alfonso.hooker@.tekperfect.org

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
alexandria.ocasio-cortez@tekperfect.org
HR
Katherine
Johnson
katherine.johnson@tekperfect.org
Engineer
Ellison
Onizuka
ellison.onizuka@tekperfect.org
Engineer
Charles
Hooker
charles.hooker@tekperfect.org
CEO
Grace Lee
Boggs
grace.boggs@tekperfect.org
Sales
Jerry
Lawson
jerry.lawson@tekperfect.org	
Game Developer
Edward James 
Olmos
edward.olmos@tekperfect.org
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
Group email: everyone@tekperfect.org
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

Sam can now email everyone in the organization by emailing everyone@tekperfect.org.

Create the management group

14. Return to the Groups page and create a new group as follows:

Name: Management
Description: Executive group
Group email: management@tekperfect.org
15. Click NEXT.

16. Set the 'Access type' to Restricted (Only members can post and view topics), create the group and add the following members:

Charles Hooker (CEO)
Alfonso Hooker (IT Manager)
Alexandria Ocasio-Cortez  (HR Manager)
17. Change Charles's role to be a group manager so she can add new members as needed.

The management team now has a private group in which to collaborate.

Verify group settings

18. Sign out and sign back in to G Suite at mail.google.com as charles.hooker@tekperfect.org.

19. Send a message to everyone@tekperfect.org and another message to management@tekperfect.org.

20. Open the Groups for Business service at groups.google.com.

21. Click My groups. You should see the both groups listed. Open each group in turn and verify that your messages were delivered.

22. Sign out and sign back in to G Suite at mail.google.com as alexandria.ocasio-cortez@tekperfect.org. You should see the message sent by Charles to everyone in your inbox.

23. Send a message to everyone@tekperfect.org and another message to management@tekperfect.org.

24. Refresh your inbox (you may need to do this a few times). You do not have permissions to post to either group so should receive a delivery failure report for each of the two messages.



25. Send a message to everyone@tekperfect.org and another message to management@tekperfect.org.

26. Refresh your inbox (you may need to do this a few times). You should receive a delivery failure report for the message sent to everyone@tekperfect.org only.

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

Resource email: tekperfect.org@resource.calendar.google.com
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

Thanks for creating my G Suite account. However I have to ask for a minor change. My email is samantha.morse@tekperfect.org but really most people know me as just “sam”. Is there any way I can have this as my email also?

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

I have created a new email alias for you. In addition to your primary email address, samantha.morse@tekperfect.org, you can now also receive mail sent to sam@tekperfect.org.

However, please be aware that you'll still need to use your primary email address: samantha.morse@tekperfect.org to sign in to G Suite.

Note that it may take up to 24 hours for the email alias to become available.

Regards, Your G Suite Admin
