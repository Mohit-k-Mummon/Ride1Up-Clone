import React from 'react';

import DesktopCartProduct from './DesktopCartProduct';

import styles from './DesktopCart.module.css';

const DesktopCart = () => {
	return (
		<div className={styles['desktop-cart']}>
			<div className={styles.titles}>
				<div className={styles.title}></div>
				<div className={styles.title}>Product</div>
				<div className={styles.title}>Price</div>
				<div className={styles.title}>Quantity</div>
				<div className={styles.title}>Subtotal</div>
			</div>
			<DesktopCartProduct />
			<div className={styles['update-cart']}>
				<div className={styles.coupon}>
					<input type='text' placeholder='Coupon code' />
					<button className={styles['coupon-button']}>Apply coupon</button>
				</div>
				<button className={styles['update-button']}>Update cart</button>
			</div>
		</div>
	);
};

export default DesktopCart;
