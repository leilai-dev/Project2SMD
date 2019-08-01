import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import './Signup.css';

class Signup extends Component {
    render() {
        return (
            <Container className="Signup">
                <h2>Sign In</h2>

                <form method="post" action="/mongo/login" style={{paddingTop: 100}}>
                    <input type="text" name="userid" />
                    <input type="text" name="password" />
                    <button>submit</button>
                </form>
            </Container>
        );
    }
}

export default Signup;