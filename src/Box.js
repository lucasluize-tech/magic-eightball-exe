import React from "react";
import "./Box.css";
const Box = ({ id, color }) => {
  return (
    <div
      style={{ height: "30px", width: "30px" }}
      className={color}
      id={id}></div>
  );
};

export default Box;
