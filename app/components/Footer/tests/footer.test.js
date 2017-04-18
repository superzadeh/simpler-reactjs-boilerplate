import React from 'react';
import Footer from '../footer';

describe('Footer', () => {
  it('should render correctly', () => {
    const footer = (<Footer></Footer>);
    expect(footer).toMatchSnapshot();
  });
});
