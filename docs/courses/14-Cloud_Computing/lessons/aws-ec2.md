# Amazon Web Services EC2

1. One of the most widely used services in AWS is EC2. Which stands for Elastic Compute Cloud.

2. One of the exercises we will do today is create two instances one Windows and One Ubuntu. The purpose of this exercise is to prepare you for navigating the platform as it relates to EC2. 

3. We will begin by launching instances using the free tier model so you do not incur any costs, and doing so will give you ample time to get comfortable with the interface and creating an environment where you can learn and thrive.

4. Please pay careful attention to your instructors warnings about EC2 and AWS usage. The goal of this first lesson is to launch a t2.micro instance with 8GB of disk space for the Ubuntu instance and 30 GB for the Windows instance along with the default amount of RAM.

5. Due to the how small a footprint Ubuntu has it can easily run well on a system with a small amount of disk space and RAM.


### Launching An Instance


1. To create an instance login to AWS with a non root account. This is very important because your instructor should have helped you all create a policy that will restrict the types of instances you can create. Which should prevent individuals from launching instances that do not qualify for free tier usage.

2. From the main AWS menu in the upper left hand corner of the screen select "Services" selection with the 9 dots that make a square and select EC2. If EC2 is not listed you can type it in the search box and select it.

3. Once you have selected EC2 we will begin the process of creating an instance.

4. To launch and instance we are going to click the "Launch" Instance button

5. After clicking on the button we are going to review the various options below to make sure the appropriate selections are made.

6. Under the Name and Tag option we are going to give our server a name. Since this is our first instance we are going to create we are going to name it "Ubuntu Sandbox".

![AWS](1-ec2-wizard.png)

7. Under the Application and Os Images option we are going to select the Ubunt icon.

![AWS](2-ec2-wizard.png)

8. Now under instance type please make sure t2 micro with free tier eligible is selected.

![AWS](3-ec2-wizard.png)

9. Now under the keypair selection your are going to select Create New Keypair and make sure you download the keypair because without it you will not be able to login to the instance.

![AWS](4-ec2-wizard.png)

10. Now under the network settings selection we are going to leave "Create security group selected" and change the dropdown that says Anywhere and change it to "My IP".

When you do that the warning which states "Rules with source of 0.0.0.0/0 allow all IP addresses to access your instance. We recommend setting security group rules to allow access from known IP addresses only." Will go away.

11. Why is this important? Because you don't want the entire world to be able to ssh to your Ubuntu instance.

![AWS](5-ec2-wizard.png)

12. Now under the configure storage selection you are going to leave the defaults

![AWS](6-ec2-wizard.png)

13. Now with all the proper settings selected you are now ready to click on the Launch Insance button to finalize your changes and deploy your first cloud based VM.

### Windows EC2 Instance

1. To launch a Windows instance we are going to click the "Launch" Instance button

2. After clicking on the button we are going to review the various options below to make sure the appropriate selections are made.

3. Under the Name and Tag option we are going to give our server a name. Since this is our first instance we are going to create we are going to name it "Windows Sandbox".

![AWS](1-ec2-wizard.png)

4. Under the Application and Os Images option we are going to select the Windows icon.

![AWS](2-ec2-wizard-win.png)

5. Now under instance type please make sure t2 micro with free tier eligible is selected.

![AWS](3-ec2-wizard.png)

6. Now under the keypair selection your are going to select Create New Keypair and make sure you download the keypair and name it something other than the name of the previous keypair because without it you will not be able to login to the Windows instance.

![AWS](4-ec2-wizard.png)

7. Now under the network settings selection we are going to leave "Create security group selected" and change the dropdown that says Anywhere and changeit to My IP. 

When you do that the warning which states "Rules with source of 0.0.0.0/0 allow all IP addresses to access your instance. We recommend setting security group rules to allow access from known IP addresses only." Will go away.

8. Why is this important? Because you don't want the entire world to be able to ssh to RDP to your Windows instance.

![AWS](5-ec2-wizard-win.png)

9. Now under the configure storage selection you are going to leave the defaults

![AWS](6-ec2-wizard-win.png)

10. Now with all the proper settings selected you are now ready to click on the Launch Insance button to finalize your changes and deploy your first Windows cloud based VM.

11. You are now officially a cloud based DevOps Engineer... Sorta ;-)

12. While we are waiting for those instances to launch we want to make sure we backup those keypairs you created to LastPass just in case you accidently delete the files.

13. I recommend naming each file corresponding to the type of instance you want to launch like ubuntu.pem and windows.pem and zipping file an attaching it to a secure note with some infomation about it.

14. In the future when you launch additional instances you can use these keys instead of creating new ones.

15. These keys are required to ssh into Ubuntu and decrypt the administrator password for your Windows host. However, if you change your Windows password after decrypting it you must remember it because the key will not be able to decrypt a changed password on your Windows host.

16. To ssh to an instance you would type in the following command.

`ssh -i pemfile_name.pem ubuntu@xxx.xxx.xxx.xxx`

17. In order to obtain the Windows administrator password of a VM you will need to right click on the VM and supply the pemfile_name.pem to decrypt the password.

