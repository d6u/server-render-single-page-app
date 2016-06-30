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

app.get('/user.json', function (req, res) {
  Data.findUser().then(function (user) {
    res.send(user);
  });
});

app.get('*', function (req, res, next) {
  Promise
    .all([
      getTemplate(),
      Data.findRepos(20),
      Data.findTags(),
      Data.findUser(),
    ])
    .then(([template, repos, tags, user]) => {
      res.send(ejs.render(template, {
      //   content: renderToString(<App repos={repos} tags={tags}/>),
        __data__: JSON.stringify({repos, tags, user})
      }));
    })
    .catch(next);
});

app.use(function (err, req, res, next) {
  console.log(err);
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
