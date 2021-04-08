import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Order = () => {
    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://peaceful-woodland-11045.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])
    console.log(order);
    return (
        <div>
            <h1>Order detail</h1>
            {
                order.map(order => <li>{order.name},{order.email},{order.product.name},{order.orderTime} </li>)
            }
        </div>
    );
};

export default Order;