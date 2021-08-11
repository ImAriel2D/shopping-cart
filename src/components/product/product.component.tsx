import React, { FC } from 'react';

import { ProductType } from './products.types';

interface ProductComponentProps {
  product: ProductType;
  onClick: () => void,
}

export const ProductComponent: FC<ProductComponentProps> = ({ product, onClick}) => (
  <div>
    <h1>{product.name}</h1>
    <p>{product.price}</p>
    <button onClick={onClick}>Add to cart</button>
  </div>
);
