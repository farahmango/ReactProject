import React, { Component } from "react";
import { Header } from "../Component/Header";
import { Test } from "../Component/Testemonial";
import { NavLink,Link } from "react-router-dom";
import axios from "axios";


export class Body extends Component {

  state={

  }

  receivedData() {
    axios
      .get(`http://127.0.0.1/ReactProject/project7/src/Component/shop.php`)
      .then((res) => {
        const data = res.data;
        const postData = data.slice(0, 8).map((pd) => (
         
            <div
              className="col-lg-3 col-sm-5  mb-3 d-flex flex-column align-items-center"
              key={pd.product_id}
            >
              <Link to={"/single-product/" + pd.product_id}>
              <div className="col d-flex flex-column align-items-center order-last">
                 <div className="card" style={{ width: "15rem", border: "none" }}>
                  <img src={pd.image} className="card-img-top" alt="..." />
                   <div style={{ height: "12vh" }}>
                     <h5 className="card-title" style={{ color: "black" }}>
                     {pd.product_name}
                     </h5>
                     <p style={{ color: "black", fontSize: 20 }}>£{pd.product_price} </p>
                   </div>
                 </div>
               </div>
              </Link>
            </div>
        
        ));

        this.setState({
          postData,
        });
      });
  }

  componentDidMount() {
    this.receivedData();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div style={{ margin: "100px 0 20px 0" }}>
          <div className="col-md-12 site-section-heading text-center pt-4 my-5">
            <h2>Our Best Sellers</h2>
            <p style={{ fontSize: "20px" }}>
              With so many different fresh rare exotic fruit in stock in can be
              hard to
              <br /> choose, here is our current Top 8 in stock items rated by
              our customers -
            </p>
          </div>

          <div className="container">
            <div className="row">

            {this.state.postData}
            
              
            </div>
          </div>

          {/* **** */}
        </div>

        {/* header 2  */}

        <div
          className="site-blocks-cover2 d-flex flex-column justify-content-center"
          style={{ backgroundImage: "url(/frutes/i1.jpg)", marginTop: "50px" }}
        >
          <div className="container ">
          
              <div className="col-md-12 text-center  text-md-left pt-5 pt-md-0 text-md-center">
                <h1
                  className="mb-2  "
                  style={{
                    fontsize: 30,
                    fontWeight: 400,
                    textShadow: "1px 1px 2px black",
                    color: " #000",
                  }}>
                  Buy Exotic Fruit Online Today
                </h1>
                <div className="intro-text text-center text-md-center">
                  <p className="mb-4" style={{ fontSize: "20px", color: "black" }}>
                    See all the juicy, sweet and ready to eat exotic fruits we
                    currently have in stock
                  </p>
                  <p>
                    <NavLink to="/shop"  className="btn btn-sm btn-dark">
                        Shop Now
                    </NavLink>
                  </p>
                </div>
              </div>
            
          </div>
        </div>

        {/* header 3  */}

        <div
          className="col-md-12 site-section-heading text-center pt-4"
          style={{ margin: "100px 0 20px 0" }}>
          <h2>New Fruites Added Weakly</h2>
          <p style={{ fontSize: "20px" }}>
            With over 3,000 different fruits on the planet were certain you
            haven't tried <br /> them all. Each week we aim to tantalise your
            tastebuds and offer you
            <br /> something new, check out the latest additions to our online
            store -{" "}
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col d-flex flex-column align-items-center order-last">
              <div className="card" style={{ width: "15rem", border: "none" }}>
                <Link to="shop"><img src="/frutes/p01.jpg" className="card-img-top" alt="..." /></Link>
                <div style={{ height: "12vh" }}>
                  <h5 className="card-title" style={{ color: "black" }}>
                    Melon - Pepino
                  </h5>
                  <p style={{ color: "black", fontSize: 20 }}>£3.95 </p>
                </div>
              </div>
            </div>

            <div className="col d-flex flex-column align-items-center  order-first">
              <div className="card" style={{ width: "15rem", border: "none" }}>
                <img src="/frutes/p02.jpg" className="card-img-top" alt="..." />
                <div style={{ height: "12vh" }}>
                  <h5 className="card-title" style={{ color: "black" }}>
                    Plum-Marian/Mango
                  </h5>
                  <p style={{ color: "black", fontSize: 20 }}>£3.95 </p>
                </div>
              </div>
            </div>
            <div className="col d-flex flex-column align-items-center order-first">
              <div className="card" style={{ width: "15rem", border: "none" }}>
                <img src="/frutes/p03.jpg" className="card-img-top" alt="..." />
                <div style={{ height: "12vh" }}>
                  <h5 className="card-title" style={{ color: "black" }}>
                    Sweetie Fruit
                  </h5>
                  <p style={{ color: "black", fontSize: 20 }}>£4.95 </p>
                </div>
              </div>
            </div>
            <div className="col d-flex flex-column align-items-center order-first">
              <div className="card" style={{ width: "15rem", border: "none" }}>
                <img src="/frutes/p04.jpg" className="card-img-top" alt="..." />
                <div style={{ height: "12vh" }}>
                  <h5 className="card-title" style={{ color: "black" }}>
                    Peach/Flat
                  </h5>
                  <p style={{ color: "black", fontSize: 20 }}>£5.75 </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* testimonial  */}
        <Test />
      </React.Fragment>
    );
  }
}
