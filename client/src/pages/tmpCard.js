import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import { Button } from 'reactstrap';
import './tmpCard.css'

class TmpCard extends Component {

    render() {
        return (
            <div>
                <Card className="inlinecard" style={{ width: '8rem' }}>
                    <Card.Img variant="top" src={this.props.data.imgUrl} />
                    <Card.Body>
                        <Card.Text>{this.props.data.name}</Card.Text>
                        <Button className="btn1" variant="primary">Go</Button>
                    </Card.Body>
                </Card>

                <Card className="inlinecard" style={{ width: '8rem' }}>
                    <Card.Img variant="top" src={this.props.data.imgUrl} />
                    <Card.Body>
                        <Card.Text>{this.props.data.name}</Card.Text>
                        <Button className="btn1" variant="primary">Go</Button>
                    </Card.Body>
                </Card>
                <Card className="inlinecard" style={{ width: '8rem' }}>
                    <Card.Img variant="top" src={this.props.data.imgUrl} />
                    <Card.Body>
                        <Card.Text>{this.props.data.name}</Card.Text>
                        <Button className="btn1" variant="primary">Go</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default TmpCard;