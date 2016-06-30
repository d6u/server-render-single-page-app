import React from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';
import App from './components/App';

const data = window.__data__ || {};

render(
  <App repos={data.repos} tags={data.tags} user={data.user}/>,
  document.getElementById('app')
);
