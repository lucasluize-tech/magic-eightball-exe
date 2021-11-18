import React from "react";
import "./App.css";
import awnsers from "./awnsers";
import EightBall from "./Eightball";
import Boxes from "./Boxes";
import colors from "./colors.js";

function App() {
  return (
    <div className='App'>
      <EightBall awnsers={awnsers} />
      <Boxes num_boxes={16} colors={colors} />
    </div>
  );
}

export default App;
