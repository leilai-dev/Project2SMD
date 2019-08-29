import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

class Login extends Component {
  // constructor(props) {
  //   super(props);
  // }
  handleSubmit = async (e) => {
    // e.preventDefault();
    console.log(e.target);
    console.log(e.target.elements.userid.value);
    const userid = e.target.elements.userid.value;
    const password = e.target.elements.password.value;

    let data = {userid, password};
    const res = await axios.post('/mongo/login', data);
    this.props.loginCallback(res.data.result);
    // this.props.loginCallback({loggedIn:true});
  }

  render() {
    return (
      <div border="1px soild">
        <Form className="lgform" id="loginForm" onSubmit={this.handleSubmit}>
          <h4>Login</h4>
          <br />
          <FormGroup>
            <Label className="id">ID/Email</Label>
            <Input className="input1" type="userid" name="userid" placeholder="ID/Email" />
          </FormGroup>

          <FormGroup>
            <Label className="pw">Password</Label>
            <Input className="input1" type="password" name="password" placeholder="Password" />
          </FormGroup>
          <Button color="primary">Submit</Button>
        </Form>
      </div>
    );
  }
};

export default Login;