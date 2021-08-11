import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { ProductType } from './products.types';

import { ProductComponent } from './product.component';

import { addProduct } from '../../store/actions/products';

export const Product: FC<ProductType> = ({ name, price }) => {
  const dispatch = useDispatch();
  
  const onClick = () => {
    dispatch(addProduct({ name, price }));
  };
  
  return (
    <ProductComponent
      product={{
        name,
        price,
      }}
      onClick={onClick}
    />
  );
};
