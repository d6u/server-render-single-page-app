'use strict';

const join = require('path').join;
const express = require('express');
const render = require('./render');
const Data = require('./Data');

const app = express();

app.use(express.static(join(__dirname, '../public')));

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

app.get('/user.json', function (req, res) {
  Data.findUser().then(function (user) {
    res.send(user);
  });
});

app.get('*', render);

app.use(function (err, req, res, next) {
  console.log(err);
});

app.listen(process.env.PORT, function () {
  console.log(`--> listening on port ${process.env.PORT}`);
});
