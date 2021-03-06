import React from "react";

function Button(props) {
  return (
    <button
      id={props.id}
      value={props.value}
      onClick={() => props.pageSetter(props.value)}
    >
      {props.value}
    </button>
  );
}

export default Button;
