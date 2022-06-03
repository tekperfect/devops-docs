## Splunk Search Criteria

### (Search across all indexes)
- `index=_*` 

###  (Search by time 1 hour)
- `index="index_name" earliest="11/17/2018:07:55:00" latest="11/17/2018:08:00:00"`

### (Search by time 1 day)
- `index="index_name" earliest="11/17/2018:00:00:00" latest="11/17/2018:23:59:59"`

### (Search by time 1 week)
- `index="index_name" earliest="11/07/2018:00:00:00" latest="11/17/2018:23:59:59"`

### (By index & host)
- `index="index_name" host="host_name"`

### (By index & by host & by user)
- `index="index_name" host="host_name" anonymous`

### (By index & by host & by authentication value)
- `index="index_name" host="host_name" success`

### (Remove duplicates from a particular value)
- `index=index_name | dedup field_name`

### (Remove duplicates from a particular value and only display results ending in .com)
- `index=index_name | dedup field_name | search *.com` 

### (Search index and count number of occurrences in field)
- `index=index_name | stats count by field_name`

### (Search index and count number of occurrences in field and display smallest to largest)
- `index=index_name | stats count by field_name | sort count` 

### (Search index and count number of occurrences in field and display largest to smallest)
- `index=index_name | stats count by field_name | sort - count`

### (Search index and count number of occurrences in field and display top 10 largest to smallest)
- `index=index_name | stats count by field_name | sort - count | head 10`

### (Search index by time value and filter, then count number of occurrences in field and display top 10 largest to smallest)
- `index=dns earliest="11/1/2018:07:55:00" latest="11/12/2018:08:00:00" | stats count by domain_name | sort - count | head 10` 

### (Search index by time value and filter, then count number of occurrences in field and display top 10 largest to smallest using tail instead of head)
- `index=dns earliest="11/1/2018:07:55:00" latest="11/12/2018:08:00:00" | stats count by domain_name | sort count | tail 10` 

### (Search index then count number of occurrences in field1 & field2 and display top 10 largest to smallest)
- `index=index_name | stats count by filed1_name, field2_name | sort - count | head 10` 
