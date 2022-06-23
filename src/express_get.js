var express = require('express');
var fs = require('fs');
var app = express();

app.get('/main', function(req, res){
  fs.readFile('main.html', function (error, data){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end(data);
  });
});




//html

<div>
  <input type="button" value="page move" onclick="movepage()"/>
</div>
<script type="text/javascript">
  function movepage(){
    location.href = "/main";
}
</script>
