import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyle';

import Home from 'views/Home';
import NotFound from 'views/NotFound';

import tawkto from 'react-tawkto';

const Root = () => {
  // Tawk.to
  useEffect(() => {
    tawkto.init('55fb4794e1ea4c1012fe49df', () => console.log('Tawk.to ready'));
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <h1>Hello World!</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Root;
