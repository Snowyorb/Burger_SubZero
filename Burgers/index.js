var express = require('express');
var pug = require('pug');
var path = require('path');
var config = require("./config.json");

var app = express();

app.set('view engine', 'pug');
app.set('views',__dirname+'/views');
app.use(express.static(path.join(__dirname+"/public")));

app.get('/', function(req, res){
    res.render('index', {"title":"Home", "config":config});
});

app.get('/:name', function(req,res){
    res.render("pages", {"title":req.params.name, "config":config});
});

app.get('/Burgers', function(req,res){
    res.render("pages", {"title":req.params.name="Burgers", "Img":Image(src="/public/Images/b.png")});
});

app.use(express.static(path.join(__dirname, "/public/Images"))); 

app.listen(3000);