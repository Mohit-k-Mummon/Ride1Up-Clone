import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CrossIcon } from '../../assets/Cart/xmark-solid.svg';

import bike from '../../assets/Home/Bikes/Revv 1/FS/Revv1_FS_Gray_Profile.jpg';

const DesktopCartProduct = () => {
	return (
		<div className='desktop-cart-product'>
			<div className='desktop-bike-img-container'>
				<CrossIcon className='cart-cross-icon' />
				<img className='product-bike' src={bike} alt='' />
			</div>
			<div className='desktop-product-container'>
				<Link className='desktop-product-name' to={'/product/revv-1'}>
					Revv 1
				</Link>
				<p className='desktop-estimated-delivery-time'>
					Estimated delivery time Apr 27th - May 1st
				</p>
				<p className='desktop-frame'>
					<span>Frame Type:</span> Large
				</p>
				<p className='desktop-color'>
					<span>Color:</span> Graphite Gray
				</p>
			</div>
			<div className='desktop-product-price-container'>
				<p>$2,345.00</p>
			</div>
			<div className='desktop-product-quantity-container'>
				<input inputMode='numeric' defaultValue={2} type='number' />
			</div>
			<div className='desktop-product-subtotal-container'>
				<p>$2,190.00</p>
			</div>
		</div>
	);
};

export default DesktopCartProduct;
