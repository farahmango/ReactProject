import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "./Nav";
class Empty extends Component {
  constructor(props) {
    super(props);
    this.state = {
        empty:false
    };
  }
  componentDidMount() {
    this.setState({
        empty:true
    });
  }

  render() {
    return (
      <React.Fragment>
      <Nav />
      <div className="site-section d-flex flex-column align-items-center justify-content-center mt-5">
        <h1>There is no fruits in your cart!</h1>
        <NavLink to="/shop" className="btn btn-sm btn-dark my-5">
          Shop Now
        </NavLink>
      </div>
      </React.Fragment>
    
    );
  }
}

export default Empty;
