import React from 'react';

import CartActive from './CartActive';

import ShippingAccordian from './ShippingAccordian';

import CartEmpty from './CartEmpty';

import styles from './Cart.module.css';

const Cart = () => {
	return (
		<section className={styles.cart}>
			<h1 className={styles.heading}>Cart</h1>
			{/* <CartEmpty /> */}
			<CartActive />
			<ShippingAccordian />
		</section>
	);
};

export default Cart;
