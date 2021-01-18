import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PaymentHeading = styled.h2`
    padding-bottom: 10px;
    position: relative;
    color: #2499fd;
    text-align: center;
    text-transform: capitalize;

    ::before {
        width: 60px;
        height: 3px;
        margin: 0 auto;
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #2499fd;
        content: '';
    }
`;

const PaymentList = styled.ul`
    padding-bottom: 10px;
    border-bottom: 2px solid #2499fd;
    display: flex;
    list-style-type: none;

    > li {
        width: 33%;
        text-align: center;
        text-transform: capitalize;
    }
`;

const PaymentListHeading = styled(PaymentList)`
    padding-top: 20px;

    li {
        color: #2499fd;
        font-size: 15px;
        font-weight: 900;
    }
`;

const Payments = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        async function requestApi() {
            await axios.get('https://api.razorpay.com/v1/payments', {
                header: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            },
            {
                auth: {
                username: 'rzp_test_Mnn7X4p5fG6fBP',
                password: '2VxXUoTJrp1zVAOzRWMV22ci'
                }
            }).then((response) => setLogs(response.data.items));
        }

        requestApi();
    }, [])

    return (
        <>
            <PaymentHeading>all payment details till now</PaymentHeading>
            <PaymentListHeading>
                <li><span>amount</span></li>
                <li><span>product</span></li>
                <li><span>status</span></li>
            </PaymentListHeading>
            {logs.map(value => {
                return (
                    <PaymentList key={value.id}>
                        <li><span>&#8377; {value.amount / 100}</span></li>
                        <li><span>{value.description}</span></li>
                        <li><span>{value.status}</span></li>
                    </PaymentList>
                )
            })}
        </>
    )
}

export default Payments
