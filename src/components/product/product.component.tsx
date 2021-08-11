import React, { FC } from 'react';
import { Button } from '@material-ui/core';

import { ProductType } from './products.types';

interface ProductComponentProps {
  product: ProductType;
  onClick: () => void,
}

export const ProductComponent: FC<ProductComponentProps> = ({ product, onClick}) => (
  <div>
    <h1>{product.name}</h1>
    <p>{product.price}</p>
    <Button color="primary" onClick={onClick}>Add to cart</Button>
  </div>
);
