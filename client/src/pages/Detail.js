import React, { Component } from 'react';
import { Badge, Toast, ToastBody, ToastHeader } from 'reactstrap';
import axios from 'axios';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            _id: this.props.match.params.id,
            data:[]
        }
        console.log(props);
        console.log(this.state._id);
    }

    async componentDidMount() {
        const res = await axios.get('/mongo/detail/'+this.props.match.params.id);
        console.log(res.data);
        this.setState({
            data:res.data
        })
    }
    render() {
        let {data} = this.state;
        return (
            <div className="p-3 my-2 rounded bg-docs-transparent-grid">
              <Toast>
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
            </div>
        );
    }
}

export default Detail;