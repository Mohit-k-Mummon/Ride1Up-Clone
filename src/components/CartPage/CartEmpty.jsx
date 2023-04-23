import React from 'react';

// React Router
import { Link } from 'react-router-dom';
import ride1upLogo from '../../assets/Cart/ride-up-bg-logo.png';

const CartEmpty = () => {
	return (
		<>
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
		</>
	);
};

export default CartEmpty;
