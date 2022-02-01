import react from "react";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import YouTube from 'react-youtube';
import { Nav } from "./Nav";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const opts = {
      height: "400",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <React.Fragment>
         
      <Nav />
        <div className="bg-light py-3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-0">
                <NavLink to="/">Home</NavLink> <span className="mx-2 mb-0">/</span>{" "}
                <strong className="text-black">About</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section border-bottom" >
          <div className="container">
            <div className="row mb-6">
        
            <div className="col-md-6">
      
              <figure>
                  <YouTube videoId="CGq6uDyWofM" muted opts={opts} onReady={this._onReady} />;

                  </figure>
                  </div>

              <div className="col-md-1"></div>
              <div className="col-md-5">
                <div className="site-section-heading pt-3 mb-4">
                  <h2 className="text-black">How We Started</h2>
                </div>
                <p>
                With over 3,000 different fruits on the planet you 
                may find it hard to believe that less than 5% are readily available here in the UK. 
                That's why we're taking the time to source, taste, import and hand select some of the worlds tastiest fresh exotic fruit. 
                </p>
                <p>
                ur supply chain includes some of the most respected fruit producers from around the world who maintain some of the highest quality, food safety and social standards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="site-section border-bottom">
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-md-7 site-section-heading text-center pt-4">
                <h2>The Team</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="block-38 text-center">
                  <div className="block-38-img">
                    <div className="block-38-header">
                      <img
                        src="images/person_1.jpg"
                        alt="farah"
                        className="mb-4"
                      />
                      <h3 className="block-38-heading h4">Farah</h3>
                      <p className="block-38-subheading">CEO/Scrum-Master</p>
                    </div>
                    <div className="block-38-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae aut minima nihil sit distinctio recusandae
                     .{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="block-38 text-center">
                  <div className="block-38-img">
                    <div className="block-38-header">
                      <img
                        src="images/person_2.jpg"
                        alt="Ghosoun"
                        className="mb-4"
                      />
                      <h3 className="block-38-heading h4"> Ghosoun</h3>
                      <p className="block-38-subheading">Developer</p>
                    </div>
                    <div className="block-38-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae aut minima nihil sit distinctio recusandae
                       .{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mt-5 align-items-center">
                <div className="block-38 text-center">
                  <div className="block-38-img">
                    <div className="block-38-header">
                      <img
                        src="images/person_3.jpg"
                        alt="Osaid"
                        className="mb-4"
                      />
                      <h3 className="block-38-heading h4">Osaid</h3>
                      <p className="block-38-subheading">Product Owner</p>
                    </div>
                    <div className="block-38-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae aut minima nihil sit distinctio recusandae
                .{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>

            <div className="row mt-5 " >
              <div className="col-md-6 col-lg-6">
                <div className="block-38 text-center">
                  <div className="block-38-img">
                    <div className="block-38-header">
                      <img
                        src="images/person_2.jpg"
                        alt="Saja"
                        className="mb-4"
                      />
                      <h3 className="block-38-heading h4">Saja</h3>
                      <p className="block-38-subheading">Developer</p>
                    </div>
                    <div className="block-38-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae aut minima nihil sit distinctio recusandae
                       {" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="col-md-6 col-lg-6">
                <div className="block-38 text-center">
                  <div className="block-38-img">
                    <div className="block-38-header">
                      <img
                        src="images/person_4.jpg"
                        alt="Omar"
                        className="mb-4"
                      />
                      <h3 className="block-38-heading h4">Omar</h3>
                      <p className="block-38-subheading">Developer</p>
                    </div>
                    <div className="block-38-body">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vitae aut minima nihil sit distinctio recusandae
                     .{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>

          </div>
        </div>

  
         
       
      </React.Fragment>
    );
  }
}

export default About;