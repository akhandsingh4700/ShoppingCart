import * as ACTION_TYPE from "./types";
import fakestoreapi from "../../components/apiData/Data";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await fakestoreapi.get("/products");
    dispatch({
      type: ACTION_TYPE.GET_ALL_PRODUCT,
      payload: response.data,
    });
  };
};

export function GetAllProduct(products) {
  return {
    type: ACTION_TYPE.GET_ALL_PRODUCT,
    payload: products,
  };
}
export const addProduct = (itemID) => ({
  type: ACTION_TYPE.ADD_PRODUCTS,
  payload: {
    id: itemID,
  },
});

export const removeFromCart = (itemID) => {
  return {
    type: ACTION_TYPE.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export function GetNumberCart() {
  return {
    type: ACTION_TYPE.GET_NUMBER_CART,
  };
}

export function increaseQuantity(payload) {
  return {
    type: ACTION_TYPE.INCREASE_QUANTITY,
    payload,
  };
}
export function decreaseQuantity(payload) {
  return {
    type: ACTION_TYPE.DECREASE_QUANTITY,
    payload,
  };
}
