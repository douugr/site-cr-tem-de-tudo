var express = require('express');
var app = express();

var path = __dirname;
  
app.use('/css', express.static(__dirname + '/css'));
app.use('/views', express.static(__dirname + '/views'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/vendor', express.static(__dirname + '/vendor'));
app.use('/img', express.static(__dirname + '/img'));
  
app.get('/index',function(req, res){
  res.sendFile(path + '/views/index.html');
});
  
app.get('/catalogo',function(req, res){
  res.sendFile(path + '/views/catalogo.html');
});

app.get('/form',function(req, res){
  res.sendFile(path + '/views/form.html');
});
  
app.use('*',function(req, res){
  res.send('Error 404: Not Found!');
});
  
app.listen(3000,function(){
  console.log("Server running at Port 3000");
});