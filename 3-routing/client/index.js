import React from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';
import routes from './components/routes';

render(routes, document.getElementById('app'));
