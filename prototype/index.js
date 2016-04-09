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

app.get('/about/stats', function (req, res) {
  res.render('pages/about/stats', {data: data})
})

app.get('/about/bbbee', function (req, res) {
  res.render('pages/about/bbbee', {data: data})
})

app.get('/about/vacancies', function (req, res) {
  res.render('pages/about/vacancies', {data: data})
})

app.get('/contact/general', function (req, res) {
  res.render('pages/contact/general', {data: data})
})

app.get('/contact/general-full', function (req, res) {
  res.render('pages/contact/general-full', {data: data})
})

app.get('/contact/bases', function (req, res) {
  res.render('pages/contact/bases', {data: data})
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

app.get('/faq', function (req, res) {
  res.render('pages/faq', {data: data})
})

app.get('/waterwise', function (req, res) {
  res.render('pages/waterwise', {data: data})
})

app.get('/safetrx', function (req, res) {
  res.render('pages/safetrx', {data: data})
})

app.get('/events', function (req, res) {
  res.render('pages/events', {data: data})
})

app.get('/win', function (req, res) {
  res.render('pages/win', {data: data})
})

app.get('/single-win', function (req, res) {
  res.render('pages/single-win', {data: data})
})

app.get('/winners', function (req, res) {
  res.render('pages/winners', {data: data})
})

app.get('/involved', function (req, res) {
  res.render('pages/involved', {data: data})
})

app.get('/donate', function (req, res) {
  res.render('pages/donate', {data: data})
})

app.get('/membership', function (req, res) {
  res.render('pages/membership', {data: data})
})

app.get('/volunteer', function (req, res) {
  res.render('pages/volunteer', {data: data})
})

var server = app.listen(3000, function () {
  console.log('Server running at http://localhost:' + server.address().port)
})