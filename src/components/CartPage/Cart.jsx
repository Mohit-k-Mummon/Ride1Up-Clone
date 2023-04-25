import React from 'react';

// Components
import CartActive from './CartActive';
import ShippingAccordian from './ShippingAccordian';
import CartEmpty from './CartEmpty';

import styles from './Cart.module.css';

// React-Redux
import { useSelector } from 'react-redux';

const Cart = () => {
	const cart = useSelector(state => state.cart);
	return (
		<section className={styles.cart}>
			<h1 className={styles.heading}>Cart</h1>
			{cart.cartItems.length !== 0 ? <CartActive /> : <CartEmpty />}
			<ShippingAccordian />
		</section>
	);
};

export default Cart;
