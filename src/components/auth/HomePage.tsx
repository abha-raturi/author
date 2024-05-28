"use client";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import ProductList from "../product/ProductList";
import { useState } from "react";
import ProductDetail from "../product/ProductDetail";
import * as Icon from 'react-bootstrap-icons';

const productData = [
    { title: 'Product 1', price: 100, image: '/images/product/1.webp', description: 'Camera description', discount: 20, rating: 4.5 },
    { title: 'Product 2', price: 200, image: '/images/product/2.webp', description: 'Camera description 2', discount: 0, rating: 4.0 },
    { title: 'Product 3', price: 300, image: '/images/product/3.webp', description: 'Camera description 3', discount: 10, rating: 3.5 },
    { title: 'Product 4', price: 400, image: '/images/product/4.webp', description: 'Camera description 4', discount: 0, rating: 4.0 },
    { title: 'Product 5', price: 500, image: '/camera.webp', description: 'Camera description 5', discount: 5, rating: 3.0 },
    { title: 'Product 6', price: 600, image: '/camera.webp', description: 'Camera description 6', discount: 0, rating: 4.5 },
    { title: 'Product 7', price: 800, image: '/camera.webp', description: 'Camera description', discount: 50, rating: 4.5 },
]


export default function HomePage() {
    const [products, setProducts] = useState(productData);
    const [product, setProduct] = useState();

    const handleSetProduct = (product: any) => {
        setProduct(product)
    }


    return (
        <Container fluid className="pt-5">
            <h2 className="text-center">Products of the week</h2>

            <Nav className="justify-content-center mt-5 mb-5">
                <Nav.Item>
                    <Button variant="default"> Best Seller[57]</Button>
                </Nav.Item>
                <Nav.Item>
                    <Button variant="default"> Hot Collection</Button>
                </Nav.Item>
                <Nav.Item>
                    <Button variant="default"> Trendy </Button>
                </Nav.Item>
                <Nav.Item>
                    <Button variant="default"> New Arrival </Button>
                </Nav.Item>
            </Nav>

            {!product ?

                <div className="products-wrapper">
                    {products.map((product: any, index: number) => (
                        <div className="signle-product mb-5" onClick={() => handleSetProduct(product)} key={index}>
                            <ProductList product={product} />
                           

                        </div>
                    ))}
                </div>

                : <ProductDetail product={product} />
            }
        </Container>
    );
}

