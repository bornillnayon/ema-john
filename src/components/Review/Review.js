import React, { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Reviewitem from '../Reviewintem.js/Reviewitem';

const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        //Cart
        const saveCart = getDatabaseCart();
        const productKey = Object.keys(saveCart);
        const cartProducts = productKey.map(key=> {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveCart[key];
            return product;
        });
        setCart (cartProducts);
    },[])
    return (
        <div>
            <h1>Cart Items: {cart.length}</h1>
            {
                cart.map (pd => <Reviewitem 
                    product={pd}
                    key = {pd.key}
                    ></Reviewitem>)
            }
        </div>
    );
};

export default Review;