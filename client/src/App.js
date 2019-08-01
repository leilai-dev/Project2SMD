import React from "react";
import { Route, HashRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      {/* <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <a className="App-link" href="/api/greeting">
          Greeting
        </a>
      </header> */}
      <form method="post" action="/mongo/signup" style={{paddingTop: 100}}>
        <input type="text" name="userid" />
        <input type="text" name="password" />
        <input type="text" name="name" />
        <input type="text" name="email" />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
