"use client";
import { Button, Card } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

export default function ProductList({ product }: any) {
    const setRating = (rating: any) => {
        if (rating < 1.5) {
            return <>
                <Icon.StarFill style={{ color: 'orange' }} />
                <Icon.Star />
                <Icon.Star />
                <Icon.Star />
                <Icon.Star />
                <Icon.Star />

            </>
        } else if (rating < 2.5) {
            return <>
                <Icon.StarFill style={{ color: 'orange' }} />
                <Icon.StarFill style={{ color: 'orange' }} />
                <Icon.Star />
                <Icon.Star />
                <Icon.Star />
            </>
        } else if (rating < 3.5) {
            return <>
                <Icon.StarFill style={{ color: 'orange' }} />
                <Icon.StarFill style={{ color: 'orange' }} />
                <Icon.StarFill style={{ color: 'orange' }} />
                <Icon.Star />
                <Icon.Star />
            </>
        } else if (rating < 4.5) {
            return <>
                <Icon.StarFill style={{ color: 'orange' }} />
                <Icon.StarFill style={{ color: 'orange' }} />
                <Icon.StarFill style={{ color: 'orange' }} />
                <Icon.StarFill style={{ color: 'orange' }} />
                <Icon.Star />
            </>;
        } else if (rating < 5) {
            return <>
                <Icon.StarFill style={{ color: 'orange' }} />
                <Icon.StarFill style={{ color: 'orange' }} />
                <Icon.StarFill style={{ color: 'orange' }} />
                <Icon.StarFill style={{ color: 'orange' }} />
                <Icon.StarFill style={{ color: 'orange' }} />
            </>;
        }
    }
    return (
        <div>
            <Card >
                <div className="product-image">
                    <Card.Img variant="top" src={product?.image} />
                    <div className="product-action">
                        <button
                            type="button"
                            className="quick-view-btn"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Quick View"
                            data-bs-toggle="modal"
                            data-bs-target="#productmodal"
                        >
                            <i className="fal fa-eye" />
                            <Icon.Eye />
                        </button>
                        <button type="button" className="wishlist-btn">
                            <i className="fal fa-heart" />
                            <Icon.Heart />
                        </button>
                        <button type="button" className="compare-btn">
                            <i className="fal fa-exchange" />
                            <Icon.ArrowCounterclockwise />
                        </button>
                    </div>

                    <div className="product-action-bottom">
                        <button type="button" className="add-cart-btn">
                            <i className="fal fa-shopping-bag" />
                            <Icon.Cart />
                            Add to Cart
                        </button>
                    </div>

                    <div className="product-sticker-wrapper">
                        <span className="product-sticker discount">-15%</span>
                    </div>

                </div>
                <Card.Body>
                    <Card.Title>{product?.title}</Card.Title>
                    <Card.Text>{product?.description}</Card.Text>
                    <Card.Text>Rs.{product?.price}</Card.Text>
                    <Card.Text>Discount: {product?.discount}%</Card.Text>
                    <Card.Text>Sale Price: {product?.price - (product?.price * product?.discount / 100)}</Card.Text>
                    <Card.Text>Rating:{setRating(product?.rating)} {product?.rating}/ 5</Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
}