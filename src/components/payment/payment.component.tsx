import React from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Payment = () => {
  const cart = useTypedSelector((state) => state.cart);
  
  return <h1>payment view YOU GOTT PAY THIS: ${cart.total}</h1>
};
