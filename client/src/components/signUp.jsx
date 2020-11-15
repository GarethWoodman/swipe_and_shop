import React, { Component } from "react";
import axios from "axios";
import InputBox from "./inputBox.jsx";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      real_name: "",
      picture: "",
      to_buy: [],
      to_sell: [],
      sign_in_error: false,
    };
  }

  myChangeHandler = (event) => {
    let attribute = event.target.id;
    let value = event.target.value;
    this.setState({ [attribute]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const payload = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
      real_name: this.state.real_name,
      picture: this.state.picture,
      to_buy: [],
      to_sell: [],
    };

    axios({
      method: "post",
      url: "/user/save",
      data: payload,
    })
      // If data can be saved
      .then(() => {
        console.log("Data has been sent to the server");
        this.props.pageSetter("Login");
      })
      // If data cannot be saved
      .catch(() => {
        console.log("Internal server error");
        this.setState({ sign_in_error: true });
      });

    console.log("PROPS");
    console.log(this.props);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <section className="row justify-content-center">
          <section className="col-12 col-sm-6 col-md-3">
            <div>{this.state.sign_in_error && <h1>Wrong info</h1>}</div>
            <form className="form-signin" onSubmit={this.onSubmit}>
              <InputBox
                id={"real_name"}
                placeholder={"Real Name"}
                type={"text"}
                onChange={this.myChangeHandler}
              />

              <InputBox
                id={"username"}
                placeholder={"Username"}
                type={"text"}
                onChange={this.myChangeHandler}
              />

              <InputBox
                id={"email"}
                placeholder={"Email address"}
                type={"email"}
                onChange={this.myChangeHandler}
              />

              <InputBox
                id={"password"}
                placeholder={"Password"}
                type={"password"}
                onChange={this.myChangeHandler}
              />

              <InputBox
                id={"picture"}
                placeholder={"Picture URL"}
                type={"text"}
                onChange={this.myChangeHandler}
              />

              <button
                id="userSubmit"
                className="btn btn-lg btn-primary btn-block"
                type="submit"
              >
                Create Account
              </button>

              <hr />
              <button
                id={"login"}
                value={"Login"}
                className="btn btn-lg btn-success btn-block"
                onClick={() => this.props.pageSetter("Login")}
              >
                Sign In
              </button>

              {/* <Button id={"login"} value={"Login"} pageSetter={this.pageSetter} /> */}
            </form>
          </section>
        </section>
      </div>
    );
  }
}

export default SignUp;
