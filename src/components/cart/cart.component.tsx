import React from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import { ProductInCart } from '../product-in-cart';

export const Cart = () => {
  const products = useTypedSelector((state) => state.products);
  const totalToPay = products.reduce((a, b) => {
    return a + (b.product.price * b.count);
  }, 0);
  
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
      <h3>Total: ${totalToPay}</h3>
    </div>
  );
};
