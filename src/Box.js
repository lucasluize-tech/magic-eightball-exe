import React from "react";
import "./Box.css";
const Box = ({ key, color }) => {
  return (
    <div
      style={{ height: "30px", width: "30px" }}
      className={color}
      id={key}></div>
  );
};

export default Box;
