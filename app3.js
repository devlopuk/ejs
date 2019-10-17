//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine','ejs');
app.get("/", function(req, res){

var today = new Date();

// shows what type each variable is
var options = {
weekday:"long",
day:"numeric",
month:"long",
year:'numeric'

};
// grabs the time from GMT (UK)
var day = today.toLocaleDateString("en-GB",options);

// displays the day, date, month and year in full
res.render("list",{today:day});

// output on HTML: <h1>Today is <%= today %></h1>

});

app.listen(3000, function(){

});
