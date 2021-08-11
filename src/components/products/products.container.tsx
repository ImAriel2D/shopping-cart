import React, { useEffect, useState } from 'react';

import { ProductsComponent } from './products.component';

import { ProductType } from '../product';

export const Products = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  
  useEffect(() => {
    const data: ProductType[] = [
      {
        name: 'Nike Shoes',
        price: 20.50,
      },
      {
        name: 'Adidas Shoes',
        price: 15.00,
      },
      {
        name: 'Other Shoes',
        price: 10.00,
      },
    ];
    
    setProducts(data);
  }, []);

  return <ProductsComponent products={products} />
};
