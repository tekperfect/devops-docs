# Cron

## Definition

The software utility cron also known as cron job is a time-based job scheduler in Unix-like computer operating systems. Users that set up and maintain software environments use cron to schedule jobs (commands or shell scripts) to run periodically at fixed times, dates, or intervals.

## Cron Syntax

### Every hour
0 * * * *	 /bin/bash/ipscan.sh

### Every 15 mins
*/15 * * * *	 /bin/bash/ipscan.sh

### Every 2 hours 
0 */2 * * *	 /bin/bash/ipscan.sh

### Every Sunday midnight 
0 0 * * 0	 /bin/bash/ipscan.sh

### Every reboot
@reboot	 /bin/bash/ipscan.sh

### Every 10 Minutes of Every Day
*/10 * * * * /bin/bash/ipscan.sh

### Every day at midnight
0 0 * * * /home/user/script.sh

### Three times a day
0 */8 * * * /home/user/script.sh

### Weekdays at 6AM
0 06 * * 1-5 /home/user/script.sh

### Once a month on the 20th at 6AM
0 06 20 * * /home/user/script.sh

### Every 4 days 6AM
0 06 */4 * * /home/user/script.sh

## Special String Meaning

### Run once every year, “0 0 1 1 *”
@yearly

### Run once every year, “0 0 1 1 *”
@annually	(same as @yearly)

### Run once every month, “0 0 1 * *”
@monthly

### Run once every week, “0 0 * * 0”
@weekly	

### Run once each day, “0 0 * * *”
@daily

### Run once (same as @daily)
@midnight

### Run once an hour, “0 * * * *”
@hourly	

### This is an excellent cron reference https://crontab.guru/examples.html
