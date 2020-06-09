import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ShopHeader from '../../components/shop-header/ShopHeader';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage';
import withBookstoreService from '../hoc/with-bookstore-service';

const App = () => {
  return (
    <main role='main' className='container'>
      <ShopHeader numItems={5} total={210} />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/cart' component={CartPage} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default withBookstoreService()(App);
