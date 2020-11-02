import React from "react";

function InputBox(props) {
  return (
    <div className="form-group">
      <input
        id={props.id}
        className="form-control"
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onChange}
      />
    </div>
  );
}

export default InputBox;
