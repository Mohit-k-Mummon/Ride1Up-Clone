import React from 'react';
import styles from './CopyRight.module.css';

import visa from '../../../assets/Footer/visa.png';
import mastercard from '../../../assets/Footer/mastercard.png';
import americanexpress from '../../../assets/Footer/americanexpress.png';
import discover from '../../../assets/Footer/discover.png';
import paypal from '../../../assets/Footer/paypal.png';

const CopyRight = () => {
	return (
		<div className={styles.copyright}>
			<div className={styles['links-container']}>
				<a className='link' href='https://www.google.com'>
					Terms of Use
				</a>
				<a className='link' href='https://www.google.com'>
					Privacy Policy
				</a>
			</div>
			<div className={styles['copy-text']}>
				Copyright Ride1UP © 2023. All Rights Reserved.
			</div>
			<div className={styles.payments}>
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
