import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {GET_REPOS} from './actions';

export default function createStoreWithInitialState(initialState) {
  return createStore(
    (state, action) => {
      if (action.type === GET_REPOS) {
        return Object.assign({}, state, {repos: action.repos});
      } else {
        return state;
      }
    },
    initialState,
    applyMiddleware(thunk)
  );
}
