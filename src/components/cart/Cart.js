import React from 'react';

const Cart = (props) => {
    let total = 0;
    let quantity = 0;
    const { cart } = props;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        quantity = quantity + product.quantity;
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Product Order: {quantity}</h5>
            <h3>Total price: {total}</h3>
        </div>
    );
};

export default Cart;