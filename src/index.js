// To concatinate to variables and add expression to HTML
import React from "react";
import ReactDOM from "react-dom";
const Fname = "Jipsa";
const Lname = "Varkey";

ReactDOM.render(
  <div>
    <h1>Hello {Fname + " " + Lname}</h1>
    <p>My lucky number is {3 + 4}</p>
  </div>,
  document.getElementById("root")
);
