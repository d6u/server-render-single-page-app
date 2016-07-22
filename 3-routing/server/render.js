import {match, RouterContext} from 'react-router';
import routes from '../client/components/routes';

const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Data = require('./Data');

module.exports = function render(req, res, next) {
  Promise
    .all([
      Data.findRepos(20),
      Data.findTags(),
      Data.findUser(),
    ])
    .then(([repos, tags, user]) => {

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

          res.send(`
            <html>
            <head>
              <meta charset="UTF-8">
              <title>Server Rendering</title>
              <link rel="stylesheet" href="/style.css">
            </head>
            <body>
              <div id="app">${renderToString(<RouterContext {...renderProps}/>)}</div>
              <script>window.__data__ = ${JSON.stringify({repos, tags, user})};</script>
              <script src="/index.js"></script>
            </body>
            </html>
          `);

        } else {
          res.sendStatus(404);
        }
      });

    })
    .catch(next);
}
