import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { Home, Login, Myinfo, Mylist, Signin, Detail } from 'pages';
import SearchBar from './SearchBar';
import Cards from './cardList';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Basicinfo } from './pages';

var currentTimeDate = new Date();

class App extends Component {
  constructor(props) {
    super(props)
    console.log(document.cookie);
    const getCookie = document.cookie;
    const isLoggedIn = getCookie.split('=')[1];
    this.state = {
      isLoggedIn: isLoggedIn
    }
    // console.log('안먹니?');
  }

  // async componentDidMount() {
  //   const isLoggedIn = await axios.get('/mongo/checkUser');
  //   if (isLoggedIn) {

  //     this.setState({
  //       isLoggedIn: isLoggedIn
  //     })
  //   }
  // }

  componentDidMount() {
    // getCookie()
  }

  login = (cbData) => {
    this.setState({
      isLoggedIn: cbData,
    })
  }

  componentDidUpdate() {
    // console.log("app didUpdate");
    console.log(document.cookie)
    // this.setState({
    //   isLoggedIn: 
    // })
  }

  render() {
    return (
      <div className="App">
        <div className="bigdiv">

          <div className="ndiv1">
            <Navbar isLoggedIn={this.state.isLoggedIn} />
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
        <Route path="/main/myinfo" component={Myinfo} />
        <Route path="/main/signin" component={Signin} />
        <Route path="/detail/:id" component={Detail} />

        {/* <Cards data={this.state.asshole}></Cards>  */}
      </div>
    );
  }
}
export default App;
