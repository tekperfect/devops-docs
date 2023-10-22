### Ubuntu Server Networking

![PAN](pan.jpg)

0. ssh to your Ubuntu server

1. Then backup your network configuration file of your Ubuntu server.

2. The file is named `00-installer-config.yaml`

3. What command would you run to locate the file (Hint you use the find command)

4. For example if I were looking for the Apache configuration file I would run the following command to locate it `sudo find / -name 000-default.conf`

5. After you use the find command to locate the file you have two options to back it up.
5a. You can cd into the directory and use the cp command to make a backup of the file.
5b. Or your can use the full path to the file with the cp command to make a backup of it.
5c. I suggest for simplicity purposes calling the backup copy of the file `00-installer-config.yaml.backup`

6. After you have made a backup of the file we are going to make changes to the file.

7. However before we make changes to the file what command would you run to see the contents of the file without editing it.

8. Your file should look something like the image below.

![Network Configuration](ubuntu-network-config.png)

9. Now edit `00-installer-config.yaml` and add the following lines to it.

`network:
  ethernets:
    enp0s5:
      addresses: [10.211.55.10/24]
      routes:
        - to: default
          via: 10.211.55.1
          on-link: True
      nameservers:
        addresses: [8.8.8.8, 8.8.4.4]
      dhcp4: false
      optional: true
  version: 2`

10. Please note the spacing in the file is important. If you need to verify that your spacing is correct you can go to the following webiste to check it.

11. YAML Validator `https://www.yamllint.com/`

12. After you have verified that your file is valid please save it and run the following commands.

13. `sudo netplan generate`

14. `sudo netplan apply`

14a. You should get disconneted

14b. Why did you get disconnected?

14c. How do you reconnect to your Ubuntu server via your Mac terminal

14d. Run the ssh command again and use the IP address you specified in the network configuration file above

15. The static IP you just set on your VM will always be the IP you use to ssh to it unless we revert the `00-installer-config.yaml` file back to the default configuration.

16. How would you keep the original configuration file contents intact but invalidating them while adding the new network configuration. (Hint what is the first character in the configuration file).

17. If you are unable to get back into your VM can log back into your VM via Parallels and then run the ip addr command to determine the IP address.

18. Once you have successfully been able to get back into your VM from the Mac terminal restore the backup copy of the `00-installer-config.yaml` and then run the `sudo netplan generate` and `sudo netplan apply` command.

19. Your IP may revert back to it's old IP addrees

20. The last and final step in the changing of your Ubuntu Servers IP is to change the network adapter to bridged mode.

21. To do so you need to shutdown the Ubuntu VM and then run the following command via the Mac terminal

22. `sudo prlctl set "name of your vm" --device-set net0 --type bridged`

23. This will set the adapter of your vm to bridged mode which will allow it to operate on the same network your mac is configured for.

24. To verify that your Ubuntu server VM has obtained an IP similar to one your Mac has login to the VM directly via Parallels and run the ip addr command.

25. Once you have verified the new IP address of your VM you should be able to ssh to it via your Mac terminal.

26. If you VM is not accessiable via your Mac terminal after this change perform a full reboot of your VM.

27. If you still experience issues ask your instructor for assistance.

28. This exercise is designed to get you more familar with Linux server networking and reinforce the use of the ssh command, cp command, and vi. The labs in this course are designed to have you perform operations that ensure you can safely update changes to your VM and undo those changes as you would in a regular production environment.

29. If any parts of this lab were unclear please ask questions and assistance from your instructor.

30. However, the goal is to get through as much of the lab as possible without assistnace and only ask for assistance when necessary..
