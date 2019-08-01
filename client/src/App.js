import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

        <a className="App-link" href="/main/login">
          만들거야
        </a>
        
        <a className="App-link" href="/mongo">
          MongoDB TEST
        </a>
      </header>
      <form method="post" action="/mongo/signup">
        <input type="text" placeholder="userid" name="userid" />
        <input type="text" placeholder="password" name="password" />
        <input type="text" placeholder="name" name="name" />
        <input type="text" placeholder="email" name="email" />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
