//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const fistName = "Andal";
const secondName = "Mustermann";
const favNumber = 7;

ReactDOM.render(
  <div>
    <h1>Fav fruits</h1>
    <ul>
      <li>Banana</li>
      <li>Orange</li>
      <li>Kiwi</li>
    </ul>
  </div>,
  document.getElementById("root")
);

/*
ReactDOM.render(
  <div>
    <h1>Sers {fistName} 
    {secondName} </h1>
    <p>
      My fav Number is {favNumber}
    </p>
  </div>,
  document.getElementById("root")
);
*/
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
