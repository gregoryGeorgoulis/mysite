var express = require('express');
var app = express();
var morgan = require('morgan');
var port = process.env.PORT || 3000;

//middleware 
app.use(express.static('public'));
app.use(morgan('dev'));

//listener
app.listen(port);
console.log('=================================>');
console.log('Server running off PORT: ' + port);
console.log('=================================>');