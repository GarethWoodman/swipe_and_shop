import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    emailLogin: "",
    passwordLogin: "",
  };

  myChangeHandler = (event) => {
    let attribute = event.target.id;
    let value = event.target.value;
    this.setState({ [attribute]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const payload = {
      email: this.state.emailLogin,
      password: this.state.passwordLogin,
    };

    console.log(payload)

    axios({
      method: "post",
      url: "/user/login",
      data: payload,
    })
    // Called if server provides response
      .then((response) => {
        if(response.data.length == 0) {
          console.log("Wrong info mate")
        } else {
          console.log("Login accepted")
          this.props.pageSetter("Buy")
        }
      })
      // Called if server is unresponsive
      .catch(() => {
        console.log("Internal Server Error");
      });

    // this.props.pageSetter("Buy");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.onSubmit}>
          <p>email:</p>
          <input id="emailLogin" type="text" onChange={this.myChangeHandler} />

          <p>password:</p>
          <input
            id="passwordLogin"
            type="text"
            onChange={this.myChangeHandler}
          />

          <button id="loginSubmit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
