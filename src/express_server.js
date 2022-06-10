const express = require('express');
const app = express();

app.get("/1",(req,res)=>{
  res.send("req1");
});

app.get("/2",(req,res)=>{
  res.send("req2");
});

app.listen(3000, (err)=>{
  if (err) return console.log(err);
  console.log("port 3000");
});

//node express_server.js
