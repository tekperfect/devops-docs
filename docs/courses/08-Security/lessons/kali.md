## What is Kali Linux?

Kali Linux is a Debian-based Linux distribution aimed at advanced Penetration Testing and Security Auditing. Kali Linux contains several hundred tools .which are geared towards various information security tasks, such as Penetration Testing, Security research, Computer Forensics and Reverse Engineering. Kali Linux is developed, funded and maintained by Offensive Security, a leading information security training company.

Kali Linux was released on the 13th March 2013 as a complete, top-to-bottom rebuild of BackTrack Linux, adhering completely to Debian development standards.

More than 600 penetration testing tools included: After reviewing every tool that was included in BackTrack, we eliminated a great number of tools that either simply did not work or which duplicated other tools that provided the same or similar functionality. Details on what’s included are on the Kali Tools site.

Free (as in beer) and always will be: Kali Linux, like BackTrack, is completely free of charge and always will be. You will never, ever have to pay for Kali Linux.

Open source Git tree: We are committed to the open source development model and our development tree is available for all to see. All of the source code which goes into Kali Linux is available for anyone who wants to tweak or rebuild packages to suit their specific needs.

FHS compliant: Kali adheres to the Filesystem Hierarchy Standard, allowing Linux users to easily locate binaries, support files, libraries, etc.

Wide-ranging wireless device support: A regular sticking point with Linux distributions has been supported for wireless interfaces. We have built Kali Linux to support as many wireless devices as we possibly can, allowing it to run properly on a wide variety of hardware and making it compatible with numerous USB and other wireless devices.

Custom kernel, patched for injection: As penetration testers, the development team often needs to do wireless assessments, so our kernel has the latest injection patches included.

Developed in a secure environment: The Kali Linux team is made up of a small group of individuals who are the only ones trusted to commit packages and interact with the repositories, all of which is done using multiple secure protocols.

GPG signed packages and repositories: Every package in Kali Linux is signed by each individual developer who built and committed it, and the repositories subsequently sign the packages as well.

Multi-language support: Although penetration tools tend to be written in English, we have ensured that Kali includes true multilingual support, allowing more users to operate in their native language and locate the tools they need for the job.
Completely customizable: We thoroughly understand that not everyone will agree with our design decisions, so we have made it as easy as possible for our more adventurous users to customize Kali Linux to their liking, all the way down to the kernel.

ARMEL and ARMHF support: Since ARM-based single-board systems like the Raspberry Pi and BeagleBone Black, among others, are becoming more and more prevalent and inexpensive, we knew that Kali’s ARM support would need to be as robust as we could manage, with fully working installations for both ARMEL and ARMHF systems. Kali Linux is available on a wide range of ARM devices and has ARM repositories integrated with the mainline distribution so tools for ARM are updated in conjunction with the rest of the distribution.

# How to use Kali

When attempting to use Kali Linux in a sandbox environment or an environment you are authorized to run eploits in it's recommend that your follow these steps.

Step 1: Prep environment (Have a working Kali and Metasploitable VM or dedicated host with known vulnerabilities)

Step 2: Verify both VM's are on the same subnet (Verify the attacker machine akayour Kali Linux box is on the same CIDR as your target host you are attempting to run the exploit against)

Step 3: Scan the subnet for vunerable systems (If you do not know the IP address of the vulnerable system on your network we recommend the use of a tool like nmap to determine what systems you have on your network that could potentially be vulnerable)

Step 4: Determine your target based on the number of open ports (If you find a system with a number of open ports. This may be a clear indication that that system is vulnerable to exploits and should be the source of your first exploit.

Step 5: Find a vunerablity you can exploit (Once you have identified a vulnerable system it is a good idea to reasarch the types of vulnerabilities you can use to compromise the system.

Step 6: Exploit and gain access to that system (After you run a successfull exploit against a system. We recommend the use of tools like meterpreter to elevate your access, create accounts on the system or to drop a backdoor for remote access to the system)

Step 7: Create a new account or make a change to that system you can demonstrate to the class (Once you have access to a system the best way to speed up the compromise of that host is to create local credentails that will allow you to authenicate to the host.

Step 8: Review some of the issue you had that you lost time on or were confusing (If you experience difficulty launching the exploits and getting them to work you should review the requirements to initiate and successful execute the exploit.

Step 9: What other exploits could you have used (Finally the last thing you need to consider when using tools Like Kali Linux are the other potential approaches to compromising the system.

Step 10: Practice, Practice, Practice (If at first you don't succeed ... You know the rest :-) )
