var reqExpress = require('express');
var loginCookieParser = require('cookie-parser');
var pug_exp = reqExpress();
var bodyParser = require('body-parser')
pug_exp.use(bodyParser.urlencoded({extended: true}));
pug_exp.use(bodyParser.json());

pug_exp.set('view engine', 'pug');
pug_exp.use(reqExpress.static('extras'));
pug_exp.use(loginCookieParser());

pug_exp.get('/', function(req, res){
  res.render('loginDet')
});

pug_exp.post('/saveCookies', function(req, res){
  console.log("Body");
  console.log(req.body);
  res.cookie('loginCookie', req.body);
  res.render('display_Cookie');
});

pug_exp.post('/displayDetails', function (req,res) {
  res.render('display_Details',{loginCookie: req.cookies.loginCookie});
});

var port = process.env.PORT || 8080;
pug_exp.listen(port, function(){
  console.log("Listening to port 3000")
});
