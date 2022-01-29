import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import axios from "axios";
//import { Route, Navigate } from "react-router-dom";
import { Navigate } from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      users: [],
      errors: {},
      loggedIn: false,
      redirect: false,
    };
    this.submitHandler = this.submitHandler.bind(this);
  }
  setValue = (e) => {
    this.setState({ errors: "" });
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
    });
  };

  submitHandler = (event) => {
    let isValid = true;
    let errors = {};
    let emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    axios
      .get("http://localhost/reactProject/project/api.php")
      .then((response) => {
        this.setState({
          users: response.data,
        });
      });
      
    //Email Validation
    if (this.state.email === "") {
      errors["email"] = "This field is required!";
      isValid = false;
    } else if (!emailRegex.test(this.state.email)) {
      errors["email"] = "It is not valid email";
      isValid = false;
    }

    //password Validation
    if (this.state.password === "") {
      errors["password"] = "This field is required!";
      isValid = false;
    } else if (!passRegex.test(this.state.password)) {
      errors["password"] = "It should be more than 8 character";
      isValid = false;
    }

    let user = this.state.users.filter((user) => {
      if (
        user.email == this.state.email &&
        user.password == this.state.password
      ) {
        isValid = true;
        localStorage.setItem("currentUser", JSON.stringify(user));
        this.setState({
          loggedIn: true,
        });
      } else {
        isValid = false;
      }
    });
    this.setState({ errors: errors });

    
      event.preventDefault();
    
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loggedIn === true ? <Navigate to="/shop" replace={true} /> : ""}
        <section className="sign-in">
          <div className="container signup">
            <div className="signin-content">
              <div className="signin-image">
                <figure>
                  <img
                    className="rounded h-75"
                    src="images/signin-image.jpg"
                    alt="tropical fruits"
                  />
                </figure>
              </div>

              <div className="signin-form">
                <h2 className="form-title">Login</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="login-form"
                  onSubmit={this.submitHandler}
                >
                  <div className="form-group">
                    <label htmlFor="your_name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      onChange={this.setValue}
                    />
                    <small className="text-danger">
                      {this.state.errors["email"]}
                    </small>
                  </div>
                 
                  <div className="form-group">
                    <label htmlFor="your_pass">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="your_pass"
                      placeholder="Password"
                      onChange={this.setValue}
                    />
                    <small className="text-danger">
                      {this.state.errors["password"]}
                    </small>
                  </div>

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="submit"
                      id="submit"
                      className="form-submit"
                      value="Log in"
                    />
                  </div>
                  <div className="form-group " id="link-signup">
                    <NavLink to="/register" className="signup-image-link">
                      Create an account
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Login;
