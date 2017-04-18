/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';

import Header from 'components/Header';
import Footer from 'components/Footer';

export function App(props) {
  return (
    <div>
      <Helmet
        titleTemplate="%s - ProductName"
        defaultTitle="ProductName"
        meta={[
          { name: 'description', content: 'ProductName application' },
        ]}
      />
      <Header />
      {React.Children.toArray(props.children)}
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
