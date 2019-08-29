import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Login, Myinfo, Signup, Detail, Leave } from 'pages';
import SearchBar from './SearchBar';
import Cards from './cardList';
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    console.log(document.cookie);
    const getCookie = document.cookie;
    const isLoggedIn = getCookie.split('=')[1];
    this.state = {
      isLoggedIn: isLoggedIn
    }
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
            <Switch>
              <Route path="/main/login/:name" component={Login} />
              <Route path="/main/login" render={() => <Login loginCallback={this.login} />} />
            </Switch>

            <Route exact path="/" render={(props) => <Cards {...props} />} />
            <Route path="/main/myinfo" render={() => <Myinfo loginCallback={this.login} />} />
            <Route path="/main/leave" component={Leave} />
            <Route path="/main/signup" component={Signup} />

            <Route path={`/search/:value`} render={(props) => <Cards {...props} />} />
            <Route path="/detail/:id" component={Detail} />
          </div>
        </Route>
      </BrowserRouter>
    );
  }
}
export default App;
