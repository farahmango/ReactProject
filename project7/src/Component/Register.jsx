import React, { Component } from "react";
import "./Register/css/style.css";
import "./Register/fonts/material-icon/css/material-design-iconic-font.min.css";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      re_pass: "",
      errors: {},
      users: {},
      redirect: false,
    };
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

    //User Name Validation
    if (this.state.name === "") {
      isValid = false;
      errors["name"] = "This field is required!";
    }

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
    //Matched Password
    if (this.state.re_pass === "") {
      errors["passwordMatch"] = "This field is required!";
      isValid = false;
    } else if (this.state.password !== this.state.re_pass) {
      errors["passwordMatch"] = "The tow passwords do not match!";
      isValid = false;
    }

    this.setState({ errors: errors });

    if (isValid === true) {
      this.setState({
        redirect: true,
      });
      var currentUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };

      axios
        .post("http://localhost/reactProject/project/insert.php", currentUser)
        .then((res) => console.log(res.data))
        .catch((error) => {
          console.log(error.response);
        });

        window.sessionStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      event.preventDefault();
    }
  };

  render() {
    return (
      <React.Fragment>
        <section className="signup">

            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form
                  id="fupForm"
                  method="POST"
                  className="register-form"
                  id="register-form"
                  onSubmit={this.submitHandler}
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      onChange={this.setValue}
                    />
                    <small className="text-danger">
                      {this.state.errors["name"]}
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      onChange={this.setValue}
                    />
                    <small className="text-danger">
                      {this.state.errors["email"]}
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      onChange={this.setValue}
                    />
                    <small className="text-danger">
                      {this.state.errors["password"]}
                    </small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="re-pass">
                      <i className="zmdi zmdi-lock-outline"></i>
                    </label>
                    <input
                      type="password"
                      name="re_pass"
                      id="re_pass"
                      placeholder="Repeat your password"
                      onChange={this.setValue}
                    />
                    <small className="text-danger">
                      {this.state.errors["passwordMatch"]}
                    </small>
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="submit"
                      id="submit"
                      className="form-submit"
                      value="Register"
                    />
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                <img className='' src="images/signup-image.jpg" alt="sign up "/>

                </figure>
              </div>
            </div>

        </section>
      </React.Fragment>
    );
  }
}

export default Register;