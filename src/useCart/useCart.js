import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getStoredCart();
        const addedCartValue = [];
        if (products.length) {
            for (const cartKey in storedCart) {
                const addedCart = products.find(product => cartKey === product.key);
                if (addedCart) {
                    const quantity = storedCart[cartKey];
                    addedCart.quantity = quantity;
                }
                addedCartValue.push(addedCart);
            }
        }
        setCart(addedCartValue);
    }, [products])
    return [cart, setCart];
}

export default useCart;