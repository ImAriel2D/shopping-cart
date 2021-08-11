import React, { FC } from 'react';

import { ProductType } from '../product';

import { Product } from '../product';

interface ProductsComponentProps {
  products: ProductType[];
}

export const ProductsComponent: FC<ProductsComponentProps> = ({ products}) => (
  <div>
    {
      products.length > 0 ? (
        products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            price={product.price}
          />
        ))
      ) : null
    }
  </div>
);
