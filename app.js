var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var Book = require('./Book')

var db = 'mongodb://localhost:27017/example'
mongoose.connect(db)

var port = 8080

app.listen(port, function () {
  console.log('app listening to port ' + port)
})
