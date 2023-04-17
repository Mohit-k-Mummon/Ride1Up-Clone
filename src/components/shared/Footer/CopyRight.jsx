import React from 'react';

import visa from '../../../assets/Footer/visa.png';
import mastercard from '../../../assets/Footer/mastercard.png';
import americanexpress from '../../../assets/Footer/americanexpress.png';
import discover from '../../../assets/Footer/discover.png';
import paypal from '../../../assets/Footer/paypal.png';

const CopyRight = () => {
	return (
		<div className='copyright'>
			<div className='copyright__links'>
				<a className='link' href='google.com'>
					Terms of Use
				</a>
				<a className='link' href='google.com'>
					Privacy Policy
				</a>
			</div>
			<div className='copy-text'>Copyright Ride1UP © 2023. All Rights Reserved.</div>
			<div className='accepted-payments'>
				<img className='payment-icon' src={visa} alt='visa logo' />
				<img className='payment-icon' src={mastercard} alt='mastercard logo' />
				<img className='payment-icon' src={americanexpress} alt='american express logo' />
				<img className='payment-icon' src={discover} alt='discover logo' />
				<img className='payment-icon' src={paypal} alt='paypal logo' />
			</div>
		</div>
	);
};

export default CopyRight;
