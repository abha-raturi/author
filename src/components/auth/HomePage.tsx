"use client";
import { Col, Container, Row } from "react-bootstrap";
import ProductList from "../product/ProductList";
import { useState } from "react";

const productData = [
    {title:'Product 1', price: 100, image:'/camera.webp', description:'Camera description', discount: 20, rating: 4.5},
    {title:'Product 2', price: 200, image:'/camera.webp', description:'Camera description 2', discount: 0, rating: 4.0},
    {title:'Product 3', price: 300, image:'/camera.webp', description:'Camera description 3', discount: 10, rating: 3.5},
    {title:'Product 4', price: 400, image:'/camera.webp', description:'Camera description 4', discount: 0, rating: 4.0},
    {title:'Product 5', price: 500, image:'/camera.webp', description:'Camera description 5', discount: 5, rating: 3.0},
    {title:'Product 6', price: 600, image:'/camera.webp', description:'Camera description 6', discount: 0, rating: 4.5},
]


export default function HomePage() {
    const [products, setProducts] = useState(productData);

    return (
        <Container>
            <Row className="mt-5">
                {products.map((product:any, index:number) => (
                <Col md={3} className="mb-5" key={index}>
                    <ProductList product={product} />
                </Col>
                ))}
                
            </Row>
        </Container>
    );
}

