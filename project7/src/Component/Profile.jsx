import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Profile extends Component {
 
  render() {
let user =JSON.parse(localStorage.getItem('currentUser'))


    return (


<div class="container4">
    <div class="main-body4">
    
        
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card4">
                <div class="card-body4">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>John Doe</h4>
                      <p class="text-secondary mb-1">Full Stack Developer</p>
                      <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      <button class="btn btn-dark b4">
                <NavLink to="/logout" className="text-white">Logout</NavLink>
             </button>
                      <button class="btn btn-dark b4">
                      <NavLink to="/weather" className="text-white">See Weather</NavLink>

                      </button>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                  
                     {user.name}
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {user.email}   
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {user.phone}
                  </div>
                  </div>
               
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {user.address} 
                      </div>
                  </div>
                  <hr/>
                 
                </div>
              </div>




            </div>
          </div>

        </div>
    </div>




 ) }
}

