import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    //  const totalPrice = cart.reduce((total, prd) => total + prd.price, 0 );
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 6.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tax = (total / 10).toFixed(2);

    return (
        <div className="cart-item">
            <h3>This is Cart</h3>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Shipping Cost: $ {shipping} </small></p>
            <p><small>tax: ${tax} </small></p>
            <p>Total Price : $ {Number(total + Number(tax) + shipping).toFixed(2)}</p>
            <br />
            <Link to="review">
                <button className="main-button">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;