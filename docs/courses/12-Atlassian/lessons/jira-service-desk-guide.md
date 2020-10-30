# JIRA Service Desk Guide


Welcome to Jira Service Desk for admins! In this tutorial, we'll introduce you to your workspace and walk you through the process of setting up a service desk project for your team of agents and a corresponding customer-facing site (which we call the customer portal).

We'll be focusing on basic Jira Service Desk features and tasks to help you get up and running quickly. By the end of this tutorial, you will have: 

1. Set up 1 service desk project

2. Added 3 agents

3. Prepared your customer portal to receive customer requests

Let's take a quick look at Jira Service Desk...



Audience:

- Service desk administrators
- Team managers
- Time: 30 minutes

**Queues**  
As an admin, you will set up and configure queues for your agents. Your agents will then view and work on issues from the same tab: 


**Reports**  
Use the Reports tab to view your team's workload. You can also set up custom reports to track your team's progress in more detail:



**Project settings**  
Here, you will set up request types, brand your customer portal, link your service desk to an email account, and manage users:


**Customer portal**   
This link lets you navigate the customer view of your service desk project:

Customer Portal. The portal will be seen by customers when they access your project.


Now that you're familiar with your service desk workspace, you can set up your own Jira Service Desk site and add your first project.






## Setting up your service desk

You'll need a working Jira Service Desk instance to complete this tutorial, and we have installation instructions for both Windows and Linux operating systems.

- Windows installation instructions
- Linux installation instructions

If you have an existing Jira Service Desk site, skip ahead to create a service desk project. If your administrator has set you up as a project admin for an existing project, jump to Step 2 to create your request types.

### Create a project

Jira Service Desk comes with default project templates that you can use to suit your team's needs. There are three templates you can choose from:

- The Basic Service Desk template is set up for internal business teams, like HR, finance, or small IT teams. The template comes with just a few recommended request forms and is easy to customize and expand with your needs.
- We recommend the IT Service Desk template for IT teams who maintain a more complex infrastructure. The template comes with ITIL-inspired workflows for change, incident, and problem management.
- If you help external customers and want to collect bug reports or take suggestions for new feature, we recommend the Customer service desk template. The template comes ready for your customers to request technical or billing help, and report issues.

For now, let's get you set up with a basic service desk project.

1. If you're working with an existing Jira Service Desk instance, select Projects > Create Project from the the top navigation bar of your instance. If you've just installed and set up Jira Service Desk, you'll have the option to Create a new project by selecting Create new project.

2. Select "Basic Service Desk" as the project type. 

3. Name your project. In this example, we'll use the project name "Charlie Travel Franchises". The project key should be automatically populated, but you can change the key if you'd like. If you see options to link another application, leave these options unchecked. 

4. Select Submit to create your project.

Nice work! You now have a service desk site with one project. You will now learn to set up request types, which define the requests customers can submit to your team's service desk project.





### Service Desk Request Types

**Request** types let you define and organize incoming issues so your service desk team can more efficiently help your customers. If you're moving from an existing help desk application, you can add your existing request categories during this step. 

If you're setting up service desk request types for the first time: 

- Think about how your customer would write a request, for example 'Order a new monitor' over 'Submit a hardware request'.
- Break things down into smaller chunks, such as 'Get help with printers' or 'Get wi-fi access'.
- Avoid specialist terminology; think 'I need access' more than 'Deploy SSH key'.

By the end of this step, your project's request type page should look something like this:



### Requests vs. Issues

Remember that customers submit requests to your service desk and your team picks up the corresponding issues to work on.

**Create new request types**  
Let's go ahead and add two new request types, so you can familiarize yourself with the request type configuration options.

1. In your new service desk project, select Project settings > Request types.
2. In the new request type form at the top of the page, change the request type icon and enter the following details for a new "Connect to wi-fi" request type.

3. Select Create request type when you've finished entering your request type details.
4. Create a second request type called "Order a monitor" with the following details:

- Select Create request type when finished.
- Edit the fields your customers see

Now that you have requests in the customer portal, you can prompt your customers to give you the information you need to help them quickly. These simplified fields help customers understand what information they need to provide when submitting a request.

Let's add some fields to your request types, so you can collect some additional information.

5. For the "Connect to wi-fi" request type, select Edit fields.
6. Under Visible fields, click the "Summary" display name and rename it to "What do you need?". Add some placeholder text to the Field help to gather useful details from your customers. For example:

7. Select Update when finished. 
8. Select Add a field to add the "Priority" field to the request form and select Apply. 
9. On the Workflow Statuses tab, you will see the default Jira workflow status names displayed on the left hand side. You can change how these statuses appear to customers by editing the Status name to show customer fields as shown:


10. Select View this request form to see how your changes appear in the customer portal.

### Organize your requests with groups  
A **group** is simply a category you can assign to each request type. In the customer portal, your request types are organized vertical tabs based on your groups. 

We think groups are helpful if you have seven or more request types.

Go to **Project settings > Request types**. You should see your groups in the sidebar: 

Sample groups (General) on the Request types page.


Let's add a few groups to help your customers find the request they need:

1. To add request groups, select + Add group. Add two groups for your new request types, "Hardware requests" and "Access".
2. When viewing your "Access" request group, select Add existing request type and choose your "Connect to wi-fi" request type:


3. Switch to your "Hardware requests" group in the sidebar.
4. Select Add existing request type and choose your "Order a monitor" request type.
4. Open the customer portal link from your project sidebar to see your requests organized into groups.
5. To rearrange the order of how your groups appear in the customer portal, go back to your project settings and drag and drop the groups in the request types sidebar.
6. Create a request from the customer portal
7. Keep the customer portal preview open, so you can create test requests from a customer's perspective.
8. Select the "Connect to wi-fi" request type. 
9. Enter "Test wi-fi request" in the open field and select Medium priority.
10. Click Create to complete your request and view the open request in the customer portal. 
11. Click Close to exit the customer view and return to your service desk project. 

Excellent work! You now have four request types and a new issue in your project. 

Next, you will learn how to sort these issues into queues, which will allow you to manage your team's workload.





### Adding Service Desk Agents

There are two default project roles you can assign users to in Jira Service Desk: 

- Service Desk Customers who create requests via email or the customer portal
- Service Desk Team who view and respond to these requests

As the user who created this project, you have been automatically added to the Administrators project role. 

**Add your agents**   
Project administrators can add agents with existing user accounts to their project. If you are a project administrator, you will need to contact your site administrator to add user accounts for new agents. Make sure you're signed in as an administrator for this step, you can invite three new agents to your project - Diane, Martin, and Waldo: 

1. In your project sidebar, select Invite team. 
2. Enter the email addresses for your new agents and select Invite 3 people. 
3. The agents are added to the Service Desk Team role in Project settings > Users and roles. 
4. Assign issues to agents

Your agents will generally work out of queues that have issues automatically triaged into them. Let's test out manually assigning issues in case you ever come across a customer request that you want a certain agent or team to handle. 

1. From the Queues tab, open one of your test requests by clicking the issue summary or issue key. 
2. Select Assign.
3. Enter Waldo in the Assignee field and select Assign. When Waldo signs into Jira Service Desk, this issue appears in his queue. 
4. Assign another test issue to Diane. 
5. Add your customers

You don't need to add customers to your service desk during this tutorial, but let's check out where you would add them, so you're familiar with the steps: 

1. From your project sidebar, select Customers.
2. Select Add customers in the top right corner and enter one or more email addresses.
3. When you select Invite, the customers receive an email invitation with a link to your customer portal, where they can complete the signup process.

### Public customer signup

You can have your customers sign up for their own accounts (without an individual email invite) by enabling public signup.

You're almost done! You have now added 3 agents to your service desk project and reviewed the process of assigning issues to these agents. You can now customize your customer portal and share it with the rest of your team.





### Customize Your Service Desk Channels

Service desk customers can send you requests in two ways:

- through an online portal 
- to an email account you've linked to your service desk project.

Let's customize the portal and add an email account, so customers can get in touch.



## Customize the help center 
Your service desk project comes with an online help center for your customers. From the help center, customers can browse all the service desks they have access to.

It will look something like this:



Jira admins, project admins, and agents with permission can brand the help center in a number of ways. Here's how:

1. Go to Jira administration > Applications > Jira Service Desk > Configuration.
2. Below Help center, click the link View and customize.
3. In the customize panel on the right hand side, do any the following:
4. Add a help center announcement
5. Add an announcement to the login screen
6. Give your help center a name
7. Add a logo
8. Add a banner image or banner background color
9. Change the color of some components
10. Choose Save changes to publish your announcement.

To learn more about the help center check out Using the help center.



### Customize the customer portal  
Now that your help center looks inviting, you can customize the customer portal for each of your service desks.  
Add a name and logo to your customer portal so that people know they're sending requests to the right team. The banner, links, and button colors are all inherited from the help center.

It will look something like this:



To customize your customer portal:

1. In your service desk project, go to Project settings > Portal settings.
2. Edit your customer portal name and intro text by typing in the fields.
3. Save any edits by clicking the tick icon in the field you're editing.
4. Add a customer portal logo by selecting Use a custom logo.
5. Select Save logo, once you've uploaded your image.

To learn more about the customer portal check out Configuring the customer portal. 



### Link an email account 
Customers can also create requests and communicate with your team by email. If you haven't already, create an email address that you'd like your team to be contacted on.

To link an email to your service desk project:

1. Go to Project settings > Email requests.
2. Select Add email address and fill in the details. If you use 2-step-verification for Gmail, generate an application-specific password when adding your email account details.

3. Set up your email channel page with empty fields for email service provider, email address, and password.
4. Once you've linked an email to your service desk, we'll send a test email to your inbox and create a test request in your service desk project. 

To learn more linking an email to your service desk check out Receiving requests by email.

If you use POP, make sure the email account you choose for this channel has an empty inbox so you do not lose any existing emails. 

### Tell customers about your service desk 
Now that your service desk project is ready to receive requests, share the service desk email address (for example, helpdesk@example.com) with your customers or give them a direct link to the customer portal.

You can give either, or both, of the following URLs to your customers, depending on your setup:

- URL to a customer portal â€“ give this URL to your customers if you've enabled public signup and want them to sign up for accounts on their own.
- URL to the help center â€“  here they will see all the service desks they have access to. The URL is: http://<computer_name_or_IP_address>:<HTTP_port_number>/Jira/servicedesk/customer/portals

Here are other ways that some customers promote their service desk:

- post a link on the intranet or other communication channels
- email their customers to tell them there's a new way to get help
- put posters up in communal areas around the office.


You've now finished setting up your service desk project! Continue to learn more advanced tips on tracking your team's progress and supporting your customers.
