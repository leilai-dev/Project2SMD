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

    // 로그인 상태 초기값 설정
    let isLoggedIn = false;
    // document.cookie ==> "a=1; b=2; c=3; ..."
    // 쿠키값을 배열로 저장
    const getCookie = document.cookie.split(';');
    // 각 배열 요소마다 isLoggedIn값이 있는지 확인 후
    for (let elem of getCookie) {
      const tempArr = elem.split("=");
      if (tempArr[0] === "isLoggedIn") {
        // 값이 true일 경우 true값 isLoggedIn 변수에 저장
        isLoggedIn = (tempArr[1].charAt(0) === 't');
      }
    }
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
            <Route path="/main/leave"  render={() => <Leave loginCallback={this.login} />}/>
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
