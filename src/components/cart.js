import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "../redux/Action/cartAction";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#14e4d1",
    width: "50%",
    marginTop: "10px",
    height: "300px",

    borderRadius: "5px",
    "& .MuiButton-contained": {
      color: "white",
      backgroundColor: "red",
      boxShadow: "none",
    },
    "& .MuiButton-contained:hover": {
      backgroundColor: "red",
      boxShadow: "none",
    },
    "& .MuiTypography-h5": {
      fontSize: "20px",
    },
  },

  productImage: {
    width: "40%",
    height: "100%",
  },
  // remove: {
  //   position: "relative",
  //   top: "50px",
  //   left: "-124px",
  // },
  cartItems: {
    marginLeft: "50px",
  },
  qty: {
    backgroundColor: "red",
  },
  productDesc: {
    width: "60%",
    padding: "20px",
  },
  productQty: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
}));
const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.allProducts);
  let ListCart = [];
  let TotalCart = 0;
  Object.keys(items.cart).forEach(function (item) {
    TotalCart += items.cart[item].qty * items.cart[item].originalPrice;
    ListCart.push(items.cart[item]);
  });

  function TotalPrice(price, qty) {
    return Number(price * qty);
  }
  const classes = useStyles();

  return (
    <>
      {/* <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {ListCart.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>
                      <i
                        className="badge badge-danger"
                        onClick={() =>
                          dispatch(Actions.removeFromCart(item.id))
                        }
                      >
                        X
                      </i>
                    </td>
                    <td>{item.productName}</td>
                    <td>
                      <img
                        src={item.image}
                        style={{ width: "100px", height: "80px" }}
                      />
                    </td>
                    <td>{item.originalPrice} $</td>
                    <td>
                      <span
                        className="btn btn-primary"
                        style={{ margin: "2px" }}
                        onClick={() => dispatch(Actions.decreaseQuantity(key))}
                      >
                        -
                      </span>
                      <span className="btn btn-info">{item.qty}</span>
                      <span
                        className="btn btn-primary"
                        style={{ margin: "2px" }}
                        onClick={() => dispatch(Actions.increaseQuantity(key))}
                      >
                        +
                      </span>
                    </td>
                    <td>{TotalPrice(item.originalPrice, item.qty)} $</td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan="5">Total Price</td>
                <td>{Number(TotalCart)} Rs.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
      <Box className={classes.cartItems}>
        {ListCart.map((item, key) => (
          <Box className={classes.root} key={key}>
            <Box className={classes.productImage}>
              <img src={item.image} style={{ width: "100%", height: "100%" }} />
            </Box>
            <Box className={classes.productDesc}>
              <Typography variant="h5">{item.title}</Typography>
              <Typography variant="h6">Price : {item.price} Rs.</Typography>
              <Box className={classes.productQty}>
                Quantity:
                <Button
                  onClick={() => dispatch(Actions.decreaseQuantity(key))}
                  className={classes.qty}
                >
                  <p>-</p>
                </Button>
                <span>{item.qty}</span>
                <Button
                  color="primary"
                  onClick={() => dispatch(Actions.increaseQuantity(key))}
                  className={classes.qty}
                >
                  +
                </Button>
              </Box>

              <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                onClick={() => dispatch(Actions.removeFromCart(item.id))}
                className={classes.remove}
              >
                Remove
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Cart;
