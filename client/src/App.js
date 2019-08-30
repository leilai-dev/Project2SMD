import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import { Login, Myinfo, Mylist, Signup, Detail } from 'pages';
import SearchBar from './SearchBar';
import Cards from './cardList';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
// var currentTimeDate = new Date();

class App extends Component {
  constructor(props) {
    super(props)
    console.log(document.cookie);
    // 
    let isLoggedIn = false;
    const getCookie = document.cookie.split(';');
    for (let elem of getCookie) {
      const tempArr = elem.split("=");
      if (tempArr[0] === "isLoggedIn") {
        isLoggedIn = tempArr[1];
      }
    }
    this.state = {
      isLoggedIn: isLoggedIn
    }
    // console.log('안먹니?');
  }

  login = (cbData) => {
    this.setState({
      isLoggedIn: cbData,
    })
  }
  logout = (cbData) => {
    this.setState({
      isLoggedIn: cbData,
    })
  }
  componentDidUpdate() {
    console.log(document.cookie);
    // this.setState({
    //   isLoggedIn: 
    // })
  }

  render() {
    console.log(this.state.isLoggedIn);
    return (
      <BrowserRouter>
        <Route>
          <div className="App">
            <div className="bigdiv">

              <div className="ndiv1">
                <Navbar isLoggedIn={this.state.isLoggedIn} logoutCallback={this.logout} />
              </div>

              <div className="ndiv2">
                <SearchBar />
              </div>
            </div>

            {/* <PropsRoute exact path="/" component={Cards} data={this.state.asshole} /> */}
            {/* <Route exact path="/" render={() => <Cards data={this.state.asshole} />} />*/}
            <Switch>
              <Route path="/main/login/:name" component={Login} />
              <Route path="/main/login" render={() => <Login loginCallback={this.login} />} />
            </Switch>
            <Route exact path="/" render={(props) => <Cards {...props} />} />

            <Route path={`/search/:value`} render={(props) => <Cards {...props} />} />

            <Route path="/main/mylist" component={Mylist} />
            <Route path="/main/myinfo" render={() => <Myinfo loginCallback={this.login} />} />
            <Route path="/main/signup" component={Signup} />
            <Route path="/detail/:id" component={Detail} />
          </div>
        </Route>
      </BrowserRouter>
    );
  }
}
export default App;
