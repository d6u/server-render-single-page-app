import {match, RouterContext} from 'react-router';
import routes from '../client/components/routes';

const join = require('path').join;
const readFile = require('fs').readFile;
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const ejs = require('ejs');
const Data = require('./Data');

module.exports = function render(req, res, next) {
  Promise
    .all([
      getTemplate(),
      Data.findRepos(20),
      Data.findTags(),
      Data.findUser(),
    ])
    .then(([template, repos, tags, user]) => {

      match({routes, location: req.url}, (err, redirectLocation, renderProps) => {
        if (err) {
          next(err);
        } else if (redirectLocation) {
          res.redirect(303, redirectLocation.pathname);
        } else if (renderProps) {

          // render React components to string
          //
          renderProps.routes.user = user;
          renderProps.routes.repos = repos;
          renderProps.routes.tags = tags;

          res.send(ejs.render(template, {
            content: renderToString(<RouterContext {...renderProps}/>),
            __data__: JSON.stringify({repos, tags, user}),
          }));

        } else {
          res.sendStatus(404);
        }
      });

    })
    .catch(next);
}

function getTemplate() {
  return new Promise((resolve, reject) => {
    readFile(join(__dirname, 'index.ejs'), 'utf8', function (err, template) {
      resolve(template);
    });
  });
}
