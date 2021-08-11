import React from 'react';
import {
  AppBar,
  Toolbar,
  Badge,
  IconButton,
} from '@material-ui/core';
import {
  Home,
  ShoppingCart,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import { ROUTE_CART, ROUTE_PRODUCTS } from '../../routes';

export const Navbar = () => {
  const products = useTypedSelector((state) => state.products);
  
  const totalProducts = products.reduce((a, b) => {
    return a + b.count;
  }, 0);
  
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Link to={ROUTE_PRODUCTS}>
          <IconButton color="inherit">
            <Home color="inherit" />
          </IconButton>
        </Link>
        <Link to={ROUTE_CART}>
          <IconButton color="inherit">
            <Badge badgeContent={totalProducts} color="secondary">
              <ShoppingCart color="inherit" />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
