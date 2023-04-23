import React from 'react';

import MobileCartProduct from './MobileCartProduct';
import DesktopCartProduct from './DesktopCartProduct';

const CartActive = () => {
	return (
		<>
			{/* Mobile Cart */}
			<div className='mobile-cart-active'>
				<MobileCartProduct />
				<MobileCartProduct />
				<div className='update-cart-container'>
					<div className='coupon-container'>
						<input type='text' placeholder='Coupon code' />
						<button className='coupon-button'>Apply Coupon</button>
					</div>
					<button className='update-cart-button'>Update cart</button>
				</div>
			</div>
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
