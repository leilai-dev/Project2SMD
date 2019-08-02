import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { Home, Login, Myinfo, Mylist, Signin } from 'pages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a className="App-link" href="/api/greeting">
            Greeting
        </a>
        </header>
        <div>
          
        <Route exact path="/" component={Home}/>
          <Switch>
            <Route path="/main/login:name" component={Login}/>
            <Route path="/main/login" component={Login}/>
          </Switch>
          
          <Route path="/main/mylist" component={Mylist}/>
          <Route path="/main/myinfo" component={Myinfo}/>
          <Route path="/main/signin" component={Signin}/>
        </div>

      </div>
    );
  }
}
export default App;
