import React from "react";
import "./CheckBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const CheckBtn = props => (
  <button className="check-btn" {...props}>
    O
  </button>
);

export default CheckBtn;
