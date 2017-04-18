/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import globalReducer from 'containers/App/reducer';
import localeReducer from 'reducers/locale-reducer';


/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routerReducer,
    global: globalReducer,
    language: localeReducer,
    ...asyncReducers,
  });
}