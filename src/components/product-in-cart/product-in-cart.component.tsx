import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';
import {
  Add,
  Remove,
} from '@material-ui/icons';

import { ProductType } from '../product';

interface ProductInCartComponentType {
  product: ProductType;
  count: number;
  onAddClick: () => void,
  onRemoveClick: () => void,
}

export const ProductInCartComponent: FC<ProductInCartComponentType> = ({
  product,
  count,
  onAddClick,
  onRemoveClick,
}) => (
  <div>
    <h2>{product.name}</h2>
    <p>Price: ${product.price}</p>
    <IconButton onClick={onAddClick}>
      <Add />
    </IconButton>
    <span>{ count }</span>
    <IconButton onClick={onRemoveClick}>
      <Remove />
    </IconButton>
  </div>
);
