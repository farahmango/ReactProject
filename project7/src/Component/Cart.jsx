import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";
import axios from "axios";

class Cart extends Component {
  state = {
    count: 0,
    reRender: false,
    redirect: false,
    total: 0,
    checkOut: false,
    order_id: [],
    empty: false,
  };

  componentDidMount() {
    this.receivedData();
    axios
      .get("http://localhost/reactProject/project/ordersApi.php")
      .then((response) => {
        sessionStorage.setItem("order_id", response.data[0].order_id);
      });
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  receivedData() {
    if (sessionStorage.getItem("cart") != null) {
      let cart = JSON.parse(sessionStorage.getItem("cart"));
      let subTotal = 0;
      const postData = cart.map((product) => (
        <tr key={product[0].product_id}>
         { console.log(product)}
          <td className="product-thumbnail">
            <img
              src={product[0].image}
              alt={product[0].product_name}
              className="img-fluid"
            />
          </td>
          <td className="product-name">
            <h2 className="h5 text-black">{product[0].product_name}</h2>
          </td>
          <td> $ {product[0].product_price}</td>
          <td>{product[0].product_quantity}</td>
          <td> $ {product[0].product_price * product[0].product_quantity}</td>
          <td>
            <button
              className="btn btn-dark btn-sm"
              onClick={this.deleteItem.bind(this, product[0].product_id)}
            >
              {" "}
              X{" "}
            </button>
          </td>
        </tr>
      ));

      cart.forEach((product) => {
        subTotal += product[0].product_price * product[0].product_quantity;
      });

      this.setState({
        postData,
        reRender: false,
        redirect: false,
        total: subTotal,
      });
    } else {
      this.setState({
        empty: true,
      });
    }
  }

  deleteItem = (id, event) => {
    event.preventDefault();
    this.setState({
      reRender: true,
    });
    let cart = JSON.parse(sessionStorage.getItem("cart"));

    let remainder = cart.filter((p) => {
      if (p[0].product_id !== id) return p;
    });

    console.log(remainder);
    sessionStorage.setItem("cart", JSON.stringify(remainder));
    this.receivedData();
  };

  checkOutHandler = () => {
    let check = localStorage.getItem("loggedIn");

    if (check === null) {
      this.setState({
        redirect: true,
      });
    } else {
      this.setState({
        checkOut: true,
      });
      
      let user = JSON.parse(localStorage.getItem("currentUser"));
      console.log(user.id);
      let order = {
        user_id: parseInt(user.id),
      };

      //save order in orders table
      axios
        .post("http://localhost/reactProject/project/orders.php", order)
        .then((res) => console.log(res.data.user_id))
        .catch((error) => {
          console.log(error.response);
        })
        .then((response) => {
          console.log(response);
        });

      //

      let checkOutCart = this.orderDetails();
      axios
        .post(
          "http://localhost/reactProject/project/ordersDelailes.php",
          checkOutCart
        )
        .then((res) => console.log(res.data))
        .catch((error) => {
          console.log(error.response.data);
        })
        .then((response) => {
          console.log(response);
        });

      sessionStorage.clear();
    }
  };

  orderDetails = () => {
    let cartProducts = [];

    let cart = JSON.parse(sessionStorage.getItem("cart"));
    cart.forEach((element) => {
      let product = {
        product_id: parseInt(element[0].product_id),
        order_id: parseInt(sessionStorage.getItem("order_id")) + 1,
        quantity: element[0].product_quantity,
      };
      cartProducts.push(product);
    });
    console.log(cartProducts);
    return cartProducts;
  };

  render() {
    return (
      <div>
        {this.state.redirect === true ? (
          <Navigate to="/login" replace={true} />
        ) : (
          ""
        )}
        {this.state.checkOut === true ? (
          <Navigate to="/checkOut" replace={true} />
        ) : (
          ""
        )}
        {this.state.empty === true ? (
          <Navigate to="/empty" replace={true} />
        ) : (
          ""
        )}
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <Link to="/">Home</Link>
                <span className="mx-2 mb-0">/</span>
                <strong className="text-black">Cart</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <form className="col-md-12" method="post">
                <div className="site-blocks-table">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-total">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>{this.state.postData}</tbody>
                  </table>
                </div>
              </form>
            </div>

            <div className="row">
              <div className="col-md-8 ">
                <div className="row justify-content-end">
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-12 text-left border-bottom mb-5">
                        <h3 className="text-black h4 text-uppercase">
                          Cart Totals
                        </h3>
                      </div>
                    </div>

                    <div className="row mb-5">
                      <div className="col-md-6">
                        <span className="text-black">Total</span>
                      </div>
                      <div className="col-md-6 text-right">
                        <strong className="text-black">
                          {" "}
                          $ {this.state.total}
                        </strong>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <button
                          className="btn btn-dark btn-lg py-3 btn-block"
                          onClick={this.checkOutHandler}
                        >
                          Proceed To Checkout
                        </button>
                        <Link
                          to="/shop"
                          className="btn btn-dark btn-lg py-3 btn-block"
                        >
                          Continue Shopping
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
