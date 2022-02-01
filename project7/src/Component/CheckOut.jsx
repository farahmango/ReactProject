import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "./Nav";

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }
  

  render() {
    return (
      <React.Fragment>
      <Nav />
      <div className="site-section d-flex flex-column align-items-center justify-content-center mt-5">
          <i className="fa fa-check-circle text-success h1 mb-4" aria-hidden="true"></i>
        <h1 className="text-black"> Your Order has been received successfully!</h1>
        <NavLink to="/shop" className="btn btn-sm btn-dark my-5">
         Shop
        </NavLink>
      </div>
      </React.Fragment>
      
    );
  }
}

export default CheckOut;
