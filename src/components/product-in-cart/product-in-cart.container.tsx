import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { ProductInCartComponent } from './product-in-cart.component';

import { ProductType } from '../product';

import {
  addProduct,
  removeProduct,
  decreaseProduct,
} from '../../store/actions/products';

interface ProductInCartType {
  product: ProductType;
  count: number;
}

export const ProductInCart: FC<ProductInCartType> = ({ product, count }) => {
  const dispatch = useDispatch();
  
  const onAddClick = () => {
    dispatch(addProduct({ ...product }));
  };
  
  const onDecreaseClick = () => {
    dispatch(decreaseProduct({ ...product }));
  };
  
  const onRemoveClick = () => {
    dispatch(removeProduct({ ...product }));
  };
  
  return (
    <ProductInCartComponent
      product={product}
      count={count}
      onAddClick={onAddClick}
      onRemoveClick={onRemoveClick}
      onDecreaseClick={onDecreaseClick}
    />
  );
};
