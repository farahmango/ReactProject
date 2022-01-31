import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export class Footer extends Component {
  render() {
    return (
      <footer className="site-footer border-top" >
        <div style={{ textAlign:'center' }}>
        
        
              <p  style={{ margin:'auto' }}>
                Copyright &copy;
                <script
                  data-cfasync="false"
                  src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
                ></script>
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="icon-heart" aria-hidden="true"></i> 
              </p>
           
        </div>
      </footer>
    );
  }
}
