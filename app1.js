//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.get("/", function(req, res){

var today = new Date();
var day = today.getDay();

//logic
// days 0 is Sunday and 6 to Saturday (0-6)

if (day ===6 || day ===0){
  res.sendFile(__dirname+"/weekend.html");
}
else {
// location of html file if it is a weekday
  res.sendFile(__dirname+"/weekday.html");
}
});

app.listen(3000, function(){

});
