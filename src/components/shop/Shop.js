import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchDisplay, setsearchDisplay] = useState([]);

    const addToCart = (cartProduct) => {
        const newCart = [...cart, cartProduct];
        setCart(newCart);
        addToDb(cartProduct.key);
    }

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setsearchDisplay(data)
            })
    }, [])

    useEffect(() => {
        const storedCart = getStoredCart();
        const addedValueCart = [];
        if (products.length) {
            for (const cartValue in storedCart) {
                const addedCart = products.find(product => cartValue === product.key);
                if (addedCart) {
                    const quantity = storedCart[cartValue];
                    addedCart.quantity = quantity;
                }
                addedValueCart.push(addedCart);
            }
            setCart(addedValueCart);
        }
    }, [products])

    const handleSearch = (event) => {
        const searchValue = event.target.value;
        const searchResult = products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()));
        setsearchDisplay(searchResult);
    }
    return (
        <>
            <div className="search-container">
                <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search Items here" />
            </div>
            <div className="product">
                <div className="product-container">
                    {
                        searchDisplay.map(product => <Product
                            key={product.key}
                            product={product}
                            addToCart={addToCart}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;