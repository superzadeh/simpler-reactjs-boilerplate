
import languageProviderReducer from 'reducers/locale-reducer';
import {
  CHANGE_LOCALE,
} from 'actions/action-types';

describe('languageProviderReducer', () => {
  it('returns the initial state', () => {
    expect(languageProviderReducer(undefined, {})).toEqual({
      locale: 'en',
    });
  });

  it('changes the locale', () => {
    expect(languageProviderReducer(undefined, { type: CHANGE_LOCALE, locale: 'de' })).toEqual({
      locale: 'de',
    });
  });
});
