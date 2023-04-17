import React from 'react';

// Images
import serviceIcon from '../../../assets/Footer/ride1up-serviceandsupport.png';
import warrantyIcon from '../../../assets/Footer/ride1up-1yearwarranty.png';
import trialIcon from '../../../assets/Footer/ride1up-30daytrial.png';
import shippingIcon from '../../../assets/Footer/ride1up-freeshipping.png';

const ProductHighlights = () => {
	return (
		<div className='product-highlights'>
			<div className='product-highlight'>
				<a href=''>
					<img className='product-highlight__icon' src={serviceIcon} alt='' />
				</a>
				<a href=''>
					<h1 className='product-highlight__title'>Service & Support</h1>
				</a>
				<p className='product-highlight__description'>
					Seasoned Bike Mechanics Offer Expert Technical Support and Friendly Customer
					Service.
				</p>
				<a className='product-highlight__link' href='google.com'>
					Learn More
				</a>
			</div>
			<div className='product-highlight'>
				<a href=''>
					<img className='product-highlight__icon' src={warrantyIcon} alt='' />
				</a>
				<a href=''>
					<h1 className='product-highlight__title'>1-Year Warranty</h1>
				</a>
				<p className='product-highlight__description'>
					Every Ride1Up eBike Comes With a Warranty Against Manufacturing Defects. *Terms
					Apply
				</p>
				<a className='product-highlight__link' href='google.com'>
					Learn More
				</a>
			</div>
			<div className='product-highlight'>
				<a href=''>
					<img className='product-highlight__icon' src={trialIcon} alt='' />
				</a>
				<a href=''>
					<h1 className='product-highlight__title'>30-Day Returns*</h1>
				</a>
				<p className='product-highlight__description'>
					We're Confident That You'll Be Thrilled! If Conditions Are Met, Send It Back For
					a Refund. *Terms and Model Exclusions Apply
				</p>
				<a className='product-highlight__link' href='google.com'>
					Learn More
				</a>
			</div>
			<div className='product-highlight'>
				<a href=''>
					<img className='product-highlight__icon' src={shippingIcon} alt='' />
				</a>
				<a href=''>
					<h1 className='product-highlight__title'>Free Shipping</h1>
				</a>
				<p className='product-highlight__description'>
					On All Bikes to Contiguous 48 States. $100 Direct Shipping to Canada. Exclusions
					Apply.
				</p>
				<a className='product-highlight__link' href='google.com'>
					Learn More
				</a>
			</div>
		</div>
	);
};

export default ProductHighlights;
