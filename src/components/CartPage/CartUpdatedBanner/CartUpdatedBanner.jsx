import React, { useRef } from 'react';
import styles from './CartUpdatedBanner.module.css';

import checkmark from '../../../assets/shared/accept.png';

// Redux
import { useSelector } from 'react-redux';

const CartUpdatedBanner = () => {
	const cart = useSelector(state => state.cart);
	const content = useRef();
	return (
		<section
			ref={content}
			className={cart.cartUpdatedDisplayBanner ? styles['banner-active'] : styles.banner}
			style={
				cart.cartUpdatedDisplayBanner
					? { height: content.current.scrollHeight }
					: { height: '0px' }
			}
		>
			<div className={styles['banner-container']}>
				<img className={styles.checkmark} src={checkmark} alt='' />
				<span className={styles.message}>Cart updated.</span>
			</div>
		</section>
	);
};

export default CartUpdatedBanner;
