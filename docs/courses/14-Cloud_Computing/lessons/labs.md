# RDS Lab

Create an RDS database (Use the smallest one you can use) t2.micro

Download MySQL Workbench https://www.mysql.com/downloads/ or DBeaver https://dbeaver.io/

Use the tool to connect to RDS and create a blank database you are going to use for wordpress. I encourage you to name it something unique like wordpress-yournane.

Install Docker if you have not already done so from Docker Hub https://hub.docker.com/ you may need to create an account on Docker Hub by using the Sign Up button

Run the Docker WordPress container

`docker run --name local-wordpress -p 8080:80 -d wordpress`

Connect WordPress to the MySQL database in AWS

Make sure you record the endpoint name, username, password, and database you created when connecting wordpress.

Create a sample Wordpress page using the tool and demo what changes you make to it with the class.

What issues did you run into?

Did you ask questions?

How might have you solved these issues if you were not in class and at a client site?
