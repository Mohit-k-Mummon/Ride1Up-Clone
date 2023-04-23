import React from 'react';

import MobileCart from './MobileCart';
import DesktopCartProduct from './DesktopCartProduct';

const CartActive = () => {
	return (
		<>
			<MobileCart />
			{/* Desktop Cart */}
			<div className='desktop-cart-active'>
				<div className='desktop-product-titles'>
					<div className='desktop-product-title'></div>
					<div className='desktop-product-title'>Product</div>
					<div className='desktop-product-title'>Price</div>
					<div className='desktop-product-title'>Quantity</div>
					<div className='desktop-product-title'>Subtotal</div>
				</div>

				<DesktopCartProduct />
				<div className='desktop-update-cart-container'>
					<div className='desktop-coupon-container'>
						<input type='text' placeholder='Coupon code' />
						<button className='desktop-coupon-button'>Apply coupon</button>
					</div>
					<button className='desktop-update-cart-button'>Update cart</button>
				</div>
			</div>
		</>
	);
};

export default CartActive;
