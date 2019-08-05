import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css';

const Login = () => {
    return (
        <div border ="1px soild">
            <Form>
            <h2>Login</h2>
            <br />
            <FormGroup>
                <Label className="id">ID/Email</Label>
                <Input type="userid" name="userid" placeholder="ID/Email" />
            </FormGroup>

            <FormGroup>
                <Label className="pw">Password</Label>
                <Input type="password" name="password" placeholder="Password" />
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
        <br />


        <Label className="connectsignup">
            Don't have an account? SIGN UP!
          </Label>


        </Form>
        </div>
      
    );
};

export default Login;