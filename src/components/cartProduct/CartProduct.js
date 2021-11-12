import React from 'react';

const CartProduct = (props) => {
    const { img, name, seller, stock, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="products">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3 className="name">{name}</h3>
                <p><small>By: {seller}</small></p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <br />
                <button className="btn-regular"
                    onClick={() => { handleRemove(key) }}>Remove</button>
            </div>
        </div>
    );
};

export default CartProduct;