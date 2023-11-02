### MySQL Commands

### Show and Use

`show tables;`

`show databases;`

`use database_name;`

`show columns from table_name;`

### Create, Update, Insert

`CREATE TABLE table_name (column1 type,column2 type,column3 type,column4 type);`

`INSERT INTO table_name (column1,column2,column3,column4) VALUES ('column1_value','column2_value','column3_value','column4_value);`

`update table_name set value=value_update where column_name=value and column_value='current_value';`

### Example Import and Dump Commands for MySQL

`mysql -u root -p databas_name < importfile.sql`

`mysqldump -u root -p databas_name > dumpfile.sql`

### MySQL Lab

1. Login to mysql  (Do you remeber the command?)

2. While in mysql run the following commands to connect to the database you create.

3. This command list all databases in MySQL

4. `show databases;`

5. This command selects the database employess so we can take a look at it.

6. `use employees;`

7. This command list all tables in the selected database

8. `show tables;`

9. Now we are going to take a look around by running the following

10. This command list all the departments in the departments table

11. `select * from departments;`

12. This command shows the columns from the salaries table)

13. `show columns from salaries;`

14. This is another bulk select query please note when using the * for any given table can be an expensive query depending on the size of the table. Try this query with the other tables and see what the results are.

15. `select * from titles;`

### Understanding MySQL 

1. What do you think this query is doing?

`select * from titles where title = 'Engineer';`

2. What do you think this query is doing?

`select * from titles where emp_no < 10025;`

3. What do you think this query is doing?

`select * from titles where emp_no > 499990;`

4. Now run a select query on the salaries table that shows all employee salaries over 80000

5. Did it work? What was the result and how many rows were returned?


6. This command creates a blank database named after what you specified as the database name

`create database database_name;`

7. Imports a sample database file

`source database_import_name.sql;` 

8. List the databases that are running in your MySql instance

`show databases;`

9. Select a specific database and use it 

`use database_name`

10. List the tables that are running in your database

`show tables;`

11. Lists the contents of a table

`select * from table_name`

12. Create a user in MySQL

`creat user 'username'@'localhost' IDENTIFIED BY 'password';`

13. This command grants all priviliges to a user to a specific database

`grant all on database_name to 'username'@'localhost';`

14. This command grants the user permission to logon after the account is created.

`grant all privileges on *.* to 'username'@'localhost' with grant option;`

### Exercises for MySQL

1. Create a database called devops.

2. Create a table called devops_student in that database.

3. The table should have the following columns student_id, first_name, last_name and email.

4. The student_id field should be set to only allow numbers up to 10 characters.

5. The first_name, last_name, and email field should be set to a type that will allow up to 255 characters for each field.

6. Use a insert command to add the names of each of the students from the following spreadsheet.

7. Use this command to set the variable in MySQL to allow local file import via CSV

SET GLOBAL local_infile=1;

8. Run the following command to import a CSV file. Please note you must specify the path to the CSV file or have it in the directory you were in when you connected to MySQL.

LOAD DATA LOCAL INFILE 'csv_file_name' INTO TABLE table_name FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS;

## Student List 👇🏾
[![DevOps Student List](google-sheets.png)](https://docs.google.com/spreadsheets/d/1PaWf3vQISZ-j8ULh1S5hukQxL1x9xBS_VzhU8IyfXR8/edit#gid=0)

Please use the previous lessons a reference to create the database, tables, and data inside the tables.

9. For extra credit how would someone set the primary key for this table to the student_id field.
