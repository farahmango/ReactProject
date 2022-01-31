
import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export class Nav extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      rerender: true,
      cartCounter:0 ,
      cartIcon :true 
     
    };
  }
  componentDidMount() {
    if(sessionStorage.getItem("numOfOrder")==null){
      this.setState({
        cartIcon :false 
      })
        
     
    }
    
  
  }

  

  render() {
    return (
      <header className="site-navbar" role="banner">
        <div className="site-navbar-top">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-left">
                <div className="site-logo">
                  <Link to="/" className="js-logo-clone">
                    Exotic Fruits
                  </Link>
                </div>
              </div>

              <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-right ">
                <div className="site-top-icons">
                  <ul>
                    <li>
                      <NavLink to="/profile">
                        <span className="icon icon-person"></span>
                      </NavLink>
                    </li>

                    <li>
                       
                        <NavLink to="/empty" className="site-cart">
                          <span className="icon icon-shopping_cart"></span>
                          <span className="count text-danger">{this.state.cartIcon == false ? 0 : '*' }</span>
                        </NavLink>
                     
                    </li>
                    <li className="d-inline-block d-md-none ml-md-0">
                      <a href="#" className="site-menu-toggle js-menu-toggle">
                        <span className="icon-menu"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="site-navigation text-right text-md-center"
          role="navigation"
        >
          <div className="container">
            <ul className="site-menu js-clone-nav d-none d-md-block">
              <li className=" active">
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              <li>
                <NavLink to="/login">Login</NavLink>
              </li>

              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
