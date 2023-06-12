import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import Products from './Products';
import { Button } from 'react-bootstrap';


class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.data.imageUrl} />
                <Card.Body>
                    <h5>{this.props.data.productName}</h5>
                    {this.props.data.releasedDate}
                    <Rating
                        rating={this.props.data.rating}
                        numOfReviews={this.props.data.numOfReviews}
                    />
                    <p>{this.props.data.description}</p>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Product;