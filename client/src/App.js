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

class App extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   asshole: { name: "a" }
    // }
    // console.log('안먹니?');
  }
  // componentDidMount() {
  //   this.getItems();
  // }
  // getItems = async () => {
  //   let res = await axios.get("/mongo/itemlist");
  //   this.setState({ asshole: res.data });
  //   console.log('axios?');
  // };
  render() {

    return (
      <div className="App">
        <div>
          <Navbar />
          <SearchBar />
        </div>


        <div>
        {/* <Basicinfo data={this.state.data} />
        <Nutrition data={this.state.data} /> */}
        </div>


          {/* <PropsRoute exact path="/" component={Cards} data={this.state.asshole} /> */}

          {/* <Route exact path="/" render={() => <Cards data={this.state.asshole} />} />           */}
          <Switch>
            <Route path="/main/login:name" component={Login} />
            <Route path="/main/login" component={Login} />
          </Switch>
          <Route exact path="/" component={Cards} />
          <Route path="/main/mylist" component={Mylist} />
          <Route path="/main/myinfo" rcomponent={Myinfo} />
          <Route path="/main/signin" component={Signin} />
          <Route path="/detail/:id" component={Detail} />

          {/* <Route path="/main/myinfo" render={ <Myinfo user={this.state.userInfo}></Myinfo>} /> */}

        </div>
    );
  }
}
export default App;
