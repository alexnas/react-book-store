import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import withBookstoreService from '../hoc/with-bookstore-service';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/cart' component={CartPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default withBookstoreService()(App);
