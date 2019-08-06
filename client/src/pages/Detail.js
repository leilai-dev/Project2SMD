import React, { Component } from 'react';
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
            <div>
                {this.state.data.name}
            </div>
        );
    }
}

export default Detail;