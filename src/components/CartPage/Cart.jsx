import React from 'react';

import ride1upLogo from '../../assets/Cart/ride-up-bg-logo.png';

// React Router
import { Link } from 'react-router-dom';

import ShippingAccordian from './ShippingAccordian';

const Cart = () => {
	return (
		<section className='cart-container'>
			<h1 className='cart-heading'>Cart</h1>
			<div className='cart-empty-state'>
				<div className='cart-empty-state__icon'></div>
				<p>Your cart is currently empty.</p>
			</div>
			<div className='bg-logo'>
				<img src={ride1upLogo} alt='' />
			</div>
			<Link to={'/'} className='cart-return-home-link'>
				Return to Home
			</Link>
			<ShippingAccordian />
		</section>
	);
};

export default Cart;
