import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import * as Actions from "../../redux/Action/cartAction";

const useStyles = makeStyles({
  cardWrapper: {
    width: "33%",
  },
  card: {
    margin: "20px",
  },
});

const ProductComponent = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.cardWrapper}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={data.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data.productName}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(Actions.addProduct(data.id))}
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductComponent;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import { useDispatch, useSelector } from "react-redux";
// import * as Actions from "../../redux/Action/cartAction";

// const useStyles = makeStyles({
// cardWrapper: {
// width: "33%",
// },
// card: {
// margin: "20px",
// },
// });

// const ProductComponent = () => {
// const products = useSelector((state) => state.allProducts.products);
// const classes = useStyles();
// const dispatch = useDispatch();

// return (
// <div
// className={classes.cardWrapper}
// style={{ display: "flex", width: "100%", flexWrap: "wrap" }}
// >
// {products.map((data) => (
// <Card className={classes.card}>
// <CardActionArea>
// <CardMedia component="img" height="140" image={data.image} />
// <CardContent>
// <Typography gutterBottom variant="h5" component="h2">
// {data.title}
// </Typography>
// </CardContent>
// </CardActionArea>
// <CardActions>
// <Button
// size="small"
// color="primary"
// onClick={() => dispatch(Actions.addProduct(data.id))}
// >
// Add To Cart
// </Button>
// </CardActions>
// </Card>
// ))}
// </div>
// );
// };

// export default ProductComponent;
