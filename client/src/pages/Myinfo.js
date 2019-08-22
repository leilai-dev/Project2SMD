import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';
import './Myinfo.css';
import { Button } from 'react-bootstrap';
import Axios from 'axios';


class Myinfo extends Component {
    constructor(props) {
        super(props);

        this.state ={
            data:{},
        }
        console.log(this.props.match.params);
    }

    async componentDidMount() {
        const res = await Axios.get('/mongo/userinfo/' + this.props.match.params.id);
        console.log(res.data);
        this.setState({
            data: res.data
        })

    // componentDidMount() {
    //     Axios.get('/mongo/userinfo')
    //     .then((res) => {
    //         this.setState({
    //             data:res.data
    //         });
    //     });
    }
    
    render() {
        return (
            <div>            
                <Form>
            <h3>나의 정보</h3>
            <hr />
            <div>
                <FormGroup>
                    <div className="picture">
                        <Label className="md2" for="exampleFile">프로필 이미지</Label>
                        <FormText className="muted" color="muted">
                            Select your profile image.
                </FormText>
                        <Input type="file" name="file" id="exampleFile" />
                    </div>
                </FormGroup>

                {/* <FormGroup>
                    <Label className="sm" for="exampleEmail">이름</Label>
                    <Input type="userid" name="userid" id="exampleEmail" value={userInfo.userid} />
                </FormGroup>

                <FormGroup>
                    <Label className="sm" for="exampleEmail">ID</Label>
                    <Input type="userid" name="userid" id="exampleEmail" value={userInfo.password} />
                </FormGroup>

                <FormGroup>
                    <Label className="sm" for="exampleEmail">비밀번호</Label>
                    <Input type="email" name="email" id="exampleEmail" value={userInfo.password} />
                </FormGroup>

                <FormGroup>
                    <Label className="sm" for="exampleEmail">핸드폰번호</Label>
                    <Input type="email" name="email" id="exampleEmail" />
                </FormGroup> */}

                <Button color="warning">정보 수정</Button>
            </div>

       <br />

            <h3>추가 입력 정보</h3>
            <hr />
            <div>
                <FormGroup>
                    <Label for="exampleCheckbox">성별</Label>
                    <div>
                        <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="여자" />
                        <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="남자" />
                        <CustomInput type="radio" id="exampleCustomRadio3" name="customRadio" label="미응답" />

                    </div>
                </FormGroup>

                <FormGroup>
                    <div className="dadan">
                        <Label className="md" for="exampleEmail">신장 (cm)</Label>
                        <Input type="number" name="tall" id="exampleEmail" placeholder="Enter your Height (cm)" />
                        <Label className="md" for="exampleEmail">체중 (kg)</Label>
                        <Input type="number" name="weight" id="exampleEmail" placeholder="Enter your Weight (kg)" />
                    </div>
                </FormGroup>

                <FormGroup>
                    <Label className="md" for="exampleSelect">활동량</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option default>자신의 활동량 선택</option>
                        <option >육체 활동이 거의 없는 경우</option>
                        <option>보통의 활동을 하는 경우</option>
                        <option>심한 육체 활동을 하는 경우</option>
                    </Input>
                </FormGroup>

                <FormGroup tag="fieldset">
                    <p className="md">알레르기 유발 요인</p>

                    <FormGroup check>
                        <div className="left-b">
                            <Label check>
                                <Input type="radio" name="milk" />{' '}
                                <p>우유</p>
                            </Label> <br />
                            <Label check>
                                <Input type="radio" name="bean" />{' '}
                                <p>콩</p>
                            </Label> <br />
                            <Label check>
                                <Input type="radio" name="wheat" />{' '}
                                <p>밀</p>
                            </Label> <br />
                            <Label check>
                                <Input type="radio" name="egg" />{' '}
                                <p>달걀</p>
                            </Label> <br />
                            <Label check>
                                <Input type="radio" name="pork" />{' '}
                                <p>돼지고기</p>
                            </Label> <br />
                        </div>
                        <div className="right-b">
                            <Label check>
                                <Input type="radio" name="fish" />{' '}
                                <p>생선</p>
                            </Label> <br />
                            <Label check>
                                <Input type="radio" name="shrimp" />{' '}
                                <p>새우</p>
                            </Label> <br />
                            <Label check>
                                <Input type="radio" name="peanut" />{' '}
                                <p>땅콩</p>
                            </Label> <br />
                            <Label check>
                                <Input type="radio" name="walnut" />{' '}
                                <p>호두</p>
                            </Label> <br />
                            <Label check>
                                <Input type="radio" name="salmon" />{' '}
                                <p>연어</p>
                            </Label>
                        </div>
                    </FormGroup>
                </FormGroup>

                <Button color="waring">추가 정보 수정</Button>

            </div>
        </Form>
    </div>

        );
    };
}

export default Myinfo;