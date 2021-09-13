import React from "react";
import ReactDOM from "react-dom";

const today = new Date();
const time = today.getHours();

let currentTime = "";

const timeColor = {
  color: ""
};

if (time >= 0 && time <= 12) {
  currentTime = "Good Morning";
  timeColor.color = "red";
} else if (time >= 12 && time <= 18) {
  currentTime = "Good Afternoon";
  timeColor.color = "green";
} else {
  currentTime = "Good Evening";
  timeColor.color = "blue";
}

const rootID = document.getElementById("root");

ReactDOM.render(
  <h1 className="heading" style={timeColor}>
    {currentTime}
  </h1>,
  rootID
);