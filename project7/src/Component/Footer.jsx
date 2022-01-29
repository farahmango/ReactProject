import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export class Footer extends Component {
  render() {
    return (
      <footer className="site-footer border-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-5 mb-lg-0">
              <div className="row w-100">
                <div className="col-md-4 col-lg-4">
                  <h3 className="footer-heading mb-4">Quic Links</h3>
                  <ul className="list-unstyled">
                    <li className=" active">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="">
                      <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                      <NavLink to="/shop">Shop</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-lg-4 mb-4 mb-lg-0">
                  <h3 className="footer-heading mb-4">Weather</h3>
              
                    <p>
                      <NavLink to="/weather">See Weather</NavLink>
                    </p>
               
                </div>
                <div className="col-md-4 col-lg-4">
                <div className="block-5 mb-5">
                  <h3 className="footer-heading mb-4">Contact Info</h3>
                  <ul className="list-unstyled">
                    <li className="address">Amman, Jordan</li>
                    <li className="phone">
                      <p>+2 392 3929 210</p>
                    </li>
                    <li className="email">emailaddress@domain.com</li>
                  </ul>
                </div>

                <div className="block-7"></div>
              </div>
              </div>
              
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p>
                Copyright &copy;
                <script
                  data-cfasync="false"
                  src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
                ></script>
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="icon-heart" aria-hidden="true"></i> by{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
