import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

class Myinfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                userid: "",
                name: "",
                email: "",
                createdAt: "",
                hash: "",
                activity: "",
                tall: "",
                weight: "",
                wishlist: [],
                field19: ""
            },
        }
    }
    
    async componentDidMount() {
        const res = await axios.get('/mongo/myinfo');
        console.log(res.data);
        this.setState({
            data: res.data
        })
    
        console.log("res.data:", res.data);
        console.log("this.state.data.userid:");
        console.log(this.state.data.userid);
    }
    active() {
        let act;
        console.log(this.state.data.activity);
        switch(this.state.data.activity) {
            case 1 :
                act="육체 활동이 거의 없는 경우";
                break;
            case 2:
                act="보통의 활동을 하는 경우";
                break;
            case 3 :
                act="심한 육체 활동을 하는 경우";
                break;
            default :
                act="선택 없음";
                break;
        }
        return act;
    }

    render() {
        return (
            <div border="1px solid">
                <Form className="siform" onSubmit={this.handleSubmit}>
                    <h4>Account Profile</h4>
                    <br />
                    <p><h6>기본 정보</h6></p>
                    <FormGroup>
                        <div >
                            <Label className="md2">프로필 이미지</Label>
                            <FormText className="muted" color="muted">
                                <div align="center">
                                <img src={this.state.img} alt="Default"/>
                                </div>
                            </FormText>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Label className="sm">ID</Label>
                        <Input className="input1" type="userid" name="userid"  value={this.state.data.userid} />
                    </FormGroup>
                    <FormGroup>
                        <Label className="sm">Email</Label>
                        <Input className="input1" type="email" name="email" value={this.state.data.email} />
                    </FormGroup>
                    <FormGroup>
                        <Label className="sm">Created At</Label>
                        <Input className="input1" type="text" value={this.state.data.createdAt.substring(0,10)} />
                    </FormGroup>
                    <hr />
                    <p className="md"><h6>추가 정보</h6></p>
                    <FormGroup>
                        <Label className="md">활동량</Label>
                        <Input className="input1" type="text" value={this.active()} />
                    </FormGroup>

                    <FormGroup>
                        <div className="dadan">
                            <Label className="md" name="tall" >신장 (cm)</Label>
                            <Input className="input1" type="number" name="tall" value={this.state.data.tall} />
                            <Label className="md" name="weight">체중 (kg)</Label>
                            <Input className="input1" type="number" name="weight" value={this.state.data.weight} />
                        </div>
                    </FormGroup>
                </Form>
            </div>
        );
    }
};

export default Myinfo;