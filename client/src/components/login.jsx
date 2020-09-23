import React, { Component } from 'react';

class Login extends Component {
  state = {
    emailLogin: "",
    passwordLogin: ""
  };

  myChangeHandler = (event) => {
    let attribute = event.target.id;
    let value = event.target.value;
    this.setState({ [attribute]: value});
  }

  handleSubmit = (event) => {
    const payload = {
      email: this.state.email,
      password: this.state.password
    }

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
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <p>email:</p>
          <input id="emailLogin" type="text" onChange={this.myChangeHandler} />

          <p>password:</p>
          <input id="passwordLogin" type="text" onChange={this.myChangeHandler} />
        </form>
      </div>
    )
  }
}

export default Login;