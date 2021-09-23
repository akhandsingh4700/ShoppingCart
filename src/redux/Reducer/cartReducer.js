import * as ActionType from "../Action/types";

const initialState = {
  products: [],
  numberCart: 0,
  cart: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.FETCH_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ActionType.GET_ALL_PRODUCT:
      return {
        ...state,
        products: payload,
      };
    case ActionType.ADD_PRODUCTS:
      // Item data from products array
      const item = state.products.find((product) => product.id === payload.id);
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === payload.id ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case ActionType.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };

    case ActionType.GET_NUMBER_CART:
      return {
        ...state,
      };

    case ActionType.INCREASE_QUANTITY:
      state.numberCart++;
      state.cart[payload].qty++;

      return {
        ...state,
      };

    case ActionType.DECREASE_QUANTITY:
      let quantity = state.cart[payload].qty;

      if (quantity > 1) {
        state.numberCart--;
        state.cart[payload].qty--;
      }

      return {
        ...state,
      };

    default:
      return state;
  }
};
