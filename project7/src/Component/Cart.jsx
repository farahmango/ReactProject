import React, { Component } from "react";
import YouTube from 'react-youtube';

class Cart extends Component {
 
  state = {};
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
     
        autoplay: 1,
      },
    };
    return (
<div>
<YouTube videoId="liJVSwOiiwg" opts={opts} onReady={this._onReady} />;
<div class="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">Cart</strong></div>
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
                <tbody>
                  <tr>
                    <td className="product-thumbnail">
                      <img src="images/cloth_1.jpg" alt="Image" className="img-fluid"/>
                    </td>
                    <td className="product-name">
                      <h2 className="h5 text-black">Top Up T-Shirt</h2>
                    </td>
                    <td>$49.00</td>
                    <td>
                      <div className="input-group mb-3"  style={{maxWidth: "120px"}}>
                        <div className="input-group-prepend">
                          <button className="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                        </div>
                        <input type="text" className="form-control text-center" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                        <div className="input-group-append">
                          <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                        </div>
                      </div>

                    </td>
                    <td>$49.00</td>
                    <td><a href="#" className="btn btn-primary btn-sm">X</a></td>
                  </tr>

                  <tr>
                    <td className="product-thumbnail">
                      <img src="images/cloth_2.jpg" alt="Image" className="img-fluid"/>
                    </td>
                    <td className="product-name">
                      <h2 className="h5 text-black">Polo Shirt</h2>
                    </td>
                    <td>$49.00</td>
                    <td>
                      <div className="input-group mb-3" style={{maxWidth: '120px'}}>
                        <div className="input-group-prepend">
                          <button className="btn btn-outline-primary js-btn-minus" type="button">&minus;</button>
                        </div>
                        <input type="text" className="form-control text-center" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                        <div className="input-group-append">
                          <button className="btn btn-outline-primary js-btn-plus" type="button">+</button>
                        </div>
                      </div>

                    </td>
                    <td>$49.00</td>
                    <td><a href="#" className="btn btn-primary btn-sm">X</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="row mb-5">
              <div class="col-md-6 mb-3 mb-md-0">
                <button class="btn btn-primary btn-sm btn-block">Update Cart</button>
              </div>
              <div class="col-md-6">
                <button class="btn btn-outline-primary btn-sm btn-block">Continue Shopping</button>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <label class="text-black h4" for="coupon">Coupon</label>
                <p>Enter your coupon code if you have one.</p>
              </div>
              <div class="col-md-8 mb-3 mb-md-0">
                <input type="text" class="form-control py-3" id="coupon" placeholder="Coupon Code"/>
              </div>
              <div class="col-md-4">
                <button class="btn btn-primary btn-sm">Apply Coupon</button>
              </div>
            </div>
          </div>
          <div class="col-md-6 pl-5">
            <div class="row justify-content-end">
              <div class="col-md-7">
                <div class="row">
                  <div class="col-md-12 text-right border-bottom mb-5">
                    <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-md-6">
                    <span class="text-black">Subtotal</span>
                  </div>
                  <div class="col-md-6 text-right">
                    <strong class="text-black">$230.00</strong>
                  </div>
                </div>
                <div class="row mb-5">
                  <div class="col-md-6">
                    <span class="text-black">Total</span>
                  </div>
                  <div class="col-md-6 text-right">
                    <strong class="text-black">$230.00</strong>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <button class="btn btn-primary btn-lg py-3 btn-block" onclick="window.location='checkout.html'">Proceed To Checkout</button>
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
