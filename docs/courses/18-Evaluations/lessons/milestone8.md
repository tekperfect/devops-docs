## Evaluation

### Operating System Fundamentals


## Evaluation Review 👇🏾
![Evaluation](evaluation.png)

1. Delete all your parallels instances and create them from scratch. At the end of creating each instance you should have the following.
 - 1 Kali Linux instance
 - 1 Ubuntu Linux instance
 - 1 Windows 11 Desktop instance
 - 1 MacOS instance

2. I strongly recommend you snapshot each instance so you can revert them back to a clean state whenever we use them.

3. Spin up a clean Kali and UTM Metasploitable image and bridge them so that you can demonstrate an attack using one of the known Metasploit attacks.

4. Shutdown your UTM Metasploitable instance and spin up your Ubuntu instance and install the following services on it Apache, MySQL, Postgress, and Samba. To installl Samba I would like everyone to follow the following guide `https://ubuntu.com/tutorials/install-and-configure-samba#1-overview`. 

5. With these services installed I want you to repeat the attack you ran on the UTM Metasploitable instance against the Ubuntu instance and let the class know the results.

6. After running your attack on your Ubuntu instace install fail2ban on your Ubuntu instance and run a Medsa ssh brute force attack. Please use the following guide to configure fail2ban on your Ubuntu instance and then run another Medusa ssh attack against the Ubuntu instance from your Kali Linux box. 

7. Please configure fail2ban to block ssh access to the Ubuntu host after 5 unsuccessful login attempts.

8. When launching your attack from Kail use of the of the default username and password lists provided by Kali or ones provided by your instructor.

9. After you sucessfully or unsuccessfully run your attack from Kali against Ubuntu please share with the results with the class and document the results and challenges in a good document.

10. Reset your Ubuntu and Kali systems back to their default snapshot state and repeat this process while using the Wireshark tool. 
