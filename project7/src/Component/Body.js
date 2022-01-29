import React, { Component } from "react";
import { Header } from "../Component/Header";
import { Test } from "../Component/Testemonial";
import { NavLink } from "react-router-dom";

export class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div style={{ margin: "100px 0 20px 0" }}>
          <div className="col-md-12 site-section-heading text-center pt-4">
            <h2>Our Best Sellers</h2>
            <p style={{ fontSize: "20px" }}>
              With so many different fresh rare exotic fruit in stock in can be
              hard to
              <br /> choose, here is our current Top 10 in stock items rated by
              our customers -
            </p>
          </div>

          <div className="container">
            <div className="row">
              <div className="col order-last">
                <div className="card" style={{ width: "15rem", border: "none" }}>
                  <img src="/frutes/p01.jpg" className="card-img-top" alt="..." />
                  <div style={{ height: "12vh" }}>
                    <h5 className="card-title" style={{ color: "black" }}>
                      Melon - Pepino
                    </h5>
                    <p style={{ color: "black", fontSize: 20 }}>£3.95 </p>
                  </div>
                </div>
              </div>

              <div className="col order-first">
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
              <div className="col order-first">
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
              <div className="col order-first">
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

          <div className="container">
            <div className="row">
              <div className="col order-last">
                <div className="card" style={{ width: "15rem", border: "none" }}>
                  <img src="/frutes/p05.jpg" className="card-img-top" alt="..." />
                  <div style={{ height: "12vh" }}>
                    <h5 className="card-title" style={{ color: "black" }}>
                      Lime-Kaffir/Makrute
                    </h5>
                    <p style={{ color: "black", fontSize: 20 }}>£3.99 </p>{" "}
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" style={{ width: "15rem", border: "none" }}>
                  <img src="/frutes/p11.jpg" className="card-img-top" alt="..." />
                  <div style={{ height: "12vh" }}>
                    <h5 className="card-title" style={{ color: "black" }}>
                      Dragon Fruit/Pitaya-Red
                    </h5>
                    <p style={{ color: "black", fontSize: 20 }}>£3.15 </p>{" "}
                  </div>
                </div>
              </div>
              <div className="col order-first">
                <div className="card" style={{ width: "15rem", border: "none" }}>
                  <img src="/frutes/p07.jpg" className="card-img-top" alt="..." />
                  <div style={{ height: "12vh" }}>
                    <h5 className="card-title" style={{ color: "black" }}>
                      Passion Fruit-Banana/Curuba
                    </h5>
                    <p style={{ color: "black", fontSize: 20 }}>£2.24 </p>{" "}
                  </div>
                </div>
              </div>
              <div className="col order-first">
                <div className="card" style={{ width: "15rem", border: "none" }}>
                  <img src="/frutes/p08.jpg" className="card-img-top" alt="..." />
                  <div style={{ height: "12vh" }}>
                    <h5 className="card-title" style={{ color: "black" }}>
                      Plum-Marian/Mango
                    </h5>
                    <p style={{ color: "black", fontSize: 20 }}>£3.95 </p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* header 2  */}

        <div
          className="site-blocks-cover2"
          style={{ backgroundImage: "url(/frutes/i1.jpg)", marginTop: "50px" }}
        >
          <div className="container">
            <div style={{ padding: "200px 0 0 0" }}>
              <div className="col-md-12 text-center text-md-left pt-5 pt-md-0 text-md-center">
                <h1
                  className="mb-2  "
                  style={{
                    fontsize: 30,
                    fontWeight: 400,
                    textShadow: "1px 1px 2px black",
                    color: " #000",
                  }}
                >
                  Buy Exotic Fruit Online Today
                </h1>
                <div className="intro-text text-center text-md-center">
                  <p className="mb-4" style={{ fontSize: "20px", color: "black" }}>
                    See all the juicy, sweet and ready to eat exotic fruits we
                    currently have in stock{" "}
                  </p>
                  <p>
                    {/*  */}
                    <NavLink to="/shop"  className="btn btn-sm btn-dark">
                    
                        Shop Now
                     
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* header 3  */}

        <div
          className="col-md-12 site-section-heading text-center pt-4"
          style={{ margin: "100px 0 20px 0" }}
        >
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
            <div className="col order-last">
              <div className="card" style={{ width: "15rem", border: "none" }}>
                <img src="/frutes/p01.jpg" className="card-img-top" alt="..." />
                <div style={{ height: "12vh" }}>
                  <h5 className="card-title" style={{ color: "black" }}>
                    Melon - Pepino
                  </h5>
                  <p style={{ color: "black", fontSize: 20 }}>£3.95 </p>
                </div>
              </div>
            </div>

            <div className="col order-first">
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
            <div className="col order-first">
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
            <div className="col order-first">
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
