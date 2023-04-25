import React from 'react';

// Components
import MobileCartProduct from './MobileCartProduct';

import styles from './MobileCart.module.css';

// Redux
import { useSelector } from 'react-redux';

const MobileCart = () => {
	const cart = useSelector(state => state.cart);

	return (
		<div className={styles['mobile-cart']}>
			{cart.cartItems.map(item => (
				<MobileCartProduct
					key={item.id}
					id={item.id}
					name={item.name}
					frame={item.frame}
					color={item.color}
					price={item.price}
					quantity={item.quantity}
					subtotal={item.subtotal}
				/>
			))}
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
