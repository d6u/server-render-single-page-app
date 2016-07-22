'use strict';

const join = require('path').join;
const express = require('express');
const Data = require('./Data');

const app = express();

app.use(express.static(join(__dirname, '../public')));

app.get('/', function (req, res) {
  res.send(`
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Server Rendering</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <div id="app"></div>
      <script src="/index.js"></script>
    </body>
    </html>
  `);
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
