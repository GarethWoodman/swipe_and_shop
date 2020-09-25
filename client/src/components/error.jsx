import React from "react";

function Error(props) {
  return (
    <div>
      <p id="error">{props.message}</p>
    </div>
  );
}

export default Error;