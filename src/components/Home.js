import React, { useState, useEffect } from 'react';
import faker from 'faker';
import { Card, Button } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

const Products = styled.div`
    width: 95%;
    padding: 10px;
    border-radius: 10px;
    margin: 0 auto;
    display: flex;
    overflow-x: auto;
    background-color: #D3D3D3;

    > div {
        margin-right: 10px;
    }
`;

const CardContent = styled.span`
    margin: 10px 0;
    display: block;
    font-weight: 800;
`;

const ProductImg = styled.img`
    margin: 0 auto;
`;

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        for (let i = 0; i < 30; i++ ) {
            let productName = faker.commerce.product();
            let productPrice = faker.commerce.price();
            setProducts((oldData) => {
                return [...oldData, { id: i + 1, productName: productName, productPrice: productPrice }];
            });
        }
    }, []);

    const openCheckout = (price, product) => {
        let options = {
          "key": "rzp_test_Mnn7X4p5fG6fBP",
          "amount": price, // 2000 paise = INR 20, amount in paisa
          "currency": "INR",
          "name": "Ninad Parkar",
          "description": product,
          "handler": function (response){
            alert(response.razorpay_payment_id);
          },
          "prefill": {
            "name": "Ninad Parkar",
            "email": "ninad@razorpay.com"
          },
          "notes": {
            "address": "Dadar"
          },
          "theme": {
            "color": "#2499fd"
          }
        };

        //Debit Cred 5104 0600 0000 0008
        
        let rzp = new window.Razorpay(options);
        rzp.open();
    }
    
    return (
        <>
            {products.length > 0 && <Products>{products.map((value) => {
                return (
                    <Card title="Product" key={value.id} bordered={false} >
                        <ProductImg src='http://placehold.it/100x100/2499FD'/>
                        <CardContent>{value.productName}</CardContent>
                        <Button onClick={() => openCheckout(value.productPrice * 100, value.productName)} type="primary">Buy at &#8377; {value.productPrice}</Button>
                    </Card>
                )
            })}</Products>}
        </>
    )
}

export default Home
