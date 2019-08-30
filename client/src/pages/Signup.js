import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Signup.css';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
    state = {
        isCompleted : false
    }
    // constructor(props) {
    //     super(props);
    // }
    handleSubmit = async (e) => {
        e.preventDefault();

        console.log(e.target.elements.userid.value);
        console.log(e.target.elements.activity.value);
        console.log(e.target.elements.tall.value);
        console.log(e.target.elements.weight.value);

        const userid = e.target.elements.userid.value;
        const password = e.target.elements.password.value;
        const email = e.target.elements.email.value;
        const activity = e.target.elements.activity.value;
        const tall = e.target.elements.tall.value;
        const weight = e.target.elements.weight.value;


        let data = { userid, email, password ,
                    activity, tall , weight};
        const res = await axios.post('/mongo/signup', data);
        // console.log(res.status);
        if (res.status === 200) {
            this.setState({
                isCompleted : true
            })
        }
        // res.status(200)
    }

    render() {
        return (
            <>
                {this.state.isCompleted?
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: this.props.location }
                        }} />
                : <></>}
                <div border="1px solid">
                    <Form className="siform" onSubmit={this.handleSubmit}>
                        <h4>Sign Up</h4>
                        <br />
                        <p><h6>필수 사항</h6></p>
                        <FormGroup>
                            <Label className="sm">ID</Label>
                            <Input className="input1" type="userid" name="userid" placeholder="Enter your new ID" />
                        </FormGroup>
                        <FormGroup>
                            <Label className="sm">Email</Label>
                            <Input className="input1" type="email" name="email" placeholder="Enter your E-mail" />
                        </FormGroup>
                        <FormGroup>
                            <Label className="sm">Password</Label>
                            <Input className="input1" type="password" name="password" placeholder="Enter your passoword" />
                        </FormGroup>
                        <hr />
                        <p className="md"><h6>선택 사항</h6></p>
                        <p className="muted2">선택 정보는 일일 섭취 권장량 계산에 이용됩니다.</p>


                        {/* <FormGroup>
                            <Label className="md">활동량</Label>
                            <Input className="input1" type="select" id="activity" name="activity">
                                <option default value="자신의 활동량 선택">자신의 활동량 선택</option>
                                <option value="육체 활동이 거의 없는 경우">육체 활동이 거의 없는 경우</option>
                                <option value="보통의 활동을 하는 경우2">보통의 활동을 하는 경우</option>
                                <option value="심한 육체 활동을 하는 경우">심한 육체 활동을 하는 경우</option>
                            </Input>
                        </FormGroup> */}

                        <FormGroup>
                            <Label className="md">활동량</Label>
                            <Input className="input1" type="select" id="activity" name="activity">
                                <option default value="0">자신의 활동량 선택</option>
                                <option value="1">육체 활동이 거의 없는 경우</option>
                                <option value="2">보통의 활동을 하는 경우</option>
                                <option value="3">심한 육체 활동을 하는 경우</option>
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <div className="dadan">
                                <Label className="md" name="tall" >신장 (cm)</Label>
                                <Input className="input1" type="number" name="tall" placeholder="Enter your Height (cm)" />
                                <Label className="md" name="weight">체중 (kg)</Label>
                                <Input className="input1" type="number" name="weight" placeholder="Enter your Weight (kg)" />
                            </div>
                        </FormGroup>

                        <FormGroup>
                            <div className="dadan">
                                <Label className="md2">프로필 이미지</Label>
                                <FormText className="muted" color="muted">
                                    Select your profile image.
                                </FormText>
                                <Input type="file" name="photofile" />
                            </div>
                        </FormGroup>
                        <Button color="primary">Sign In</Button>
                    </Form>
                </div>
            </>
        );
    }
};

export default Signup;