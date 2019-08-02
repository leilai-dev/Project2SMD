import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Signin.css';

const Signin = () => {
    return (
        <div border="1px solid">
            <Form>
                <p>필수 사항</p>
                <FormGroup>
                    <Label  className="sm" for="exampleEmail">ID</Label>
                    <Input type="userid" name="userid" id="exampleEmail" placeholder="Enter your new ID" />
                </FormGroup>
                <FormGroup>
                    <Label  className="sm" for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Enter your E-mail" />
                </FormGroup>
                <FormGroup>
                    <Label  className="sm" for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="Enter your passoword" />
                </FormGroup>
                <hr />
                <p>선택 사항</p>
                <FormGroup>
                    <Label className="md" for="exampleSelect">활동량</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option default>자신의 활동량 선택</option>
                        <option >육체 활동이 거의 없는 경우</option>
                        <option>보통의 활동을 하는 경우</option>
                        <option>심한 육체 활동을 하는 경우</option>
                    </Input>
                </FormGroup>
                
                <FormGroup>
                    <Label className="md" for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                    <Label className="md" for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                        자신의 프로필 사진을 넣어주세요. (선택)
          </FormText>
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
                <Button color="primary">Sign In</Button>
            </Form>
        </div>
    );
};

export default Signin;