var express = require('express')
var app = express()

var fs = require('fs')
var _ = require('lodash')
var engines = require('consolidate')
var data = {};

app.engine('jade', engines.jade)

app.set('views', './views')
app.set('view engine', 'jade')

app.use('/assets', express.static('assets'))

app.get('/', function (req, res) {
  res.render('index', {data: data})
})

var server = app.listen(3000, function () {
  console.log('Server running at http://localhost:' + server.address().port)
})