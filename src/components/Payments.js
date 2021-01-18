import React, { useEffect } from 'react';
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
    

`;

const Payments = () => {
    //const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios.post('https://cors-anywhere.herokuapp.com/https://api.razorpay.com/v1/payments', {
            
        }, 
        {
            auth: {
              username: 'rzp_test_Mnn7X4p5fG6fBP',
              password: '2VxXUoTJrp1zVAOzRWMV22ci'
            }
        }).then((response) => console.log(response));
    }, [])

    return (
        <>
            <PaymentHeading>all payment details till now</PaymentHeading>
            <PaymentList></PaymentList>
        </>
    )
}

export default Payments
