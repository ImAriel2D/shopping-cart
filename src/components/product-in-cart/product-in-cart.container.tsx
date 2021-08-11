import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { ProductInCartComponent } from './product-in-cart.component';

import { ProductType } from '../product';

import { addProduct } from '../../store/actions/products';

interface ProductInCartType {
  product: ProductType;
  count: number;
}

export const ProductInCart: FC<ProductInCartType> = ({ product, count }) => {
  const dispatch = useDispatch();
  
  const onAddClick = () => {
    dispatch(addProduct({ ...product }));
  };
  
  const onRemoveClick = () => {
  
  };
  
  return (
    <ProductInCartComponent
      product={product}
      count={count}
      onAddClick={onAddClick}
      onRemoveClick={onRemoveClick}
    />
  );
};
