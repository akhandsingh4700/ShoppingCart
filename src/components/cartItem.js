import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Cart from "./cart";

const CartItem = () => {
  const items = useSelector((state) => state.allProducts);
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(items.cart).forEach(function (item) {
    ListCart.push(items.cart[item]);
  });

  function TotalPrice(price, qty) {
    return Number(price * qty);
  }

  return (
    <div>
      {ListCart.map((item, key) => (
        <Cart item={item} key={key} />
      ))}
      BOX
    </div>
  );
};

export default CartItem;
