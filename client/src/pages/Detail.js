import React, { Component } from 'react';
import { Badge, Toast, ToastBody, ToastHeader, Button } from 'reactstrap';
import './Detail.css';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import Sim from './Sim';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // _id: this.props.match.params.id,
            data: []
        }
        console.log(this.props.match.params);
    }

    async componentDidMount() {
        console.log(this.props.match.params.id);
        const res = await axios.get('/mongo/detail/' + this.props.match.params.id);

        this.setState({
            data: res.data[0],
            sim: [res.data[1][0], res.data[2][0], res.data[2][1],
                res.data[3][0], res.data[4][0], res.data[4][1],
                res.data[5][0], res.data[6][0], res.data[6][1]]
        })
        console.log(this.state.sim);
    }
    render() {
        let { data, sim } = this.state;
        return (

            <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                <div className="left">
                    <Toast className="basic">
                        <ToastHeader>
                            상품 기본 정보
                    </ToastHeader>

                        <ToastBody>

                            <div className="img">
                                <Image src={data.imgUrl} thumbnail /> </div>
                            <div className="title">
                                <h2><b>{data.name}</b></h2> </div>
                            <br />
                            <div className="star"></div>
                            <br />
                            <div className="button">
                                <Button color="warning">관심상품</Button>{' '}
                                &nbsp; &nbsp;  &nbsp;  &nbsp;
                            <Button color="success">최저가 구매하기</Button>{' '}
                            </div>

                        </ToastBody>
                    </Toast>
                </div>
                <div className="right">
                    <Toast className="basic2">
                        <ToastHeader>
                            영양 구성표
                </ToastHeader>
                        <ToastBody>

                            <tr>
                                <th>열량(g)</th>
                                <th>탄수화물(g)</th>
                                <th>단백질(g)</th>
                                <th>지방(g)</th>
                                <th>나트륨(mg)</th>
                                <th>콜레스트롤(mg)</th>
                            </tr>

                            <tr>
                                <td><b>{data.kcal}</b></td>
                                <td>{data.carbo}</td>
                                <td>{data.protein}</td>
                                <td>{data.fat}</td>
                                <td>{data.natrium}</td>
                                <td>{data.choles}</td>
                            </tr>

                        </ToastBody>
                    </Toast>
                    <Toast className="basic3">
                        <ToastHeader>
                            알러지 성분
                </ToastHeader>
                        <ToastBody>
                            <h5>
                                <Badge className="adge1" color="secondary">New</Badge>
                                <Badge color="secondary">{data.name}</Badge>
                                <Badge className="adge2" color="secondary">New</Badge>
                            </h5>
                            {data.ingredi}
                        </ToastBody>
                    </Toast>
                    <div>
                        {sim ? <Sim data={sim} /> : ""}
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;