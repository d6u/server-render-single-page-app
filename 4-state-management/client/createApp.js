import React, {Component} from 'react';
import {Router} from 'react-router';
import {Provider} from 'react-redux';

export default function createApp(store, routes) {
  return (
    <Provider store={store}>
      {routes}
    </Provider>
  );
}
