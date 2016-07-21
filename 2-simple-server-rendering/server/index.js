import App from '../client/components/App';

const join = require('path').join;
const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Data = require('./Data');

const app = express();

app.use(express.static(join(__dirname, '../public')));

app.get('/', function (req, res) {
  Promise
    .all([Data.findRepos(20), Data.findTags()])
    .then(([repos, tags]) => {

      res.send(`
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Server Rendering</title>
          <link rel="stylesheet" href="/style.css">
        </head>
        <body>
          <div id="app">${renderToString(<App repos={repos} tags={tags}/>)}</div>
          <script>window.__data__ = ${JSON.stringify({repos, tags})};</script>
          <script src="/index.js"></script>
        </body>
        </html>
      `);

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
