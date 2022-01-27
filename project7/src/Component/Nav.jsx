import "../css/bootstrap/bootstrap-grid.css";
import "../css/bootstrap/bootstrap-reboot.css";
import "../css/aos.css";
import "../css/bootstrap.min.css";
// import '../css/jquery-ui.css'
import "../css/magnific-popup.css";
// import '../css/owl.carousel.min.css'
// import '../css/owl.theme.default.min.css'
import "../css/style.css";
import "../fonts/icomoon/style.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <div class="site-wrap">
        <header class="site-navbar" role="banner">
          <div class="site-navbar-top" style={{ height: "5vh" }}>
            <div class="container">
              <div class="row align-items-center">
                <div class="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                  <form action="" class="site-block-top-search">
                    <span class="icon icon-search2"></span>
                    <input
                      type="text"
                      class="form-control border-0"
                      placeholder="Search"
                    />
                  </form>
                </div>

                <div class="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                  <div class="site-logo" style={{ marginTop: -20 }}>
                    <a href="index.html" class="js-logo-clone">
                      <img src="/images/logo.jpg" alt="" width="100px" />
                    </a>
                  </div>
                </div>

                <div class="col-6 col-md-4 order-3 order-md-3 text-right">
                  <div class="site-top-icons">
                    <ul>
                      <li>
                      <NavLink to="/profile">

                          <span class="icon icon-person"></span>
                          </NavLink>
                      </li>
            
                      <li>
                        <NavLink to="/cart" class="site-cart">
                          <span class="icon icon-shopping_cart"></span>
                          <span class="count">2</span>
                        </NavLink>
                      </li>
                      <li class="d-inline-block d-md-none ml-md-0">
                        <a
                          href="#id"
                          className="site-menu-toggle js-menu-toggle"
                        >
                          <span class="icon-menu"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav
            class="site-navigation text-right text-md-center"
            role="navigation"
          >
            <ul class="site-menu js-clone-nav d-none d-md-block">
              <li class=" active">
                <NavLink to="/">Home</NavLink>
              </li>
              <li class="">
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
              <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
              <NavLink to="/category">Categories</NavLink>
              </li>
            
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
