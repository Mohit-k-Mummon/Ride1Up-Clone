import React from 'react';

import MobileCartProduct from './MobileCartProduct';

const CartActive = () => {
	return (
		<div className='mobile-cart-active'>
			<MobileCartProduct />
			<div className='update-cart-container'>
				<div className='coupon-container'>
					<input type='text' placeholder='Coupon code' />
					<button className='coupon-button'>Apply Coupon</button>
				</div>
				<button className='update-cart-button'>Update cart</button>
			</div>
		</div>
	);
};

export default CartActive;
