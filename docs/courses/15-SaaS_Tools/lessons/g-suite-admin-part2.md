
## **📋 G Suite Administration Part 2**


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

You decide that the best way to implement this is to rename the user to grace-lee.boggs@tekperfect.org to allow her to sign in and use her mail with this new username. Then add an alias of grace.boggs@tekperfect.org to the account.

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

8. Expand the User information card and click on the Email aliases section. Notice here that Grace Boggs’s original email address grace.boggs@tekperfect.org has been added as an alias. This is to ensure that he can still receive mail sent to his old primary address.

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
Mark	Jones	mark.jones@tekperfect.org	Consultant
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
Primary email: mark.jones@tekperfect.org
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
