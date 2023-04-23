import React from 'react';

import CartActive from './CartActive';

import ShippingAccordian from './ShippingAccordian';

import CartEmpty from './CartEmpty';

const Cart = () => {
	return (
		<section className='cart-container'>
			<h1 className='cart-heading'>Cart</h1>
			{/* <CartEmpty /> */}
			<CartActive />
			<ShippingAccordian />
		</section>
	);
};

export default Cart;
