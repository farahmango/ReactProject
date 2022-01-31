import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Profile extends Component {
  render() {
    let user = JSON.parse(localStorage.getItem("currentUser"));

    return (
      <div className="container4">
        <div className="main-body4">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card4">
                <div className="card-body4">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>{user.name}</h4>
                      <p className="text-muted font-size-sm">
                      {user.address}
                      </p>
                      <button className="btn btn-dark b4">
                        <NavLink to="/logout" className="text-white">
                          Logout
                        </NavLink>
                      </button>
                      <button className="btn btn-outline-dark b4">
                      <NavLink to="/weather" className="text-white">
                          See The Weather
                        </NavLink>                     
                         </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{user.name}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{user.email}</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{user.phone}</div>
                  </div>
                  <hr />
              
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{user.address}</div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
