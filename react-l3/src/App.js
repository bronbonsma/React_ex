import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/about";
import Products from "./components/products";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div>
          <menu>
            <Link to="/about" style={{ marginInlineStart: "40px" }}>
              About
            </Link>
            <Link to="/products" style={{ marginInlineStart: "20px" }}>
              Products
            </Link>
          </menu>

          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
