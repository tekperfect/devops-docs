###  What is S3

1. Amazon Relational Database Service (Amazon RDS) is a web service that makes it easier to set up, operate, and scale a relational database in the AWS Cloud. It provides cost-efficient, resizable capacity for an industry-standard relational database and manages common database administration tasks.

2. Sign in to the AWS Management Console and open the Amazon RDS console from the services meun or type in RDS via the search box.

![RDS](0-rds-db.png)

3. In the upper-right corner of the Amazon RDS console, choose the AWS Region in which you want to create the DB instance.

4. In the navigation pane, choose Databases.

5. Choose Create database, then choose Standard create.

6. For Engine type, choose MariaDB, Microsoft SQL Server, MySQL, Oracle, or PostgreSQL.

![RDS](1-rds-db.png)

7. For Database management type, if you're using Oracle or SQL Server choose Amazon RDS or Amazon RDS Custom.

8. Amazon RDS is shown here. For more information on RDS Custom, see Working with Amazon RDS Custom.

9. For Edition, if you're using Oracle or SQL Server choose the DB engine edition that you want to use.

10. MySQL has only one option for the edition, and MariaDB and PostgreSQL have none.

11. For Version, choose the engine version.

12. In Templates, choose the template that matches your use case. If you choose Production, the following are preselected in a later step:

13. Multi-AZ failover option (We don't need this now and it costs money)

14. Provisioned IOPS SSD (io1) storage option

15. Do not Enable deletion protection option because we are going to destroy this database shortly after creating it.

16. To enter your master password, do the following:

17. In the Settings section, open Credential Settings.

18. If you want to specify a password, clear the Auto generate a password check box if it is selected.

19. (Optional) Change the Master username value.

20. Enter the same password in Master password and Confirm password.

21. (Optional) Set up a connection to a compute resource for this DB instance.

22. You can configure connectivity between an Amazon EC2 instance and the new DB instance during DB instance creation. For more information, see Configure automatic network connectivity with an EC2 instance.

23. In the Connectivity section under VPC security group (firewall), if you select Create new, a VPC security group is created with an inbound rule that allows your local computer's IP address to access the database.

24. For the remaining sections, specify your DB instance settings. For information about each setting, see Settings for DB instances.

25. Choose Create database.

26. If you chose to use an automatically generated password, the View credential details button appears on the Databases page.

27. To view the master username and password for the DB instance, choose View credential details.

28. To connect to the DB instance as the master user, use the username and password that appear.

29. For Databases, choose the name of the new DB instance.

30. On the RDS console, the details for the new DB instance appear. The DB instance has a status of Creating until the DB instance is created and ready for use. When the state changes to Available, you can connect to the DB instance. Depending on the DB instance class and storage allocated, it can take several minutes for the new instance to be available.

![RDS](2-rds-db.png)
