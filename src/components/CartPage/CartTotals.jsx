import React from 'react';
import styles from './CartTotals.module.css';

import { ReactComponent as PaypalLogo } from '../../assets/Cart/paypal.svg';
import acceptedPayments from '../../assets/Cart/safe_checkout.png';

// Redux
import { useSelector } from 'react-redux';

const CartTotals = () => {
	const cart = useSelector(state => state.cart);

	const numberFormat = number => {
		return number.toLocaleString('en-us', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});
	};
	const formattedSubtotal = numberFormat(cart.cartSubtotal);
	return (
		<section className={styles.totals}>
			<h1 className={styles.heading}>Cart Totals</h1>
			<div className={styles['totals-content']}>
				<div className={styles.container}>
					<h2>Subtotal:</h2>
					<span>${formattedSubtotal}</span>
				</div>
				<div className={styles.container}>
					<h2>Free Shipping for Orders Over $100:</h2>
					<span>Shipping options will be updated during checkout.</span>
				</div>
				<div className={styles.container}>
					<h2>Tax:</h2>
					<span>Taxes will be calculated at checkout if applicable.</span>
				</div>
				<div className={styles.container}>
					<h2>Total:</h2>
					<span>${formattedSubtotal}</span>
				</div>
			</div>
			<div className={styles.checkout}>
				<button className={styles['paypal-button']}>
					<PaypalLogo />
				</button>
				<button className={styles['checkout-button']}>Secure Checkout</button>
				<div className={styles['accepted-payments']}>
					<img src={acceptedPayments} alt='' />
				</div>
			</div>
		</section>
	);
};

export default CartTotals;
