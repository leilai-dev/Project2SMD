import React, { Component } from 'react';
import { Form, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './Leave.css';

class Leave1 extends Component {
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

    delete = (cbData) => {
        this.props.loginCallback(cbData);
    }

    async componentDidMount() {
        const res = await axios.get('/mongo/myinfo');
        this.setState({
            data: res.data
        })
        console.log("res.data:", res.data);
        console.log(this.state.data.userid);
    }

    render() {
        return (
            <div>
                <ModalDelete deleteCallback={this.delete} userid={this.state.data.userid} />
            </div>
        );
    };
}

class ModalDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            deleteSuccess: false,
            password: null
        };
        this.toggle = this.toggle.bind(this);
    }
    updatePassword = (e) => {
        console.log(e.target.value);
        this.setState({
            password:e.target.value
        })
    }
    delete = async () => {
        const userid = this.props.userid;
        const password = this.state.password;
        let data = {userid, password};
    
        const confirmPassword = await axios.post('/mongo/login', data);
        
        if (!confirmPassword.data.result) {
            alert("잘못된 비밀번호입니다\n다시 시도해 주세요!");
            return;
        }

        console.log(this.props.userid);
        const res = await axios.delete('/mongo/user/delete/' + this.props.userid);
        if (res.data.result) {
            this.setState({
                deleteSuccess: true
            })
            this.props.deleteCallback(false);
        }
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                {
                    this.state.deleteSuccess ?
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: this.props.location }
                            }}
                        /> : <></>}
                <Form className="siform">
                    <h4>회원 탈퇴</h4><br />
                    <p>회웥탈퇴 진행에 앞서 아래의 사랑을 <strong>반드시 확인</strong>하시길 바랍니다</p>
                    <div className="notice">
                        <p>1. 한번 탈퇴하면 ㅇㄹㅇㄹㅇㄹ</p>
                        <p>1. 한번 탈퇴하면 ㅇㄹㅇㄹㅇㄹ</p>
                        <p>1. 한번 탈퇴하면 ㅇㄹㅇㄹㅇㄹ</p>
                        <p>1. 한번 탈퇴하면 ㅇㄹㅇㄹㅇㄹ</p>
                        <p>1. 한번 탈퇴하면 ㅇㄹㅇㄹㅇㄹ</p>
                    </div>

                    <br /><hr />
                    <div className="reason">
                        <p>탈퇴사유 입력</p>
                        <p>향후 더 나은 서비스 제공을 위해 탈퇴사유를 입력하세요</p>
                        <input type="text" className="input1"></input>
                    </div>

                    <br /><hr />
                    <div className="password">
                        <p>패스워드 인증</p>

                        <p>타인에 의한 탈퇴를 방자하기 위한 추가 인증입니다</p>
                        <input onChange={this.updatePassword} placeholder="패스워드를 입력하세요." name="password" type="password"></input>
                    </div>
                    <br />
                    <Button color="danger" onClick={this.delete}>탈퇴하기</Button>
                    <Button color="secondary" onClick={this.toggle}>취소</Button>
                </Form>
            </div>
        );
    }
}

export default Leave1;