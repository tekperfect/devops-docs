
# Windows Server Administration


## Install OS & Prep

Download the iso from 
You will use this ISO to build your Windows 2019 Server 
If you have any trouble with installing the OS please ask for help.
Once the OS is installed you will need to install the following services using the “Server Manager” wizard.
IIS, & FTP can be installed by clicking on the “Add Roles and Features” selection.
Click on the next button until you reach the “Select one or more roles to install on the select server” option and place a check in the “Web Server (IIS)” selection



## Install OS & Prep

During the wizard selection you will also need to select the “FTP Server” option.

Once you have selected all the appropriate options you will need to click on the Install button to finish the installation of these services
Once these services are installed you should be able to access the default IIS website by typing the servers IP into a browser from your system. 

Please make sure your VM host is set to bridged mode for this exercise to work properly.


## Configure IIS

Verify IIS is installed by opening a browser on your laptop and typing in the IP address of your Windows server.

Please verify that your server and laptop are using the same network by making sure the adapter is set to “bridged” for network.

Locate the IP address of your Windows server by running “ipconfig” from the command.

What is the default web page associated with the IIS server?

What is the directory that the default website is stored in?

What is the name of the file that displays the webpage?

What is the default port associated with the website?

What three things would you need to do in order to make a client believe your copy of the website was authentic?


## IIS Exercises

Make a copy of a popular website that requires login credentials Amazon, Netflix, Hulu, Google using the wget --recursive --level=1

https://www.amazon.com remember you don’t want the entire site because that would take forever. You only want 1 level deep.

Zip a copy of the website: zip -r filename.zip directory-name
Replace the default copy of your website in IIS with the bogus copy of the popular website.


## Results

A copy of a popular website running on your IIS server?

A client that connects to your copy of that popular website by name.

## Questions?

What is the purpose of this exercise?

Why is DNS important?

Why are SSL certificates important?

What other methods could you use to get a client to connect to a non authentic version of your website? 

## Configure IIS Server Answers

What is the default web page associated with the IIS server? Internet Information Server

What is the directory that the default website is stored in? c:\inetpub\wwwroot

What is the name of the file that displays the webpage? index.html

What is the default port associated with the website? 80

What three things would you need to do in order to make a client believe your copy of the website was authentic?

Self signed certificate

DNS change to send the client to your version of the site

A webserver to host the site on.

## More Questions

What is the purpose of DNS and how is it used to connect to websites?
What is an SSL certificate and how do you generate one via IIS?
What kind of impact could you have on a client's system that you have physical access to?
What kind of impact could you have on a client's system that you have remote access to?
These questions will not have any hints, think critically to figure them out.


### [Return to SYS Admin](courses/03-System_Administration/home)