const express = require('express');
const app = express();

app.get("/",(req,res)=>{
  res.send("hi");
});

app.listen(3000, (err)=>{
  if (err) return console.log(err);
  console.log("port 3000");
});

//node express_server.js
