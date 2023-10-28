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


Install & Verify

Install instructions

`sudo apt install postgresql`

`sudo apt install mysql-server`

`sudo apt install mongodb-server`

Verify the installs by running the following commands

`mongo`

If installed correctly you should be taken to a 

`> prompt`

To verify if mysql-server is installed correctly you should run the following command

`sudo mysql -u root`

If it is installed correctly you should be take to a 

`mysql> prompt`

To verify if postgres is installed correctly run the following command 

`psql` and you will be taken to a

`admin=#` or `postgres=# prompt`


### Sample databases

In order to understand how to use these database you will need to import a few sample databases into MySQL and MongoDB

Download the following files

## MySQL 👇🏾
[![MySQL Sample Database](mysql.png)](https://tekperfect-devops-uploads.s3-us-west-1.amazonaws.com/test_db-master.zip)

## MongoDB 👇🏾
[![MongoDB Sample Database](mongodb.png)](https://tekperfect-devops-uploads.s3-us-west-1.amazonaws.com/reviews.csv)

## PostgreSQL 👇🏾
[![PostgreSQL Sample Database](postgresql.png)](https://tekperfect-devops-uploads.s3-us-west-1.amazonaws.com/dvdrental.tar)

Download each file and scp the files to your linux server

Here is an example of how to use scp

`scp -i linux-sandbox.pem /path-to-file ubuntu@xx.xx.xxx.xx:/tmp`

Once you have successfully copied the files to your linux server we can begin importing them into their appropriate databases.

### Importing Mongo database

To import the sample MongoDB files you need to extract zip files and run the following commands

`mongoimport --db database_name --type CSV --headerline --file filename.csv`

Please remember to replace database_name with what you want the database to be named when creating it or use the name of the csv file as your database name for simplicity purposes


### Importing MySQL database

To import the MySQL sample you need to extract the zip file and cd into the folder you extracted the files into and then login to mysql and create a database called employees. Then import the employees database using the following commands

### Select Queries

`select * from titles where title = 'Engineer';`

`select * from titles where emp_no < 10025;`

`select * from titles where emp_no > 499990;`

`select * from titles;`

### Show and Use

`show tables;`

`show databases;`

`use database_name;`

`show columns from salaries;`

### Create, Update, Insert

`CREATE TABLE table_name (column1 type,column2 type,column3 type,column4 type);`

`INSERT INTO table_name (column1,column2,column3,column4) VALUES ('column1_value','column2_value','column3_value','column4_value);`

`update table_name set value=value_update where column_name=value and column_value='current_value';`

`create database employees;`

`source employees.sql;`

`mysql -u root -p databas_name < importfile.sql`

`mysqldump -u root -p databas_name > dumpfile.sql`

### Importing Postgres database

To import the sample database download the file to a folder on your linux box and run the following command. Please make sure the dvdrental.tar file is in the directory you are in before you run the command

`create database dvdrental;`

`pg_restore -d dvdrental dvdrental.tar`


#MongoDB

`wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc |  gpg --dearmor | sudo tee /usr/share/keyrings/mongodb.gpg > /dev/null`

`echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list`

`sudo apt update`

`sudo apt install mongodb-org`

`sudo service mongod start`

`cat /var/log/mongodb/mongod.log | grep 27017`

`sudo service mongod stop`

`sudo service mongod start`

`sudo service mongod restart`

`cat *.json | mongoimport --collection='mycollectionname'` (imort json files)

`mongoimport --db test --collection employeesdata --type csv --file employees.csv --fields _id,firstName,lastName`

`mongoimport --db test --collection employees --file employeesdata.json --jsonArray`

`mongoimport --db database_name --collection collection_name --authenticationDatabase admin --username <user> --password <password> --file file_path`

#PostGres SQL

`sudo apt install postgresql`

`sudo -u postgres psql template1`

`ALTER USER postgres with encrypted password 'your_password';`

`sudo systemctl restart postgresql.service`

`psql --host server-name-or-ip --username postgres --password --dbname template1`

`quit` (To exit Postgres)

`psql databasename < data_base_dump`

#MySQL

`sudo apt instsall mysql-server`

`sudo mysql -u root -p`

`quit` (To exit mysql)

`mysql -u username -p database_name < file.sql` (import database)
