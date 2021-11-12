import React from 'react';
import { useNavigate } from 'react-router';
import useCart from '../../useCart/useCart';
import useProducts from '../../useProducts/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import CartProduct from '../cartProduct/CartProduct';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();


    const handleDelete = () => {
        navigate('/placeorder');
        setCart([]);
        clearTheCart();
    }

    const handleRemove = (id) => {
        const newCart = cart.filter(product => id !== product.key);
        //console.log(newCart)
        setCart(newCart);
        deleteFromDb(id);
    }

    return (
        <div className="product">
            <div className="product-container">
                {
                    cart.map(product => <CartProduct
                        key={product.key}
                        handleRemove={handleRemove}
                        product={product}></CartProduct>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleDelete} className='btn-regular'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;