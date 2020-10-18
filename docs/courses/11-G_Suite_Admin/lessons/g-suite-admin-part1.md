## G Suite Administration

> 

> 

---

Exercise #1 - Logging Into the Admin Console


### Directions
 
1. Open a web browser window and go to admin.google.com.

2. Enter your G Suite administrator account email address and click Next.

3. Enter your administrator password and click Next. The admin console displays.


### Notes

Notes

You will normally sign into the admin console from admin.google.com. However, if you're already signed in to another G Suite service you can also access the admin console by clicking the Admin icon that can be found in the Apps Launcher.

Only a user with administrator privileges can access the admin console. As the domain administrator, you can grant administrator privileges to any of your users. We will discuss this later in the course.

iExercise #2 - Review your Domain Name System (DNS) Records
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

