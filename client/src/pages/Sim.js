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

const nameArray = [];


class Sim extends Component {
    constructor(props) {
        super(props);
        const Array = this.props.data.map((data) => {
            nameArray.push(data);
        });
    }

    forLoop = () => {
        let n=0;
        let itemCard = [];
        for ( n=0; n<nameArray.length; n++) {
            itemCard.push(<Card className="inlinecard" style={{ width: '8rem' }}>
            <Card.Img variant="top" src={nameArray[n].imgUrl} />
            <Card.Body>
                <Card.Text> {nameArray[n].name}</Card.Text>
                <Button className="btn1" variant="primary">Go</Button>
            </Card.Body>
            </Card>);
        }
        return itemCard;
    }
    

    render() {
        if (nameArray == null) {
            return <span>Loading...</span>;
        }
        console.log(nameArray);
        return (
            <div>
                {Array}
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    containerClass="container"
                    dotListClass=""
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
                    {this.forLoop()}
                </Carousel>
            </div>
        );
    }
}

export default Sim;