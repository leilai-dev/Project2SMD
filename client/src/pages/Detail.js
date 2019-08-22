import React, { Component } from 'react';
import { Badge, Toast, ToastBody, ToastHeader, Button } from 'reactstrap';
import './Detail.css';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
// import Sim from './Sim';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // _id: this.props.match.params.id,
            data:[]
        }
        console.log(this.props.match.params);
    }

    async componentDidMount() {
        const res = await axios.get('/mongo/detail/' + this.props.match.params.id);
        console.log(res.data);
        this.setState({
            data: res.data
        })
    }
    render() {
        let { data } = this.state;
        return (

            <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                <div className="left">
                    <Toast className="basic">
                        <ToastHeader>
                            상품 기본 정보
                    </ToastHeader>

                        <ToastBody>

                            <div className="img">
                                <Image src={this.state.data.imgUrl} thumbnail /> </div>
                            <div className="title">
                                <h2><b>{this.state.data.name}</b></h2> </div>
                            <br />
                            <div className="star"></div>
                            <br />
                            <div className="button">
                                <Button color="warning">관심상품</Button>{' '}
                            </div>

                        </ToastBody>
                    </Toast>
                </div>
                <div className="right">
                    <Toast className="basic2">
                        <ToastHeader>
                            영양 구성표 (100g 당 함량)
                </ToastHeader>
                        <ToastBody >
                            
                            <table border="1px solid gray" width="100%">

                            <tr>
                                <th>열량</th>
                                <th>탄수화물</th>
                                <th>단백질</th>
                                <th>지방</th>
                                <th>포화지방</th>
                                <th>트랜스지방</th>
                                <th>당류</th>
                                <th>나트륨</th>
                                <th>콜레스트롤</th>
                            </tr>

                            <tr>
                                <td><b>{this.state.data.kcal}kcal</b></td>
                                <td>{this.state.data.carbo}g</td>
                                <td>{this.state.data.protein}g</td>
                                <td>{this.state.data.fat}g</td>
                                <td>{this.state.data.sFat}g</td>
                                <td>{this.state.data.tFat}g</td>
                                <td>{this.state.data.sugar}g</td>
                                <td>{this.state.data.natrium}mg</td>
                                <td>{this.state.data.choles}mg</td>
                            </tr>
                            </table>
                           
                        </ToastBody>
                    </Toast>
                    <Toast className="basic3">
                        <ToastHeader>
                            알러지 성분
                </ToastHeader>
                        <ToastBody>
                            <h5>
                                <Badge className="adge1" color="secondary">New</Badge>
                                <Badge color="secondary">{this.state.data.name}</Badge>
                                <Badge className="adge2" color="secondary">New</Badge>
                            </h5>
                            {this.state.data.ingredi}
                        </ToastBody>
                    </Toast>
                    <div>
                        {/* <Sim data={data} /> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;