# Milestone 2 and 3 Lab

### Networking Milestones 

1. What command would you run to find the firts hop from your homes router?

2. What command would you run to lookup the ip address of the domain google.com?

3. What command would you run to find out if your Ubunut server is turned on?

4. What command would you run to perform a quick scan of your local network?

5. What command would you run to perform a deeper scan of a specific host to identify the type of host it is and the operating system it is running?

6. What command would you run to take the output of the previous scan and write it to a file.

7. What command would you run to find all the hops between your home and another domain that would allow you to capture the latency to the various hops.

8. What command would you run to determine if a website is up from the command line.

9. What are the return status codes for a website that is down?

10. What are the return status codes for a website that has a redirect and not redirected that is currently online.

# MySQL Database Labs

1. Download a copy of the sample database files if you don't already have them and scp them over to your Ubuntu instance.

## MySQL 👇🏾
[![MySQL Sample Database](mysql.png)](https://drive.google.com/file/d/1wZf38Rpgy1xnEW9k78oRuVMpOt1DudyK/view?usp=sharing)

## MongoDB 👇🏾
[![MongoDB Sample Database](mongodb.png)](https://drive.google.com/file/d/1BzyggWEWNlcaKbiqpW-Xw5oYXhZQ9Oqy/view?usp=sharing)

## PostgreSQL 👇🏾
[![PostgreSQL Sample Database](postgresql.png)](https://drive.google.com/file/d/1eE2ABGi8tHG1u0TqZDaYIa-cr50QL4Mq/view?usp=sharing) 

2. Login to your Ubuntu install and connect to your MySQL instance.

3. Create a database called test_employees

4. Import the employees.sql file into the database you just created

5. As the MySQL DBA you have been given the following tasks

6. Add a new employee to the employees table in your test database prior to adding it to your production database. What command would you use to add your name, and all the corresponding information to the employees database.

7. Two employees have requested names changes. What command would you run to update the last name of the following employees Zito Baaz and Yolla Auria, to Zito Smith and Yolla Jenkins

8. Add a new department to the dapartments table named DevOps and make the dept_no d010

9. What command would you run to display all the records in a table?

10. If you run a `create table table_name as` query and pair it with a select query it creates a new table. What command would you run to create a new table called engineers by running a select query with a where clause on the titles table to only list engineers.

11. If you run a `SELECT * FROM table_name NATURAL JOIN table_name;` it will allow you to run a query to show what two tables joined would look like.

12. What command would you run to join the salaries and titles table?

13. What command would you run to join the salaries and titles table into a new table called emp_profile?

14. Now that you have a combined table you have been tasked with updating the salaries of all the Engineers to 200000 in the emp_profile table.

15. What command would you use to update all the Engineers in the emp_profile table  to 200000? 

# Postgres Database Labs

1. What command would you run to list the databases?

2. What command would you run to connect to the usda database?

3. What command would you run to list the tables in the usda database?

4. What command would you run to list the contents of the fd_group table?

5. What command would you run to add a new food group to the fd_group table in the usda database and make the new food group Junk Food with a fdgrp_cd of 4000?

6. What command would you run to update the description of fdgroup_cd item # 1900 to Sugars?

# MongoDB Database Labs

1. What command would you run to list the databases?

2. What command would you run to connect to the SampleCollections database?

3. What command would you run to list the tables in the SampleCollections database?

4. What command would you run to list the contents of the video_movies collection?

5. What command would you run to add a new movie to the video_movise collection in the SampleCollections database and make the title Sharknado 2 Return of the Wind, and the year 2023, and the imdb tt12345678, and the type DVD?
