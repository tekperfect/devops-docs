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

4. `show databases`

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

`create database_name;`

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

`CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';`

13. This command grants all priviliges to a user to a specific database

`GRANT ALL ON database_name TO 'username'@'localhost';';`
