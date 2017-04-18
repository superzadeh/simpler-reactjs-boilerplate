import {
  selectLocationState,
} from '../selectors';

describe('selectLocationState', () => {
  it('should select the route', () => {
    const route = {
      locationBeforeTransitions: null,
    };
    const mockedState = {
      route,
    };
    expect(selectLocationState(mockedState)).toEqual(route);
  });
});
