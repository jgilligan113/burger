var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insert: function(tableName, columnName1, columnName2, value1, value2, cb) {
        orm.insertOne("burgers", columnName1, columnName2, value1, "false", function() {
            cb(res);
        });
    },
    update: function(tableName, columnName, cb) {
        orm.updateOne("burgers", columnName, function(res){
            cb(res);
        });
    }
};

//export the functions for the controller
module.exports = burger;