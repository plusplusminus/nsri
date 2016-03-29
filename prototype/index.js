var express = require('express')
var app = express()
var path = require('path');
var rootPath = path.normalize(__dirname);

var fs = require('fs')
var _ = require('lodash')
var engines = require('consolidate')
var data = {};

app.engine('jade', engines.jade)

app.set('views', rootPath+'/views')
app.set('view engine', 'jade')
console.log(rootPath);
app.use('/layouts', express.static(rootPath+'/layouts'))
app.use('/assets', express.static(rootPath+'/assets'))
app.use('/bower', express.static(rootPath+'/bower_components'))

app.get('/', function (req, res) {
  res.render('index', {data: data})
})

app.get('/about/values', function (req, res) {
  res.render('pages/about/values', {data: data})
})

app.get('/about/history', function (req, res) {
  res.render('pages/about/history', {data: data})
})

app.get('/about/staff', function (req, res) {
  res.render('pages/about/staff', {data: data})
})

app.get('/about/volunteers', function (req, res) {
  res.render('pages/about/volunteers', {data: data})
})

app.get('/about/donors', function (req, res) {
  res.render('pages/about/donors', {data: data})
})

app.get('/about/board', function (req, res) {
  res.render('pages/about/board', {data: data})
})

app.get('/blog', function (req, res) {
  res.render('posts/index', {data: data})
})

app.get('/blog/category', function (req, res) {
  res.render('posts/category', {data: data})
})

app.get('/posts/single', function (req, res) {
  res.render('posts/single', {data: data})
})

app.get('/pages/faq', function (req, res) {
  res.render('pages/faq', {data: data})
})

app.get('/pages/waterwise', function (req, res) {
  res.render('pages/waterwise', {data: data})
})

app.get('/pages/safetrx', function (req, res) {
  res.render('pages/safetrx', {data: data})
})

app.get('/pages/events', function (req, res) {
  res.render('pages/events', {data: data})
})

app.get('/pages/win', function (req, res) {
  res.render('pages/win', {data: data})
})

app.get('/pages/involved', function (req, res) {
  res.render('pages/involved', {data: data})
})

app.get('/bases/regions', function (req, res) {
  res.render('bases/regions', {data: data})
})

var server = app.listen(3000, function () {
  console.log('Server running at http://localhost:' + server.address().port)
})