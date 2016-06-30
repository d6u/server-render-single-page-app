import React from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';
import routes from './components/routes';
import createApp from './createApp';
import createStoreWithInitialState from './createStoreWithInitialState';

const store = createStoreWithInitialState(window.__data__);

render(createApp(store, routes), document.getElementById('app'));
