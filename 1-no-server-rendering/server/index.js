'use strict';

const join = require('path').join;
const readFile = require('fs').readFile;
const express = require('express');
const ejs = require('ejs');
const Data = require('./Data');

const app = express();

app.use(express.static(join(__dirname, '../public')));

app.get('/', function (req, res) {
  readFile(join(__dirname, 'index.ejs'), 'utf8', function (err, template) {
    res.send(ejs.render(template));
  });
});

app.get('/repos.json', function (req, res) {
  Data.findRepos(100).then(function (repos) {
    res.send(repos);
  });
});

app.get('/tags.json', function (req, res) {
  Data.findTags().then(function (tags) {
    res.send(tags);
  });
});

app.listen(process.env.PORT, function () {
  console.log(`--> listening on port ${process.env.PORT}`);
});
