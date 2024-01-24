const heading = React.createElement(
    "h1",
    {
      id: "title", //came from inside the root div
    },
    "Bismillah React!"
  ); //{} is ? this is write from root child.

  const heading2 = React.createElement("h2", {
      {
      id: "title", //came from inside the root div
    },
  }, "heading2");

  const container = React.createElement("div", {
      {
      id: "title", //came from inside the root div
    },
  }, [heading1, heading2]); //passing children over here

  const root = ReactDOM.createRoot(document.getElementById("root"));

  // passing a react element inside the root
  root.render(container);