import React from 'react';
import Helmet from 'react-helmet';
import { shallow } from 'enzyme';

import { HomePage } from '../home-page';

const getElement = () => (<HomePage></HomePage>);

describe('HomePage', () => {
  it('should render correctly', () => {
    const homePage = getElement();
    expect(homePage).toMatchSnapshot();
  });
  it('should render as a div) ', () => {
    const homePage = shallow(getElement());
    expect(homePage.containsMatchingElement(<Helmet></Helmet>)).toEqual(true);
  });
});
