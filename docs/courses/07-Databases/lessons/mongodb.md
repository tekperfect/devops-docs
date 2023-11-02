### Install MongoDB

1. This command installs gnupg

`sudo apt-get install gnupg curl`

2. This command runs a curl command and add the repo to your Ubuntu server

`curl -fsSL https://pgp.mongodb.com/server-7.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor`

3. This command add the necessary repos to the latest version of Ubuntu

`echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list`

4. This updates the repositories with the changes your just made
`sudo apt-get update`

5. This command install MongoDB without prompting you
`sudo apt-get install -y mongodb-org`


### Verify Installation`

1. This command starts the MongoDB service

`sudo systemctl start mongod`

2. This command checks the status of the MongoDB service
`sudo systemctl status mongod`

3. This command enables the server to run on startup after the system is rebooted

`sudo systemctl enable mongod`

4. This command stops the MongoDB service
`sudo systemctl stop mongod`

5. This command restarts the MongoDB service
`sudo systemctl restart mongod`


### Login To MongoDB

1. This command allows you to login to MongoDB

`mongosh`

### MongoDB Commands

This command to lists the databases

`show databases`

This command to lists the collections

`show collections`

This command connects you to a specific database

`use database-name`

This command to list all the documents in a collection

`db.database-name.find()`

This command allows you to find all the documents that fit a specific search criteria please note that the value field may require single quotes if it is not numeric.

`db.database-name.find({field:value})`
`db.database-name.find({field:'value'})`

This command allows you to find the first document that matches the search criteria.

`db.database-name.findOne({field:value})`

### MongoDB Commands Continued

This command allows you to add a document to an existing collection

`db.database-name.insert({field1 : value1, field2 : value2, field3 : value3 })`

This command removes a document(s) based upon the field and value

`db.database-name.remove({field:value})`

This command allows you to find a document based on a greater than value

`db.reviews.find({field:{$gt:value}})`

This command allows you to find a document based on a less than value

`db.reviews.find({field:{$lt:value}})`

This command updates a value in a field from the original value to a new one

`db.database-name.update({field : value},{$set : {field : new_value}})`

This command tells you the size of the index

`db.database-name.totalIndexSize()`

This command displays statistics about your collection

`db.database-name.stats()`

