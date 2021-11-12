import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product)
    const { img, name, seller, stock, price, star } = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="products">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3 className="name">{name}</h3>
                <p><small>By: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                ></Rating>
                <br />
                <br />
                <button className="btn-regular"
                    onClick={() => props.addToCart(props.product)}>{cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;