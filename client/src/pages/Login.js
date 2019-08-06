import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css';

const Login = () => {
  return (
    <div border="1px soild">
      <Form className="lgform">
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

        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Remember me
          </Label>

          <Label className="forgotpw">
            <i>Forgot password?</i>
          </Label>
        </FormGroup>

        <br />
        <Button color="primary">Submit</Button>

      </Form>
    </div>

  );
};

export default Login;