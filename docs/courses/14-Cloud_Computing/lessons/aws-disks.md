# Title 



### Adding a Disk to Ubuntu

1. Using the fdisk tool you can add a new disk to your Ubuntu server and partition it so that the disk space can be mounted as a new mount point or change and existing mount point to point to the new disk


fdisk -l

This will list the current partitions and configurations.

![Fdisk](1-fdisk.png)

New disk added is shown as /dev/sdb1. If we are adding physical disk it will show as /dev/sda based of the disk type. Here I used a virtual disk.

To partition a particular hard disk, for example /dev/sdb1.

`fdisk /dev/sdb1`

2. These are the most frequently used switches

`n` – Create partition
`p` – print partition table
`d` – delete a partition
`q` – exit without saving the changes
`w` – write the changes and exit


3. Since we are creating a partition we want to use the `n` option

![Fdisk](2-fdisk.png)


4. Create either primary/extended partitions. By default we can have upto 4 primary partitions.


![Fdisk](3-fdisk.png)

5. Give the partition number as desired. Recommended to go for the default value 1


![Fdisk](4-fdisk.png)

6. Give the value of the first sector. If it is a new disk, always select default value. If you are creating a second partition on the same disk, we need to add 1 to the last sector of the previous partition.

![Fdisk](5-fdisk.png)
5-fdisk.png

7. Give the value of the last sector or the partition size. Always recommended to give the size of the partition. Always prefix + to avoid value out of range error.


8. Save the changes and exit.

![Fdisk](6-fdisk.png)


9. Now format the disk with mkfs command.

`mkfs.ext4 /dev/sdb1`

![Fdisk](7-fdisk.png)


10. Once formatting has been completed, now mount the partition as shown below

mount /dev/sdb1 /data


11. Make an entry in /etc/fstab file for permanent mount at boot time

`/dev/sda1	/data	ext4	defaults     0   0`


12. You have successfully partitioned, formatted, and mounted a new disk
