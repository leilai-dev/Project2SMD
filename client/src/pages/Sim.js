import React, { Component } from 'react';
import { Button } from 'reactstrap';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Card from 'react-bootstrap/Card'
import './tmpCard.css'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

class Sim extends Component {
    render() {
        return (
            <div>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite={false}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            paritialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            paritialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            paritialVisibilityGutter: 30
                        }
                    }}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >

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
                    <Card className="inlinecard" style={{ width: '8rem' }}>
                        <Card.Img variant="top" src={this.props.data.imgUrl} />
                        <Card.Body>
                            <Card.Text>{this.props.data.name}</Card.Text>
                            <Button className="btn1" variant="primary">Go</Button>
                        </Card.Body>
                    </Card>
                </Carousel>
            </div>
        );
    }
}

export default Sim;