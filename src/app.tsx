import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Navbar } from './components/navbar';
import { Products } from './components/products';
import { Cart } from './components/cart';

import {
  ROUTE_CART,
  ROUTE_PRODUCTS,
} from './routes';

export const App = () => (
  <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route path={ROUTE_PRODUCTS} exact={true}>
          <Products />
        </Route>
        <Route path={ROUTE_CART} exact={true}>
          <Cart />
        </Route>
        <Route path="*">
          <Redirect to={ROUTE_PRODUCTS}/>
        </Route>
      </Switch>
    </Router>
  </div>
);
