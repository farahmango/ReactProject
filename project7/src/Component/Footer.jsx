import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export class Footer extends Component {
  render() {
    return (
      <footer className="site-footer border-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Navigations</h3>
                </div>
                <div className="col-md-6 col-lg-4">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#s">Sell online</a>
                    </li>
                    <li>
                      <a href="#s">Features</a>
                    </li>
                    <li>
                      <a href="#s">Shopping cart</a>
                    </li>
                    <li>
                      <a href="#s">Store builder</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-4">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#s">Mobile commerce</a>
                    </li>
                    <li>
                      <a href="#s">Dropshipping</a>
                    </li>
                    <li>
                      <a href="#s">Website development</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-4">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#s">Point of sale</a>
                    </li>
                    <li>
                      <a href="#s">Hardware</a>
                    </li>
                    <li>
                      <a href="s#">Software</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <h3 className="footer-heading mb-4">Weather</h3>
              <a href="#id" className="block-6">
        
              <p>
              <NavLink to="/weather" >See Weather</NavLink>  
            </p>
                <p>Promo from nuary 15 &mdash; 25, 2019</p>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="block-5 mb-5">
                <h3 className="footer-heading mb-4">Contact Info</h3>
                <ul className="list-unstyled">
                  <li className="address">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </li>
                  <li className="phone">
                    <a href="tel://23923929210">+2 392 3929 210</a>
                  </li>
                  <li className="email">emailaddress@domain.com</li>
                </ul>
              </div>

              <div className="block-7">
                
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
