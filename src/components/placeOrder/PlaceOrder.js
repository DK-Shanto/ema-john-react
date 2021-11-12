import React from 'react';
import img from '../../images/giphy.gif'
import './PlaceOrder.css'

const PlaceOrder = () => {
    return (
        <div className="pro">
            <h1>Your order has been Placed</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;