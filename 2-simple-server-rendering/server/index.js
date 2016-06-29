import App from '../client/components/App';

const join = require('path').join;
const readFile = require('fs').readFile;
const express = require('express');
const ejs = require('ejs');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Data = require('./Data');

const app = express();

app.use(express.static(join(__dirname, '../public')));

app.get('/', function (req, res) {
  Promise
    .all([getTemplate(), Data.findRepos(10), Data.findTags()])
    .then(([template, repos, tags]) => {
      res.send(ejs.render(template, {
        content: renderToString(<App repos={repos} tags={tags}/>),
        __data__: JSON.stringify({repos, tags})
      }));
    });
});

app.get('/repos.json', function (req, res) {
  Data.findRepos().then(function (repos) {
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

function getTemplate() {
  return new Promise((resolve, reject) => {
    readFile(join(__dirname, 'index.ejs'), 'utf8', function (err, template) {
      resolve(template);
    });
  });
}
