import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as CrossIcon } from '../../assets/Cart/xmark-solid.svg';

import styles from './MobileCartProduct.module.css';

const MobileCartProduct = () => {
	return (
		<div className={styles.product}>
			<div className={styles['remove-icon']}>
				<CrossIcon />
			</div>
			<div className={styles.row}>
				<div className={styles.name}>
					<h1 className={styles.title}>Product:</h1>
					<Link className={styles['product-link']} to={'/product/revv-1'}>
						Revv 1
					</Link>
				</div>
				<div className={styles.estimate}>Estimated delivery Apr 27th - May 1st</div>
				<div className={styles.frame}>
					<h1 className={styles.title}>Frame Type:</h1>
					<p className={styles.option}>FS</p>
				</div>
				<div className={styles.color}>
					<h1 className={styles.title}>Color:</h1>
					<p className={styles.option}>Graphite Gray</p>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.price}>
					<h1 className={styles.title}>Price:</h1>
					<p className={styles.option}>$2,395.00</p>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.quantity}>
					<h1 className={styles.title}>Quantity:</h1>
					<input
						defaultValue={1}
						className={styles['quantity-input']}
						type='number'
						inputMode='numeric'
					/>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.subtotal}>
					<h1 className={styles.title}>Subtotal:</h1>
					<p className={`${styles.option} ${styles.bold}`}>$2,395.00</p>
				</div>
			</div>
		</div>
	);
};

export default MobileCartProduct;
