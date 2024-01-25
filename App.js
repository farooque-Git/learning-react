import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1", // first argument
//   {
//     id: "title", //came from inside the root div   // second argument
//   }, // this is known as props
//   "This is Parcel" // third argument is children
// ); //{} is ? this is write from root child.
// <h1 id="title"> Learning React!</h1> This is the same thing but written in JS format

// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "title", //came from inside the root div
//   },
//   "heading2"
// );

// const container = React.createElement(
//   "div",
//   {
//     id: "title", //came from inside the root div
//   },
//   [heading, heading2]
// ); //passing children over here

//JSX Its a compiler for JavaScript

const heading = (
  <h1 id="title" key={h1}>This is JSX</h1> 
  //JSX => React createElement => Object => HTML(DOM)
)

// React Component =>

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root


//asyn defer
root.render(heading);



