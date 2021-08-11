import { ProductType } from '../../../components/product';

import {
  PRODUCT_ADD,
  PRODUCT_DELETE,
  PRODUCT_DECREASE,
} from '../../constants';

interface ProductState {
  product: ProductType;
  count: number;
}

interface Payload {
  type: string;
  payload: ProductType;
}

const initialState: ProductState[] = [];

const sortProducts = (products: ProductState[]) => {
  return products.sort((a, b) => {
    if (a.product.name < b.product.name) return 1;
    if (a.product.name > b.product.name) return -1;
    return 0;
  });
};

export const productsReducer = (state = initialState, { type, payload }: Payload) => {
  switch (type) {
    case PRODUCT_ADD:
      let productToAdd = state.find((product) => product.product.name === payload.name);
      
      if (productToAdd) {
        productToAdd.count += 1;
        const products = state.filter((product) => product.product.name !== payload.name);
        
        return sortProducts([...products, productToAdd]);
      } else {
        return sortProducts([...state, { product: { ...payload }, count: 1 }]);
      }
    
    case PRODUCT_DECREASE:
      let productToRemove = state.find((product) => product.product.name === payload.name);
  
      if (productToRemove && productToRemove.count > 1) {
        productToRemove.count -= 1;
        const products = state.filter((product) => product.product.name !== payload.name);
    
        return sortProducts([...products, productToRemove]);
      }
      
      return state;
    
    case PRODUCT_DELETE:
      return [...state.filter((product) => product.product.name !== payload.name)];
      
    default:
      return state;
  }
};
