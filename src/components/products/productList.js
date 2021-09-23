import React, { useEffect } from "react";
import ProductComponent from "./productComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/Action/cartAction";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("products", products);

  return (
    <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
      {products.map((item) => (
        <ProductComponent data={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
