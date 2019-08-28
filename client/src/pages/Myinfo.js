import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Myinfo.css';
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
        console.log(this.props.match.params);
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

    render() {
        return (
            <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <div className="pro-title">
                                <h1>Account Profile</h1> <hr />
                            </div>
                            <div className="pro-img">
                                <img src={this.state.img} />
                            </div>

                            <div className="pro-info">
                                <br />
                                <h2>기본 정보</h2>
                                <hr />

                                <label><b>Full Name: </b></label><br />
                                &nbsp;&nbsp;<input type="text" value={this.state.data.userid}></input><br /> <br />
                                <label><b>Email:</b> </label><br />
                                &nbsp;&nbsp;<input type="text" value={this.state.data.email}></input> <br /><br />
                                <label><b>Created At</b></label><br />
                                &nbsp;&nbsp;<input type="text" value={this.state.data.createdAt}></input><br /><br />

                                <br />
                                <br />
                                <br />

                                <h2>추가 정보</h2>
                                <hr />
                                <label><b>활동량: </b></label><br />
                                &nbsp;&nbsp;<input type="text" value={this.state.data.activity}></input><br /> <br />

                                <label><b>키:</b> </label><br />
                                &nbsp;&nbsp;<input type="text" value={this.state.data.tall}></input> <br /><br />

                                <label><b>몸무게:</b> </label><br />
                                &nbsp;&nbsp;<input type="text" value={this.state.data.weight}></input><br /><br />
                            </div>
                        </ Col>
                    </Row>

                    <br />
                    <br />

                    <Row className="button-row">
                        {/* <Col xs='6'>
              <ModalModify />
          </Col> */}
                        <Col xs='6'>
                            <ModalDelete userid={this.state.data.userid} />

                        </Col>
                    </Row>
                </Container>

            </div>

        );
    };
}

class ModalDelete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    // delete = () => {

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel} 회원 탈퇴하기</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>탈퇴하기</ModalHeader>
                    <ModalBody>
                        <p>정말 탈퇴하시겠습니까??</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.delete}>탈퇴하기</Button>
                        <Button color="secondary" onClick={this.toggle}>취소</Button>
                    </ModalFooter>
                </Modal>
                {/* <Button color="danger" onClick={this.toggle}>탈퇴하기</Button> */}
            </div>
        );
    }
}




export default Myinfo;