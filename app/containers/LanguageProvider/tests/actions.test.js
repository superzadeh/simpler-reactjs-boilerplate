import {
  changeLocale,
} from 'actions/locale-actions';

import {
  CHANGE_LOCALE,
} from 'actions/action-types';

describe('LanguageProvider actions', () => {
  describe('Change Local Action', () => {
    it('has a type of CHANGE_LOCALE', () => {
      const expected = {
        type: CHANGE_LOCALE,
        locale: 'de',
      };
      expect(changeLocale('de')).toEqual(expected);
    });
  });
});
