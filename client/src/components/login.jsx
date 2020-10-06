import React, { Component } from "react";
import axios from "axios";
import Error from "./error.jsx";

class Login extends Component {
  state = {
    error: false,
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

    console.log(payload);

    axios({
      method: "post",
      url: "/user/login",
      data: payload,
    })
      // Called if server provides response
      .then((response) => {
        if (response.data.data.length == 0) {
          this.setState({ error: true });
        } else {
          console.log("Login accepted");
          this.props.pageSetter("Buy");

          console.log(response.data.token);
          localStorage.setItem("authToken", response.data.token);
          localStorage.setItem("user_id", response.data.data[0]._id)
          console.log(response.data.data[0]);
          this.props.usernameSetter(response.data.data[0]);
        }
      })
      // Called if server is unresponsive
      .catch(() => {
        console.log("Internal Server Error");
      });

    // this.props.pageSetter("Buy");
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Login</h1>

        {this.state.error === true && (
          <Error message={"Incorrect login information"} />
        )}

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
