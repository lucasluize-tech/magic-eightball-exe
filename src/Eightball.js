import React, { useState } from "react";
import pickRandom from "./helpers";
import "./Eightball.css";

const EightBall = ({ awnsers }) => {
  /* what data is changing in this component?
   color , msg, count, list of colors to count.
   what is not changing? > awnsers list [{color and msg},...]
   */
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a question");
  const [count, setCount] = useState(0);
  const [colors, setColors] = useState([]);

  const restartBall = () => {
    if (colors.length === 3) {
      setColors([]);
    }
    setColor("black");
    setMsg("Think of a question");
  };

  const checkCount = (colors) => {
    console.log(colors);
    colors.length === 3 ? setCount(count + 1) : setCount(count);
  };

  const ballAwnser = () => {
    let awnser = pickRandom(awnsers);
    setColor(awnser.color);
    setMsg(awnser.msg);
    colors.includes(awnser.color)
      ? setColors(colors)
      : setColors((colors) => {
          colors = [...colors, awnser.color];
          checkCount(colors);
          return colors;
        });
  };

  return (
    <>
      {color === "black" ? (
        <div
          className={`Ball ${color}`}
          onClick={() => {
            ballAwnser();
          }}>
          <p className='msg'>{msg}</p>
        </div>
      ) : (
        <div
          className={`Ball ${color}`}
          onClick={() => {
            restartBall();
          }}>
          <p className='msg'>{msg}</p>
        </div>
      )}
      <p>
        Times we got 3 colors : <b>{count}</b>
      </p>
    </>
  );
};

export default EightBall;
