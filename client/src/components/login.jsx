import React, { Component } from "react";

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
    // const payload = {
    //   email: this.state.email,
    //   password: this.state.password,
    // };
    // axios
    //   .get("/user")
    //   .then((response) => {
    //     var data = response.data;
    //     this.setState({ items: data });
    //     // console.log(data)
    //     console.log("Data has been recieved");
    //   })
    //   .catch(() => {
    //     alert("Error retrieving data!!!");
    //   });

    this.props.loginSubmit();
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
