import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as CrossIcon } from '../../assets/Cart/xmark-solid.svg';

const MobileCartProduct = () => {
	return (
		<div className='cart-product'>
			<div className='remove-button-container'>
				<CrossIcon className='cart-cross-icon' />
			</div>
			<div className='product-container'>
				<div className='product-name'>
					<h1 className='product-info-title'>Product:</h1>
					<Link className='link-to-product' to={'/product/roadster-v2'}>
						Roadster v2
					</Link>
				</div>
				<div className='estimated-delivery'>Estimated delivery Apr 27th - May 1st</div>
				<div className='product-frame'>
					<h1 className='product-info-title'>Frame Type:</h1>
					<p className='product-option'>Large</p>
				</div>
				<div className='product-color'>
					<h1 className='product-info-title'>Color:</h1>
					<p className='product-option'>Black, Matte</p>
				</div>
			</div>
			<div className='price-container'>
				<div className='product-color'>
					<h1 className='product-info-title'>Price:</h1>
					<p className='product-option'>$1095.00</p>
				</div>
			</div>
			<div className='quantity-container'>
				<div className='product-quantity'>
					<h1 className='product-info-title'>Quantity:</h1>
					<input
						defaultValue={2}
						className='quantity-input'
						type='number'
						inputMode='numeric'
					/>
				</div>
			</div>
			<div className='subtotal-container'>
				<div className='product-subtotal'>
					<h1 className='product-info-title'>Subtotal:</h1>
					<p className='product-option subtotal-bold'>$2,190.00</p>
				</div>
			</div>
		</div>
	);
};

export default MobileCartProduct;
