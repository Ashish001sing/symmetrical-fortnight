import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
// ✅ Use 'react-dom/client' for createRoot
const date = new Date();
const hour = date.getHours();
const customStyle = {
  color: "",
};
let greeting;
if (hour >= 18) {
  (greeting = "good night"), (customStyle.color = "red");
} else {
  (greeting = "good morning"), (customStyle = "green");
}

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Pass only the DOM element
root.render(<div style={customStyle}>{greeting}</div>);
