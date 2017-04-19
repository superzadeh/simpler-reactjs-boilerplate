import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../footer';

const child = <h1>Test</h1>;
const getElement = () => (<Footer>{child}</Footer>);

describe('Footer', () => {
  it('should render correctly', () => {
    const footer = getElement();
    expect(footer).toMatchSnapshot();
  });
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(getElement());
    expect(renderedComponent.type()).toEqual('div');
  });
});
