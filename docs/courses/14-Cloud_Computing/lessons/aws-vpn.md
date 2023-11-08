## Open VPN


###  What is a VPN

### Why Are They Needed?

### VPN Networking

### Security

### Setup OpenVPN

1. Launch OpenVPN Access Server from AWS Marketplace

2. Sign in to the AWS Management Console and navigate to the EC2 service.

image

3. In the dashboard, click AWS Marketplace menu and type OpenVPN. Select the first one with the Free Tier Eligible badge.

image

4. On the next page click Continue and Select t2.micro from the instance type list and click on Review and Launch button.

5. Create a new key pair (or use an existing one if you already have one), enter a name, and click download key pair. Then click Launch Instance and wait for the instance to go to running state.


6. Configure the Server

7. If you’re using a Linux or Mac machine, open your terminal and SSH to your server as openvpnas:

ssh -i "{keyname}.pem" openvpnas@xxx.xxx.xxx.xxx

8. Next, type yes for the agreement, then you’ll be prompted with how you want to configure your VPN.

image

9. Type yes for the following 2 prompts:

Should client traffic be routed by default through the VPN?

> Press ENTER for default [no]: yes
Should client DNS traffic be routed by default through the VPN?

> Press ENTER for default [no]: yes

10. Just hit enter for the rest to have all the defaults confirmed. Once you reached the end, change the password for the user. Enter a new password twice and you’re all set.

sudo passwd openvpn

11. Next, open a browser window and type https://xxx.xxx.xxx.xxx:943/admin 

12. Login with openvpn and the password you just set.

image

14. Once in the Admin dashboard of OpenVPN, click configuration and go to “VPN Settings”

image

15. Scroll down and then apply the following changes:

16. Make sure the toggle for Should client Internet traffic be routed through the VPN? is set to Yes

17. Change the toggle for Have clients use specific DNS servers to Yes

18. Enter custom DNS server and set Primary DNS Server to 8.8.8.8 (CloudFlare DNS) and the Secondary DNS Server to 8.8.4.4

image

19. Save the settings and then click on Update Running Server


20. A VPN Client is required that can handle capturing the traffic you wish to send through the OpenVPN tunnel, and encrypting it, and passing it to the OpenVPN server.

21. To obtain the Official OpenVPN Connect app, go to the Google Play Store on your Android device and install the Official OpenVPN Connect app.

22. Open the app & start the import process by entering the IP-address of your running EC2 instance. 

23. Input the username as openvpn and the password you had set.

image

24. Once the import has completed, you are ready to use the app!

image

25. If you run into any issues please review the steps and ask your instructor for assistance.

### Questions?

Did you understand everything in these exercises?

Did you lookup things that you did not understand or were confusing?

How do you learn more about AWS, VPN, Security groups, and VLAN's?
