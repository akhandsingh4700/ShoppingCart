import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    "& .MuiIconButton-label": {
      color: "white",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    textDecoration: "none",
    color: "white",
  },
  contact: {
    textDecoration: "none",
    color: "white",
  },
}));

const Topbar = () => {
  const classes = useStyles();
  const products = useSelector((state) => state.allProducts.cart);
  console.log(products);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.mainContainer}>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.logo}>
              Shopping Site
            </Link>
          </Typography>
          <div>
            <Link to="/cart">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Badge badgeContent={products.length} color="secondary">
                  <AddShoppingCart />
                </Badge>
              </IconButton>
            </Link>
            <Link to="/contact" className={classes.contact}>
              Contact
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Topbar;
