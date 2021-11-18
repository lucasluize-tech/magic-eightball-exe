import React, { useState } from "react";
import pickRandom from "./helpers";
import "./Eightball.css";

const EightBall = ({ awnsers }) => {
  const [color, setColor] = useState("black");
  const [msg, setMsg] = useState("Think of a question");
  const [count, setCount] = useState(0);
  const [colors, setColors] = useState([]);

  const restartBall = (colors) => {
    colors.includes(color) ? setColors(colors) : setColors([...colors, color]);
    colors.length === 3 ? setCount(count + 1) : setCount(count);
    setColor("black");
    setMsg("Think of a question");
  };
  const ballAwnser = () => {
    let awnser = pickRandom(awnsers);
    setColor(awnser.color);
    setMsg(awnser.msg);
  };

  return (
    <>
      {color === "black" ? (
        <div className={color} onClick={() => ballAwnser()}>
          <p className='msg'>{msg}</p>
        </div>
      ) : (
        <div className={color} onClick={() => restartBall(colors)}>
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
