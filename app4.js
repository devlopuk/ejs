//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine','ejs');
app.get("/", function(req, res){

var today = new Date();
var currentDay = today.getDay();
var day = "";

// tells you if it is a weekend or Weekday

if (currentDay ===6 || currentDay ===0){
  day = "Weekend";
}
else {

  day = "Weekday";

  res.render("list",{kindOfDay:day});
}
});

app.listen(3000, function(){

});

//HTML (.ejs) output

// <% if (kindOfDay == "Weekend") { %>
// <h1 style="color:red"><%= kindOfDay %></h1>
// <% } else{ %>
// <h1 style="color:purple"><%= kindOfDay %></h1>
// <% } %>
