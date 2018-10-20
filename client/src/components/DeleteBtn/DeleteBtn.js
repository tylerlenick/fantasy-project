import React from "react";
import "./DeleteBtn.css";
import PlayerCard from "../PlayerCard";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <button className="delete-btn" {...props}>
    X
  </button>
);

export default DeleteBtn;
