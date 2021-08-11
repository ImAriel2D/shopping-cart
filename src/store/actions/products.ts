import {
  PRODUCT_ADD,
  PRODUCT_DELETE,
} from '../constants';

import { ProductType } from '../../components/product';

export const addProduct = (payload: ProductType) => ({
  type: PRODUCT_ADD,
  payload,
})

export const removeProduct = (payload: ProductType) => ({
  type: PRODUCT_DELETE,
  payload,
});
