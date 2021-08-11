import {
  PRODUCT_ADD,
  PRODUCT_DECREASE,
  PRODUCT_DELETE,
} from '../constants';

import { ProductType } from '../../components/product';

export const addProduct = (payload: ProductType) => ({
  type: PRODUCT_ADD,
  payload,
})

export const decreaseProduct = (payload: ProductType) => ({
  type: PRODUCT_DECREASE,
  payload,
});

export const removeProduct = (payload: ProductType) => ({
  type: PRODUCT_DELETE,
  payload,
});
