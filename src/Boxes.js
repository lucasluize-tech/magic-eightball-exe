import React from "react";
import Box from "./Box.js";
import "./Boxes.css";

const Boxes = ({ num_boxes, colors }) => {
  const randomColor = (colors) => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  let allBoxes = [];
  for (let i = 0; i < num_boxes; i++) {
    allBoxes.push(<Box key={i} color={randomColor(colors)} />);
  }
  const changeColor = () => {
    // select box at random from the list of boxes
    const pick = allBoxes[Math.floor(Math.random() * allBoxes.length)];
    const other = allBoxes[Math.floor(Math.random() * allBoxes.length)];
    const box = document.querySelector(`.${pick.props.color}`);
    box.className = randomColor(colors);
  };

  return (
    <>
      <div className='Boxes'>{allBoxes.map((box) => box)}</div>
      <button onClick={changeColor}>change</button>
    </>
  );
};

export default Boxes;
