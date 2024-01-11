import React from "react";

const NavBar = (props) => {
  return React.createElement(
    "div",
    { id: "NavBar", className: "nabBarClass" },
    React.createElement("h1", null, props.name)
  );
};

export default NavBar;
