import React from "react";
import logo from "./logo.svg";
import "./main.css";

const Main = () => {
  return (
    <>
      <header className="App-header">
        <h1 className="hello">Hello Vytautas</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World!</p>
        <p>Let's start</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </header>
    </>
  );
};

export default Main;
