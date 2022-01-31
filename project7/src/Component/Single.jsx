import { logDOM } from "@testing-library/react";
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function Single() {
  
  let { id } = useParams();
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  let products = JSON.parse(localStorage.getItem("products"));
  //console.log(products);
  let product = products.filter((p) => {
    if (p.product_id === id) {
      return p;
    }
  });
  // console.log(product[0].product_name);
  // console.log(product);

  const addToCartHandler = () => {

    // let countNum = sessionStorage.getItem("numOfOrder")?sessionStorage.getItem("numOfOrder").length:0;
    
    // props.cartCounter(countNum);
    // console.log(props.cartCounter(countNum));

    
    // num of order in cart
    // if(sessionStorage.getItem("numOfOrder") == null){
    //   sessionStorage.setItem("numOfOrder", parseInt(1));
    // }else{
    //   sessionStorage.setItem("numOfOrder", parseInt(sessionStorage.getItem("numOfOrder"))+1);
    // }

    if(sessionStorage.getItem("numOfOrder") == null){
      sessionStorage.setItem("numOfOrder",1);
    }
    //sessionStorage.clear();
    
    if (sessionStorage.getItem("cart") == null) {
      product[0].product_quantity = count;
      let newProduct = [product];
      
      sessionStorage.setItem("cart", JSON.stringify(newProduct));
    } else {
      let cart = JSON.parse(sessionStorage.getItem("cart"));
     // console.log(cart);

      let exist = cart.filter((p) => {
        if (p[0].product_id == product[0].product_id) {
          return true;
        }
      });
      // console.log(exist );
      //  console.log();
      if(exist.length !== 0)
      { cart.map((p) => {
        if (p[0].product_id == product[0].product_id) {
          p[0].product_quantity = Number(p[0].product_quantity)+count;
        }
      });
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }else
      {
        // console.log(cart);
        cart = [...cart, product];
      sessionStorage.setItem("cart", JSON.stringify(cart));}
    }
  };

  return (
    <div>
      <div className="bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-0">
              <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>{" "}
              <strong className="text-black">{product[0].product_name}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="../images/person_1.jpg"
                alt={product[0].product_name}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h2 className="text-black">{product[0].product_name} </h2>

              <p className="my-4">{product[0].product_description}</p>
              <p>
                <strong className="text-primary h4">
                  $ {product[0].product_price}
                </strong>
              </p>

              <div className="my-4">
                <div className="input-group mb-3" style={{ maxWidth: "120px" }}>
                  <div className="input-group-prepend" onClick={decrementCount}>
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
                  <div className="input-group-append" onClick={incrementCount}>
                    <button
                      className="btn btn-outline-primary js-btn-plus"
                      type="button"
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <button
                name="addToCart"
                className="buy-now btn btn-sm btn-primary"
                onClick={addToCartHandler()}
              >
                <Link to="/cart" className="text-white">
                  Add To Cart
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
