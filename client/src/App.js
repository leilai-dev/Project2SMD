import React, {Component} from "react";
import { Route, HashRouter } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Cards from "./cardList";
import axios from "axios";


let data;
class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      asshole: {data: [{name: "a"}]}
    }
    console.log('안먹니?');
  }
  componentDidMount() {
    this.getUsers();
  }
  getUsers = async () => {
    let res = await axios.get("/mongo/itemlist");
    this.setState({ asshole: res });
    console.log('axios?');
  };
  render() {
    console.log('render?');
    // await axios.get(
    //   'http://localhost:5000/mongo/itemlist'
    // )
    //   .then(response => {
    //     console.log(response);
    //     console.log('success : ', response.data[0].name);
    //     this.setState({
    //       asshole: response
    //     })
    //     console.log(this.state.asshole);
    //   })
    //   .catch(error => {
    //     console.log('error : ', error);
    //   })
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
  
        <Cards data={this.state.asshole}></Cards>
      </div>
    );
  };
}

export default App;
