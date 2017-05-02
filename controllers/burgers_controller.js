var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(){
    burger.all(function(data) {
        var burger = {
            burger: data
        };
        console.log(burger);
    res.render("index", burger);
    })
});

module.exports = router;