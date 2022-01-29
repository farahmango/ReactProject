// import "../css/bootstrap/bootstrap-grid.css";
// import "../css/bootstrap/bootstrap-reboot.css";
// import "../css/aos.css";
// import "../css/bootstrap.min.css";
// // import '../css/jquery-ui.css'
// import "../css/magnific-popup.css";
// // import '../css/owl.carousel.min.css'
// // import '../css/owl.theme.default.min.css'
// import "../css/style.css";
// import "../fonts/icomoon/style.css";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: localStorage.getItem("loggedIn"),
    };
  }
  componentDidMount() {
    this.forceUpdate()
  }


  render() {
    return (
      <header className="site-navbar" role="banner">
        <div className="site-navbar-top" style={{ height: "5vh" }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                <form action="" className="site-block-top-search">
                  <span className="icon icon-search2"></span>
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Search"
                  />
                </form>
              </div>

              <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
                <div className="site-logo" style={{ marginTop: -20 }}>
                  <NavLink to="/" className="js-logo-clone">
                    <img src="/frutes/logo2.jpg" alt="" width="100px" />
                  </NavLink>
                </div>
              </div>

              <div className="col-6 col-md-4 order-3 order-md-3 text-right">
                <div className="site-top-icons">
                  <ul>
                    <li>
                      <NavLink to="/profile">
                        <span className="icon icon-person"></span>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to="/cart" className="site-cart">
                        <span className="icon icon-shopping_cart"></span>
                        <span className="count">2</span>
                      </NavLink>
                    </li>
                    <li className="d-inline-block d-md-none ml-md-0">
                      <a href="#id" className="site-menu-toggle js-menu-toggle">
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
          <ul className="site-menu js-clone-nav d-none d-md-block">
            <li className=" active">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="">
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
        
              <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
         
              <li>
                 <NavLink to="/login">Login</NavLink>
              </li>
           
          
              <li>
               <NavLink to="/register">Register</NavLink> 
              </li>
       
          </ul>
        </nav>
      </header>
    );
  }
}
