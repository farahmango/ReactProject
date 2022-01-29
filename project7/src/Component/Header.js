import React, {Component} from 'react'
import { NavLink } from "react-router-dom";
export class Header extends Component {
    render() {

      return (
      
    <div className="site-blocks-cover" style={{ backgroundImage: "url(/frutes/i2.jpg)" }} >
    <div className="container">
      <div style={{ padding:'200px 0 0 0' }}>
        <div className="col-md-12 text-center text-md-left pt-5 pt-md-0 text-md-center">
          <h1 className="mb-2 h1 ">UK's #1 Exotic Fruit Supplier</h1>
          <div className="intro-text text-center text-md-center">
            <p className="mb-4 h2" >Juicy, sweet and ready to eat exotic fruit delivered to your door   </p>
            <p>
              <NavLink to="/shop" >Shop Now</NavLink>  
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  


      )}
}