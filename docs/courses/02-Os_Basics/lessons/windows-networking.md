# Windows Networking Commands


ipconfig (list the ip configuration of a system)

`ipconfig`


Track path to host or IP address


`tracert xxx.xxx.xxx.xxx`

`traceroute www.google.com`


route print or netstat -r (see your routing table and network connections)

`netstat -na` 


Ping (send and echo or are you alive command to a system)

`ping google.com`

`ping 192.168.1.1`


nslookup (lookup domain name)

`nslookup google.com`


Redirect output of a command to a file

`ping > c:\filename.txt`


Append the output of a command to a file

`tracert >> c:\filename.txt`

To quickly reset your NIC back to DHCP with no manual settings, run this command:

`netsh int ip reset all`

To quickly generate a text summary of your system, run this command:

`systeminfo | more`

To see all network connections your client has open, run this command:

`net use`

To see your routing table, run either of these commands:

`route print`

`netstat -r`

Need to run a trace, but don’t have Netmon or Wireshark, and aren’t allowed to install either one? Run this command:

`netsh trace start capture=yes tracefile=c:\capture.etl`

`netsh trace stop`

To quickly open a port on the firewall, run this command, changing the name, protocol, and port to suit. This example opens syslog:

`netsh firewall set portopening udp 161 syslog enable all`

To add an entry to your routing table that will be permanent, run the route add command with the –p option. Omitting that, the entry will be lost at next reboot:

`route add 0.0.0.0 mask 0.0.0.0 172.16.250.5 –p`

Here’s a simple way to see all open network connections, refreshing every second:

`netstat –ano 1`

You can add a | findstr value to watch for only a specific connection, like a client ip.addr or port:

`netstat –ano | findstr 216.134.217.20`

You can use the shutdown to shutdown or reboot a machine, including
your own, in a simple scheduled task like this:

`shutdown –r –t 0 –m \\localhost`

