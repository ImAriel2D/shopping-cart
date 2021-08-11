import { CART_SET_TOTAL } from '../constants';

export const setTotal = (payload: number) => ({
  type: CART_SET_TOTAL,
  payload,
});
