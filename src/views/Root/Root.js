import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyle';

import Home from 'views/Home';
import NotFound from 'views/NotFound';

function Root() {
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
}

export default Root;
