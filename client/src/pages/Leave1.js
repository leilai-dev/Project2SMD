import React, { Component } from 'react';
import { Form, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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

    // delete = (cbData) => {
    //     this.props.loginCallback(cbData);
    // }

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
        };
        this.toggle = this.toggle.bind(this);
    }

    delete = async () => {
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
                        />: <></>}
                <Form className="siform">
                <h4>회원 탈퇴</h4><br />
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel} 회원 탈퇴하기</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>탈퇴하기</ModalHeader>
                    <ModalBody>
                        <p>정말 탈퇴하시겠습니까?</p>
                        <Button color="danger" onClick={this.delete}>탈퇴하기</Button>
                        <Button color="secondary" onClick={this.toggle}>취소</Button>
                    </ModalBody>
                </Modal>
                </Form>
            </div>
        );
    }
}

export default Leave1;