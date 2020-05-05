import React from "react";
import { getProducts } from "../lib/api";
import { Link, withRouter } from "react-router-dom";
import Navbar from "./Navbar";

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <div>
        <Navbar />
        <ul>
          {getProducts()
            .filter((product) => product.title.includes(searchTerm))
            .map((product) => (
              <li key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <h3>{product.title}</h3>
                </Link>
                <p>{product.usage}</p>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(ProductsPage);
