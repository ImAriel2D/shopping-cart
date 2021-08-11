import { CART_SET_TOTAL } from '../../constants';

const initialState = {
  total: 0,
};

interface Payload {
  type: string;
  payload: number;
}

export const cartReducer = (state = initialState, { type, payload }: Payload) => {
  switch (type) {
    case CART_SET_TOTAL:
      return { ...state, total: payload };
    
    default:
      return state;
  }
};
