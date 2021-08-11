import React from 'react';
import { Button } from '@material-ui/core';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import { ProductInCart } from '../product-in-cart';

import { useUpdateTotal } from '../../hooks/useUpdateTotal';

export const Cart = () => {
  useUpdateTotal();
  
  const products = useTypedSelector((state) => state.products);
  const cart = useTypedSelector((state) => state.cart);
  
  return (
    <div>
      <h1>Your cart</h1>
      {
        products.length > 0 ? (
          products.map((product) => (
            <ProductInCart key={product.product.name} product={product.product} count={product.count} />
          ))
        ) : <p>No products here...</p>
      }
      <h3>Total: ${cart.total}</h3>
      {
        products.length > 0 ? (
          <Button>Go to pay</Button>
        ) : null
      }
    </div>
  );
};
