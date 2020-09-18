import React, { Component } from "react";

class ItemUpload extends Component {
  state = {};
  render() {
    return (
      <form>
        <input id="itemUploadName" type="text" placeholder="Name"></input>
        <input
          id="itemUploadDescription"
          type="text"
          placeholder="Description"
        ></input>
        <input id="itemUploadPrice" type="text" placeholder="Price"></input>
        <input id="itemUploadExpiry" type="text" placeholder="Expiry"></input>
        <input id="itemUploadPicture" type="text" placeholder="Picture"></input>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default ItemUpload;
