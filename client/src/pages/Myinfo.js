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
        const data = res.data
        console.log(data)

        if (data.activity === 1){
            data.activity = "육체 활동이 거의 없는 경우"
        } else if (data.activity === 2) {
            data.activity = " 보통의 활동을 하는 경우"  
        } else {
            data.activity = "심한 육체 활동을 하는 경우"
        };

        this.setState({
            data: data,
        })
        
       
        console.log("res.data:", res.data);
        console.log("this.state.data.userid:");
        console.log(this.state.data.userid);
    }


                            </div>
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

                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel} 회원 탈퇴하기</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>탈퇴안내</ModalHeader>
                    <ModalBody>
                        <p>회웥탈퇴 진행에 앞서 아래의 사랑을 <strong>반드시 확인</strong>하시길 바랍니다</p>  
                        <div className="notice">
                            <p>1. 한번 탈퇴하면 ㅇㄹㅇㄹㅇㄹ</p>   
                            <p>1. 한번 탈퇴하면 ㅇㄹㅇㄹㅇㄹ</p>  
                            <p>1. 한번 탈퇴하면 ㅇㄹㅇㄹㅇㄹ</p>  
                            <p>1. 한번 탈퇴하면 ㅇㄹㅇㄹㅇㄹ</p>  
                            <p>1. 한번 탈퇴하면 ㅇㄹㅇㄹㅇㄹ</p>                     
                            </div>

                            <div className="reason">
                                <p>탈퇴사유 입력</p>
                                
                                <p>향후 더 나은 서비스 제공을 위해 탈퇴사유를 입력하세요</p>
                                <input></input>
                            </div>

                            <div className="password">
                                <p>패스워드 인증</p>
                            
                                <p>타인에 의한 탈퇴를 방자하기 위한 추가 인증입니다</p>
                                <input onChange={this.updatePassword} placeholder="패스워드를 입력하세요." name="password" type="password"></input>
                            </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.delete}>탈퇴하기</Button>
                        <Button color="secondary" onClick={this.toggle}>취소</Button>
                    </ModalFooter>
                </Modal>
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
                    {/* <Button color="primary">Sign In</Button> */}
                </Form>
            </div>
        );
    }
};

export default Myinfo;