var connection = require('./connection');

//create orm object 
var orm = {
//create queryies for each need in application:
selectAll: function(tableName) {
    //create query string - build using variable 
    var queryString ="SELECT * FROM burgers";
    //connect to database using exported connection
    connection.query(queryString, tableName, function(err, result) {
        if (err) throw err
        console.log("here is the select all statement");
        console.log("--------------------------------");
        console.log(result);
        });
    },
updateOne: function(tableName, columnName) {
    //create query string - build using variable 
    var queryString ="UPDATE ?? SET devoured = true WHERE id = 2";
    //connect to database using exported connection
    connection.query(queryString, [tableName, columnName], function(err, result) {
        if (err) throw err
        console.log("here is the set devoured statement hardcoded to id 2");
        console.log("--------------------------------");
        console.log(result);
        });
    },
insertOne: function(tableName, columnName1, columnName2, value1, value2) {
    //create query string - build using variable
    var queryString ="INSERT INTO ?? (?, ?) VALUES (?, ?);; ";
    //connect to database using exported connection
    connection.query(queryString, [tableName, columnName1, columnName2, value1, value2], function(err, result) {
        if (err) throw err
        console.log(result);
        });
    }
   
}
module.exports = orm;