var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.listen(process.env.PORT || 3000);

/*var express = require('express');
var app = express();
app.set("views", "./app");
app.listen(process.env.PORT || 3000);

app.get("/", function(req, res){
	res.render("index");
});*/