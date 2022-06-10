const express = require('express');
const app = express();

app.get("/1",function(req,res){
  res.send("req1");
});

app.get("/2",function(req,res){
  res.sendFile(__dirname + '/index.html');
});


app.listen(3000, function(){
  console.log('3000');
});

//node express_server.js
//localhost:3000
