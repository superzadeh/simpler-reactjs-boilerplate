/*
 *
 * LanguageProvider reducer
 *
 */


import {
  CHANGE_LOCALE,
} from 'actions/action-types';
import {
  DEFAULT_LOCALE,
} from 'containers/App/constants';

const initialState = {
  locale: DEFAULT_LOCALE,
};

function localeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return { ...state, locale: action.locale };
    default:
      return state;
  }
}

export default localeReducer;
