import { logDOM } from "@testing-library/react";
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Nav } from "./Nav";
function Single() {
  let { id } = useParams();
  const [count, setCount] = useState(1);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  let products = JSON.parse(localStorage.getItem("products"));

  let product = products.filter((p) => {
    if (p.product_id === id) {
      return p;
    }
  });

  const addToCartHandler = () => {
    if (sessionStorage.getItem("cart") == null) {
      product[0].product_quantity = count;
      let newProduct = [product];

      sessionStorage.setItem("cart", JSON.stringify(newProduct));
    } else {
      let cart = JSON.parse(sessionStorage.getItem("cart"));
      let exist = cart.filter((p) => {
        if (p[0].product_id == product[0].product_id) {
          return true;
        }
      });

      if (exist.length !== 0) {
        let c = cart.map((p) => {
          if (p[0].product_id == product[0].product_id) {
            p[0].product_quantity = Number(p[0].product_quantity) + count;
          }
        });

        sessionStorage.setItem("cart", JSON.stringify(cart));
      } else {
        product[0].product_quantity = count;
        cart = [...cart, product];
        sessionStorage.setItem("cart", JSON.stringify(cart));
      }
    }
  };

  return (
    <React.Fragment>
      <Nav />
      <div>
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <a href="index.html">Home</a>{" "}
                <span className="mx-2 mb-0">/</span>{" "}
                <strong className="text-black">
                  {product[0].product_name}
                </strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={"../" + product[0].image}
                  alt={product[0].product_name}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <h2 className="text-black">{product[0].product_name} </h2>

                <p className="my-4">{product[0].product_description}</p>
                <p>
                  <strong className="text-primary h4">
                    £ {product[0].product_price}
                  </strong>
                </p>

                <div className="my-4">
                  <div
                    className="input-group mb-3"
                    style={{ maxWidth: "120px" }}
                  >
                    <div
                      className="input-group-prepend"
                      onClick={decrementCount}
                    >
                      <button
                        className="btn btn-outline-primary js-btn-minus"
                        type="button"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                    </div>
                    <input
                      readOnly
                      type="text"
                      className="form-control text-center"
                      value={count}
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                    />
                    <div
                      className="input-group-append"
                      onClick={incrementCount}
                    >
                      <button
                        className="btn btn-outline-primary js-btn-plus"
                        type="button"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <Link to="/cart" className="text-white">
                  <button
                    name="addToCart"
                    className="buy-now btn btn-sm btn-primary"
                    onClick={addToCartHandler}
                  >
                    Add To Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Single;
