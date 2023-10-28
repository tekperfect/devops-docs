## Databases


### What is a Database

A structured set of data held in a computer, especially one that is accessible in various ways.

For example think about all the tweets you have in your account and when you scroll through a list of tweets from your favorite celebrity. Those tweets are stored in a database and your browsing of those tweets is a query to a structured data set that is retrieved and returned in that application.


### Why are Databases Important?

They allow us to store, retrieve, and organize large amounts of data in a meaningful way. They also allow us to store and retrieve funny and mean gems like this one.


### Who uses databases? Everyone

Common Use Cases

Your social media account

Your bank account

Your phones contact list

### Common Databases

### MySQL

MySQL is an open-source relational database management system. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter, and "SQL", the abbreviation for Structured Query Language.

### MongoDB 

MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.

### Postgres

Postgres, is a free open-source relational database system. It is designed to handle a range of workloads, from single machines to data warehouses or Web services with many concurrent users.


# Install & Verify (Login to your Ubuntu server)

# Install MongoDB and Verify

1. Run the following commands to add the mongodb repo to your Ubuntu server.

`wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc |  gpg --dearmor | sudo tee /usr/share/keyrings/mongodb.gpg > /dev/null`

`echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list`

2. Run the Ubuntu update command so the repo changes are in place.

`sudo apt update`

3. Install MongoDB via the apt command.

`sudo apt install mongodb-org`

4. Start the MongoDB service.

`sudo service mongod start`

5. Verify the service is started by greping the log file.

`cat /var/log/mongodb/mongod.log | grep 27017`

6. Stop the MongoDB service

`sudo service mongod stop`

7. Start the MongoDB service.

`sudo service mongod start`

# Install Postgres

1. Run the following command

`sudo apt install postgresql`

# Install MySQL

`sudo apt install mysql-server`

# Login to each database type

1. Type the following command to login to MongoDB

`mongosh`

If installed correctly you should be taken to a prompt that looks like this

`test>`

2. Type `quit` to exit MongoDB.

3. To verify that mysql-server is installed correctly you should run the following command

`sudo mysql -u root`

4. If it is installed correctly you should be taken to a 

`mysql> prompt`

5. Type `quit` to exit MySQL.

6. To verify if postgres is installed correctly run the following command 

`sudo -u postgres psql`

7. If it is installed correctly you should be taken to a 

`admin=#` or `postgres=# prompt`

8. Type `quit` to exit Postgres.

### Downloading and Importing Sample databases

In order to understand how to use these database you will need to import a few sample databases into MySQL, MongoDB, and Postgres

Download the following files

## MySQL 👇🏾
[![MySQL Sample Database](mysql.png)](https://drive.google.com/file/d/1wZf38Rpgy1xnEW9k78oRuVMpOt1DudyK/view?usp=sharing)

## MongoDB 👇🏾
[![MongoDB Sample Database](mongodb.png)](https://drive.google.com/file/d/1BzyggWEWNlcaKbiqpW-Xw5oYXhZQ9Oqy/view?usp=sharing)

## PostgreSQL 👇🏾
[![PostgreSQL Sample Database](postgresql.png)](https://drive.google.com/file/d/1eE2ABGi8tHG1u0TqZDaYIa-cr50QL4Mq/view?usp=sharing)

Download each file and scp the files to your Ubuntu server. However, before you attempt to scp each file I want you to prep your Ubuntu server for the files so they are organized.

1. Login to your Ubuntu server

2. Verify that you are in your home directory. (What command do you use to verify what directory you are in).

3. Create a directory call `mysql`

4. Create a directory call `mongodb`

5. Create a directory call `postgres`

6. Change the ownership of the each folder so that your user can write to those folders using the chown command.

7. Logout of Ubuntu to return to your Mac terminal and scp each sample database to the corresponding folders you just created on your Ubuntu server.

8. If you used the chown command correctly you should be able to scp files directly into each folder.

9. If you get stuck you can always scp the files to the /tmp folder on your Ubuntu server and them move them to the corresponding folders after you login to your Ubuntu instance.

10. Please do your best and note what commands you had difficulty with if any.

11. Here is a an example scp command of copying a file to the /tmp folder

`scp filename username@xxx.xxx.xxx.xxx:/tmp`

12. Once you have successfully copied the files to your linux server we can begin the process of unziping the files and importing them into their appropriate databases.

### Importing Mongo database

1. To import the sample MongoDB files you need to cd into the mongodb folder in your home directory and unzip the file `mongodb-samples.zip`

2. Now cd into the `mongodb-samples` folder 

3. Now cd to the `SampleCollection` folder

4. Now run the `mongorestore` command

5. You should see the database loading and at the end of the restore you should see the following message.

`1119998 document(s) restored successfully. 0 document(s) failed to restore.`

### Importing MySQL database

1. To import the mysql-samples database you need to extract the zip file located in your home directories mysql folder.

2. Once the mysql-samples.zip file is extracted cd into the folder called mysql-samples.

3. Now login to mysql with the following command.

`sudo mysql -u root`

4. Create an empty database called employees using the following command.

`create database employees;`

5. Now type quit to exit MySQL

`quit`

5. Then import the employees database using the following commands.

`sudo mysql -u root -p employees < employees.sql`

6. If your data import was successful you should see something similar to this below.

```
CREATING DATABASE STRUCTURE
INFO
storage engine: InnoDB
INFO
LOADING departments
INFO
LOADING employees
INFO
LOADING dept_emp
INFO
LOADING dept_manager
INFO
LOADING titles
INFO
LOADING salaries
data_load_time_diff
00:00:32
```

### Importing Postgres Database

1. To import the sample Postgres databse you need to cd to the folder where you downloaded the postgres-samples.zip. It should be in your home directory located in the postgres folder.

2. After you cd into the postgres folder in your home directory run the unzip command.

`unzip postgres-samples.zip`

3. Now use the cd commnand to cd into the postgres-samples folder

4. The folder should have a file in it called demo-big-en-20170815.sql

5. Run the following command to login to postgres

`sudo -u postgres psql`

6. Create a database called bigdata by running the following command

`create database bigdata;`

7. Type quit to exit postgress

8. Now run the following command to import the database dump

`sudo -u postgres psql bigdata < demo-big-en-20170815.sql`

9. If your data import was successful you should see something similar to this below.

```
COMMENT
COMMENT
ALTER TABLE
COPY 9
COPY 104
COPY 7925812
COPY 2111110
COPY 214867
COPY 1339
COPY 8391852
COPY 2949857
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER TABLE
ALTER DATABASE
ALTER DATABASE
```
### Congrats

You have successfully installed, configured, and imported databases for 3 different database types.

### Working With Database using Queries

1. Login to mysql  (Do you remeber the command?)

2. While in mysql run the following commands to connect to the database you create.

`show databases` (This command list all databases in MySQL)

`use employees;` (This command selecats the database employess so we can take a look at it.)

`show tables;` (This command list all tables in the selected database)

3. Now we are going to take a look around by running the following

4. This command list all the departments in the departments table

`select * from departments;`

5. This command shows the columns from the salaries table)

`show columns from salaries;`

6. This is another bulk select query please note when using the * for any given table can be an expensive query depending on the size of the table. Try this query with the other tables and see what the results are.

`select * from titles;`

# Targeted Queries

1. What do you think this query is doing?

`select * from titles where title = 'Engineer';`

2. What do you think this query is doing?

`select * from titles where emp_no < 10025;`

3. What do you think this query is doing?

`select * from titles where emp_no > 499990;`

4. Now run a select query on the salaries table that shows all employee salaries over 80000

5. Did it work? What was the result and how many rows were returned?

### Show and Use

`show tables;`

`show databases;`

`use database_name;`

`show columns from salaries;`

### Create, Update, Insert

`CREATE TABLE table_name (column1 type,column2 type,column3 type,column4 type);`

`INSERT INTO table_name (column1,column2,column3,column4) VALUES ('column1_value','column2_value','column3_value','column4_value);`

`update table_name set value=value_update where column_name=value and column_value='current_value';`

# Example Import and Dump Commands for MySQL

`mysql -u root -p databas_name < importfile.sql`

`mysqldump -u root -p databas_name > dumpfile.sql`

