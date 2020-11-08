
MongoDB Commands

This command to lists the databases

`show databases`

This command to lists the collections

`show collections`

This command connects you to a specific database

`use database-name`

This command to list all the documents in a collection

`db.database-name.find()`

This command allows you to find all the documents that fit a specific search criteria

`db.database-name.find({field:value})`

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

