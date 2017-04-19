import React from 'react';
import { shallow } from 'enzyme';

import Header from '../header';

const child = <h1>Test</h1>;
const getElement = () => (<Header>{child}</Header>);

describe('Header', () => {
  it('should render correctly', () => {
    const header = getElement();
    expect(header).toMatchSnapshot();
  });
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(getElement());
    expect(renderedComponent.type()).toEqual('div');
  });
});
