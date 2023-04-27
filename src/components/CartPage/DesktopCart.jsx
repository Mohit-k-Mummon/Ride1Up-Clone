import React from 'react';

import DesktopCartProduct from './DesktopCartProduct';

import styles from './DesktopCart.module.css';

// Redux
import { useSelector } from 'react-redux';
import { toggleOffUpdatedBanner, toggleOnUpdatedBanner, updateCart } from '../features/cart-slice';
import { useDispatch } from 'react-redux';

const DesktopCart = props => {
	const cart = useSelector(state => state.cart);
	const dispatch = useDispatch();
	const cartUpdateHandler = () => {
		dispatch(updateCart());
		window.scrollTo({ top: 0, behavior: 'smooth' });
		dispatch(toggleOnUpdatedBanner());
		setTimeout(() => {
			dispatch(toggleOffUpdatedBanner());
		}, 5_000);
	};
	return (
		<div className={styles['desktop-cart']}>
			<div className={styles.titles}>
				<div className={styles.title}></div>
				<div className={styles.title}>Product</div>
				<div className={styles.title}>Price</div>
				<div className={styles.title}>Quantity</div>
				<div className={styles.title}>Subtotal</div>
			</div>
			{cart.cartItems.map(item => (
				<DesktopCartProduct
					key={item.id}
					id={item.id}
					name={item.name}
					frame={item.frame}
					color={item.color}
					price={item.price}
					quantity={item.quantity}
					subtotal={item.subtotal}
					startDateString={props.startDateString}
					endDateString={props.endDateString}
				/>
			))}
			<div className={styles['update-cart']}>
				<div className={styles.coupon}>
					<input type='text' placeholder='Coupon code' />
					<button className={styles['coupon-button']}>Apply coupon</button>
				</div>
				<button
					onClick={cartUpdateHandler}
					disabled={!cart.cartUpdated}
					className={styles['update-button']}
				>
					Update cart
				</button>
			</div>
		</div>
	);
};

export default DesktopCart;
