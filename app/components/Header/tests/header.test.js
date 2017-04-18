import React from 'react';
import Header from '../header';

describe('Header', () => {
  it('should render correctly', () => {
    const header = (<Header></Header>);
    expect(header).toMatchSnapshot();
  });
});
