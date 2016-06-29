import React from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch';
import App from './components/App';

const __data__ = window.__data__;

render(<App repos={__data__.repos} tags={__data__.tags}/>, document.getElementById('app'));
