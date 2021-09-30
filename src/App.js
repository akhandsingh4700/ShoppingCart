import "./App.css";
import Topbar from "./components/Topbar/topbar";
import ProductList from "./components/products/productList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/cart";
import Form from "./components/contact/contact";
import CartItem from "./components/cartItem";
function App() {
  return (
    <Router>
      <div className="app">
        <Topbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/cart" component={CartItem} />
          <Route exact path="/contact" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
