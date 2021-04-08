import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Order from '../Order/Order';


const Checkout = () => {
    const { productID } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [checkout, setCheckout] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-woodland-11045.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setCheckout(data))
    }, [])

    const selectProduct = checkout.find(product => product._id === productID)
    console.log(checkout);

    const handleOrderSubmit = () => {
        const orderDetails = { ...loggedInUser, product: selectProduct, orderTime: new Date() };
        fetch('https://peaceful-woodland-11045.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('order Successfully');
                }
            })
    }

    // const deleteProduct = id => {
    //     //console.log(id);
    //     fetch(`/delete/${id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log('deleted successfully')
    //         })
    // }


    return (
        <div>

            <h1>CHECKOUT</h1>
            <p>Product Name : {selectProduct?.name} </p>
            <p>Price : {selectProduct?.price}</p>
            <p>weight : {selectProduct?.weight}</p>
            <button onClick={handleOrderSubmit}>CheckOut</button>




        </div>
    );
};

export default Checkout;