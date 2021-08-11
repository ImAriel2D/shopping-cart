import React, { useEffect, useState } from 'react';

import { ProductsComponent } from './products.component';

import { ProductType } from '../product';

import { useUpdateTotal } from '../../hooks/useUpdateTotal';

export const Products = () => {
  useUpdateTotal();
  
  const [fetchedProducts, setFetchedProducts] = useState<ProductType[]>([]);
  
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
    
    setFetchedProducts(data);
  }, []);
  
  return <ProductsComponent products={fetchedProducts} />;
};
