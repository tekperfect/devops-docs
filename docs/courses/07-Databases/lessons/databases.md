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

Login to your linx instance and install mysql-server and mongodb-sever, and postgres.

Verify the install by running the following command

`mongo`

If installed correctly you should be taken to a 

`> prompt`

To verify if mysql-server is installed correctly you should run the following command

`sudo mysql -u root`

If it is installed correctly you should be take to a 

`mysql> prompt`

To verify if postgres is installed correctly run the following command psql or psql postgres and you will be taken to a

`admin=#` or `postgres=# prompt`


### Sample databases

In order to understand how to use these database you will need to import a few sample databases into MySQL and MongoDB

Download the following files

## MySQL 👇🏾
[![MySQL Sample Database](mysql.png)](https://drive.google.com/file/d/16keAvdBguWIO3TqdQJkVhiGp4FtzNNI5/view?usp=sharing)

## MongoDB 👇🏾
[![MongoDB Sample Database](mongodb.png)](https://drive.google.com/file/d/1zAgApUPM-KHncYJWZjC1X_uCpZtBeL2z/view?usp=sharing)

## PostgreSQL 👇🏾
[![PostgreSQL Sample Database](postgresql.png)](https://drive.google.com/file/d/12ChUoNQdlV9it_Nd7z4VbwRbtUTEoMgK/view?usp=sharing)

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

`create database employees;`

`source employees.sql;`


### Importing Postgres database

To import the sample database download the file to a folder on your linux box and run the following command. Please make sure the dvdrental.tar file is in the directory you are in before you run the command

`create database dvdrental;`

`pg_restore -d dvdrental dvdrental.tar`

