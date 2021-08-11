import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setTotal } from '../store/actions/cart';

import { useTypedSelector } from './useTypedSelector';

export const useUpdateTotal = () => {
  const products = useTypedSelector((state) => state.products);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    const totalToPay = products.reduce((a, b) => {
      return a + (b.product.price * b.count);
    }, 0);
    
    dispatch(setTotal(totalToPay));
  }, [products, dispatch]);
  
  return products;
};
