import React, { Component } from 'react';
import { Route, Switch, HashRouter } from "react-router-dom";
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
    const getCookie = document.cookie;
    const isLoggedIn = getCookie.split('=')[1];
    this.state = {
      isLoggedIn: isLoggedIn
    }
    // console.log('안먹니?');
  }

  async componentDidMount() {
    const isLoggedIn = await axios.get('/mongo/checkUser');
    if (isLoggedIn) {

      this.setState({
        isLoggedIn: isLoggedIn
      })
    }
  }
  login = (cbData) => {
    this.setState({
      isLoggedIn: cbData,
    })
  }

  componentDidUpdate() {
    console.log(document.cookie)
    // this.setState({
    //   isLoggedIn: 
    // })
  }

  render() {
    console.log(this.state.isLoggedIn);
    return (
      <HashRouter>
        <Route>
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
        <Route path="/main/myinfo" rcomponent={Myinfo} />
        <Route path="/main/signup" component={Signup} />
        <Route path="/detail/:id" component={Detail} />
      </div>
      </Route>
      </HashRouter>
    );
  }
}
export default App;
