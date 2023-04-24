import React from 'react';

// React Router
import { Link } from 'react-router-dom';
import ride1upLogo from '../../assets/Cart/ride-up-bg-logo.png';

import styles from './CartEmpty.module.css';

const CartEmpty = () => {
	return (
		<>
			<div className={styles['cart-empty']}>
				<div className={styles.icon}></div>
				<p>Your cart is currently empty.</p>
			</div>
			<div className={styles['bg-logo']}>
				<img src={ride1upLogo} alt='' />
			</div>
			<Link to={'/'} className={styles['return-link']}>
				Return to Home
			</Link>
		</>
	);
};

export default CartEmpty;
