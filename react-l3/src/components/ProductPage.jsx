import React from "react";
import { getProductById } from "../lib/api";
import { Switch, Route, withRouter, Link } from "react-router-dom";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const product = getProductById(match.params.productId);
    this.setState({ product });
  }

  render() {
    const { product } = this.state;
    const { match } = this.props;
    return (
      <div>
        {product && (
          <>
            <h1>{product.title}</h1>
            <img
              style={{ maxWidth: "600px", margin: "24px auto" }}
              src="https://www.wareable.com/media/imager/201911/34548-original.jpg"
            ></img>
            <Switch>
              <Route exact path={match.path}>
                {" "}
                <h6>Description:</h6>
                <p>{product.description}</p>
              </Route>
            </Switch>
          </>
        )}
      </div>
    );
  }
}

export default withRouter(ProductPage);
