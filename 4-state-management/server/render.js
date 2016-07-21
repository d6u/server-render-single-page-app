import {match, RouterContext} from 'react-router';
import createApp from '../client/createApp';
import createStoreWithInitialState from '../client/createStoreWithInitialState';
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

          const state = {user, repos, tags};
          const store = createStoreWithInitialState(state);
          const app = createApp(store, <RouterContext {...renderProps}/>);

          res.send(`
            <html>
            <head>
              <meta charset="UTF-8">
              <title>Server Rendering</title>
              <link rel="stylesheet" href="/style.css">
            </head>
            <body>
              <div id="app">${renderToString(app)}</div>
              <script>window.__data__ = ${JSON.stringify({user, repos, tags})};</script>
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
