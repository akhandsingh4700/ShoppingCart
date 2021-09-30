import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "../redux/Action/cartAction";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "white",
    width: "50%",
    marginTop: "10px",
    height: "300px",
    boxShadow: "0px 2px 2px grey",

    borderRadius: "5px",

    "& .MuiTypography-h5": {
      fontSize: "20px",
    },
  },

  productImage: {
    width: "40%",
    height: "100%",
  },

  cartItems: {
    marginLeft: "50px",
  },

  productDesc: {
    width: "60%",
    padding: "20px",
  },
  productQty: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    flexWrap: "Wrap",
  },
  remove: {
    marginTop: "50px !important",
  },
}));

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
const Cart = ({ item }) => {
  const dispatch = useDispatch();
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
        <Box className={classes.root}>
          <Box className={classes.productImage}>
            <img src={item.image} style={{ width: "90%", height: "90%" }} />
          </Box>
          <Box className={classes.productDesc}>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="h6">Price : {item.price} Rs.</Typography>
            <Box className={classes.productQty}>
              Quantity:
              <BootstrapButton
                variant="contained"
                disableRipple
                onClick={() => dispatch(Actions.decreaseQuantity(item.id))}
                className={classes.qty}
              >
                -
              </BootstrapButton>
              <span>{item.qty}</span>
              <BootstrapButton
                variant="contained"
                disableRipple
                onClick={() => dispatch(Actions.increaseQuantity(item.id))}
                className={classes.qty}
              >
                +
              </BootstrapButton>
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
      </Box>
    </>
  );
};

export default Cart;
