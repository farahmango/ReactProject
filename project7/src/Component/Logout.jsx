import React, { Component } from "react";
import { Navigate } from "react-router";
class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loggedIn:true
    };
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    this.logout();
  }

  logout = () => {
    localStorage.clear();
 
  };

  render() {
    return (
      <React.Fragment>
        <Navigate to="/login" replace={true} />
      </React.Fragment>
    );
  }
}

export default Logout;
