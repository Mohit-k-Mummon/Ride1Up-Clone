import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CrossIcon } from '../../assets/Cart/xmark-solid.svg';

import bike from '../../assets/Home/Bikes/Revv 1/FS/Revv1_FS_Gray_Profile.jpg';

import styles from './DesktopCartProduct.module.css';

const DesktopCartProduct = () => {
	return (
		<div className={styles.product}>
			<div className={styles['bike-img']}>
				<CrossIcon />
				<img src={bike} alt='cart-bike' />
			</div>
			<div>
				<Link className={styles.name} to={'/product/revv-1'}>
					Revv 1
				</Link>
				<p className={styles['estimated-delivery']}>
					Estimated delivery time Apr 27th - May 1st
				</p>
				<p className={styles.frame}>
					<span>Frame Type:</span> Large
				</p>
				<p className={styles.color}>
					<span>Color:</span> Graphite Gray
				</p>
			</div>
			<div className={styles['price-container']}>
				<p>$2,345.00</p>
			</div>
			<div className={styles['quantity-container']}>
				<input inputMode='numeric' defaultValue={2} type='number' />
			</div>
			<div className={styles['subtotal-container']}>
				<p>$2,190.00</p>
			</div>
		</div>
	);
};

export default DesktopCartProduct;
