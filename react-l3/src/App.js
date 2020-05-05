import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsPage from "./components/ProductsPage";
import CompanyAboutPage from "./components/CompanyAboutPage";
import ProductPage from "./components/ProductPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "24px auto" }}>
      <Router>
        <Switch>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/product/:productId">
            <ProductPage />
          </Route>
          <Route path="/about">
            <CompanyAboutPage />
          </Route>
          <Route path="/">
            <Navbar />
            <img src="https://logodix.com/logo/576454.png"></img>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
