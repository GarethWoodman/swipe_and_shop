import React from 'react';

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  myChangeHandler = (event) => {
    let attribute = event.target.id;
    let value = event.target.value;
    this.setState({ [attribute]: value});
  }

  // handleSubmit = (event) => {
  //   const payload = {
  //     email: this.state.email,
  //     password: this.state.password
  //   }

  //   axios
  //     .get("/user")
  //     .then((response) => {
  //       var data = response.data;
  //       this.setState({ items: data });
  //       // console.log(data)
  //       console.log("Data has been recieved");
  //     })
  //     .catch(() => {
  //       alert("Error retrieving data!!!");
  //     });
  // };

    
}