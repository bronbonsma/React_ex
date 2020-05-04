import React from "react";
// import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

// function Products() {
//   return (
//     <>
//       <img
//         style={{ marginInlineStart: "80px" }}
//         src="data:image/png;base64,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"
//       ></img>
//       <h1 style={{ marginInlineStart: "90px" }}> Products</h1>
//       <ul>
//         <img
//           id="img1"
//           style={{ marginInlineStart: "60px" }}
//           src="https://images-na.ssl-images-amazon.com/images/I/510f1XnOOTL._AC_SX425_.jpg"
//           height="180"
//           width="180"
//         ></img>
//         <img
//           id="img2"
//           style={{ marginInlineStart: "60px" }}
//           src="https://www.multiplyonlineshop.co.za/media/catalog/product/cache/1/image/570x/9df78eab33525d08d6e5fb8d27136e95/f/o/forerunner-45s-white_2.jpg"
//           height="200"
//           width="200"
//         ></img>
//         <img
//           id="img3"
//           style={{ marginInlineStart: "60px" }}
//           src="https://explore.garmin.com/inreach/images/product-inreach-mini.jpg"
//           height="250"
//           width="250"
//         ></img>
//       </ul>
//     </>
//   );
// }

// export default Products;

function Products() {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Router>
        <img
          style={{ marginInlineStart: "80px" }}
          src="data:image/png;base64,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"
        ></img>
        <div>
          <ul>
            <span>
              <Link to={`${url}/Mens-Watch`}>Mens Watch Details</Link>
              <img
                id="img1"
                style={{ marginInlineStart: "50px" }}
                src="https://images-na.ssl-images-amazon.com/images/I/510f1XnOOTL._AC_SX425_.jpg"
                height="180"
                width="180"
              ></img>
            </span>
            <span>
              <Link to={`${url}/Womans-Watch`}>Womans Watch Details</Link>
              <img
                id="img2"
                style={{ marginInlineStart: "50px" }}
                src="https://www.multiplyonlineshop.co.za/media/catalog/product/cache/1/image/570x/9df78eab33525d08d6e5fb8d27136e95/f/o/forerunner-45s-white_2.jpg"
                height="200"
                width="200"
              ></img>
            </span>
            <span>
              <Link to={`${url}/Navigator-Garmin`}>Garmin Details</Link>
              <img
                id="img2"
                style={{ marginInlineStart: "50px" }}
                src="https://explore.garmin.com/inreach/images/product-inreach-mini.jpg"
                height="200"
                width="200"
              ></img>
            </span>
          </ul>
          <Switch>
            <Route exact path={path}></Route>
            <Route path={`${path}/:topicId`}>
              <Topic />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

function Topic() {
  let { topicId } = useParams();
  return (
    <div>
      {/* <h3 style={{ marginInlineStart: "0px" }}> {topicId}</h3>; */}
      <h1 style={{ marginInlineStart: "400px" }}>{topicId}</h1>
    </div>
  );
}

export default Products;
