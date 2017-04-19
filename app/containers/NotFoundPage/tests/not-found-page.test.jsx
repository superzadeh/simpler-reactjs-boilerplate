import React from 'react';
import { shallow } from 'enzyme';

import { NotFoundPage } from '../not-found-page';

const getElement = () => (<NotFoundPage></NotFoundPage>);

describe('NotFoundPage', () => {
  it('should render correctly', () => {
    const element = getElement();
    expect(element).toMatchSnapshot();
  });
  it('should render as a <div> tag', () => {
    const renderedComponent = shallow(getElement());
    expect(renderedComponent.type()).toEqual('div');
  });
});
