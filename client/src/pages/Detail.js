import React, { Component } from 'react';
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import Sim from './Sim';
import './Detail.css';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // _id: this.props.match.params.id,
            data: [],
            errored: false
        }
        console.log(this.props.match.params);
    }
    async componentWillReceiveProps() {
        console.log(this.props.match.params.id);
        const res = await axios.get('/mongo/detail/' + this.props.match.params.id);
        console.log(res.data);


        this.setState({
            data: res.data[0],
            sim: [res.data[1][0], res.data[1][1],
            res.data[2][0], res.data[2][1],
            res.data[3][0], res.data[3][1],
            res.data[4][0], res.data[4][1]]
        })
        console.log(this.state.sim);
    }
    async componentDidMount() {
        console.log(this.props.match.params.id);
        const res = await axios.get('/mongo/detail/' + this.props.match.params.id);
        console.log(res.data);

        this.setState({
            data: res.data[0],
            sim: [res.data[1][0], res.data[1][1],
            res.data[2][0], res.data[2][1],
            res.data[3][0], res.data[3][1],
            res.data[4][0], res.data[4][1]]
        })
        console.log(this.state.sim);
    }
    onError = () => {
        if (!this.state.errored) {
            this.setState({
                img: this.props.tmpimg,
                errored: true
            });
        }
    }

    render() {
        let { data, sim } = this.state;
        return (
            <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                <div className="left">
                    <Toast className="basic">
                        <ToastHeader>상품 기본 정보</ToastHeader>
                        <ToastBody>
                            <div className="img">
                                <Image src={data.imgUrl} onError={this.onError} thumbnail /> </div>
                            <div className="title">
                                <h2><b>{data.name}</b></h2> </div>
                            <br />
                            <div className="star"></div>
                            <br />
                            <div className="button">
                                <Button color="warning">관심상품</Button>
                            </div>
                        </ToastBody>
                    </Toast>
                </div>
                <div className="right">
                    <Toast className="basic2">
                        <ToastHeader>영양 구성표 (100g 당 함량)</ToastHeader>
                        <ToastBody>
                            <table>
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
                                    <td><b>{data.kcal}kcal</b></td>
                                    <td>{data.carbo}g</td>
                                    <td>{data.protein}g</td>
                                    <td>{data.fat}g</td>
                                    <td>{data.sFat}g</td>
                                    <td>{data.tFat}g</td>
                                    <td>{data.sugar}g</td>
                                    <td>{data.natrium}mg</td>
                                    <td>{data.choles}mg</td>
                                </tr>
                            </table>
                        </ToastBody>
                    </Toast>
                    <Toast className="basic3">
                        <ToastHeader>알러지 성분</ToastHeader>
                        <ToastBody>{data.ingredi}</ToastBody>
                    </Toast>
                    <div>
                        {sim ? <Sim data={sim} /> : "Loading..."}
                    </div>
                </div>

                <BuggyCounter />
            </div>
        );
    }
}

export default Detail;

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }));
    }

    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
}