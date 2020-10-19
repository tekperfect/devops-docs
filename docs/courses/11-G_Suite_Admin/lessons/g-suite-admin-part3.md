## G Suite Administration

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
