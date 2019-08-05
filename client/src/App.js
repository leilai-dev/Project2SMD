import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import { Home, Login, Myinfo, Mylist, Signin } from 'pages';
import SearchBar from './SearchBar';
import Cards from './cardList';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      asshole: [{name: "a"}]
    }
    console.log('안먹니?');
  }
  componentDidMount() {
    this.getUsers();
  }
  getUsers = async () => {
    let res = await axios.get("/mongo/itemlist");
    this.setState({ asshole: res.data });
    console.log('axios?');
  };
  render() {

    return (
      <div className="App">
        <div>
          <Navbar />
          <SearchBar />
        </div>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a className="App-link" href="/api/greeting">
            Greeting
        </a>
        </header>
        <div>

          
        {/* <Route exact path="/" component={Cards}/> */}
          <Switch>
            <Route path="/main/login:name" component={Login}/>
            <Route path="/main/login" component={Login}/>
          </Switch>
          
          <Route path="/main/mylist" component={Mylist}/>
          <Route path="/main/myinfo" component={Myinfo}/>
          <Route path="/main/signin" component={Signin}/>
        </div>
        <Cards data={this.state.asshole}></Cards>
      </div>
    );
  }
}
export default App;
