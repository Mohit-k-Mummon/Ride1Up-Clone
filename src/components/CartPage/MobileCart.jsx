import React from 'react';

import MobileCartProduct from './MobileCartProduct';

import styles from './MobileCart.module.css';

const MobileCart = () => {
	return (
		<div className={styles['mobile-cart']}>
			<MobileCartProduct />
			<div className={styles['update-cart']}>
				<div className={styles.coupon}>
					<input type='text' placeholder='Coupon code' />
					<button>Apply Coupon</button>
				</div>
				<button className={styles['update-button']}>Update cart</button>
			</div>
		</div>
	);
};

export default MobileCart;
