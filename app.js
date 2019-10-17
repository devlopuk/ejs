//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items = [];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
// css style sheet
app.use(express.static(__dirname + '/style'));

app.get("/", function(req, res){

var today = new Date();
var currentDay = today.getDay();


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
res.render("list",{today:day,newlistItem:items});

});

// requests item from page
app.post("/", function (req,res){
item = req.body.newItem;
items.push(item);
res.redirect("/");

});

app.listen(3000, function(){

});

//html (ejs) output

// <h1><%= today %></h1>
// <ul>
//  <li>Buy Food</li>
//  <li>Cook Food</li>
//  <li>Eat Food</li>
//  <li><%= newlistItem %></li>
// </ul>
// <form class="" action"/" method="post">
//  <input type="text" name="newItem">
//  <button type="submit" name="button">Add</button>
