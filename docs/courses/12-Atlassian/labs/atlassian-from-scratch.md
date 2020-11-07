## Environment Prep

Launch 1 linux instance via the AWS console

Create a label with the Key = Name and the Value = "Your_First_Name Atlassian"
Set the disk space for the instance to 100GB

Download JIRA and Confluence from Atlassians website or the following links

https://tekperfect-devops-uploads.s3-us-west-1.amazonaws.com/atlassian-jira-software-8.13.1-x64.bin

https://tekperfect-devops-uploads.s3-us-west-1.amazonaws.com/atlassian-confluence-7.8.3-x64.bin

### What command would you use to download these files from the command line of your instance?

## Intall Confluence

Change the permissions on the binary file to install it
What command do you use to do that?
Install the software and follow the prompts and accept the defaults
Once the install is complte you will be asked if you want to start Confluence choose yes and open an browser to the servers default webpage using the IP associated with your instance.


Install JIRA

What command do you use to do that?
Install the software and follow the prompts and accept the defaults
Once the install is complte you will be asked if you want to start JIRA choose yes and open an browser to the servers default webpage using the IP associated with your instance.
### How do you install both products after you download them?

### What resources would you use to determine the prerequisites to install them?

Configure accounts on them

Setup your first JIRA project

Switch over to JIRA Service desk and partner with your DevOps Cohort colleagues and switch between a user submitting tickets and a administrator picking up and responding to requests

Now you have a feel for how it is to setup a JIRA & Confluence instance and for the rest of class we are going to focus on the administration tasks associated with managing tickets, a on premise environment, and a cloud environment

For the security group create a new one and call it your_first_name-atlassian and make sure ssh is only open to your IP address by choosing "My IP"

## Questions

What are the difference between the products?

Why would you want to host your own instance versus using a cloud instance?

What are the advantages and disadvantages to a on premise instance vs a cloud instance?

What roles are available to you as an Atlassian administrator?
