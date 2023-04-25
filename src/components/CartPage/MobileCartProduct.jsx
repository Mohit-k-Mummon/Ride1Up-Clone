import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as CrossIcon } from '../../assets/Cart/xmark-solid.svg';

import styles from './MobileCartProduct.module.css';

import { useDispatch } from 'react-redux';
import { removeBike } from '../features/cart-slice';

const MobileCartProduct = props => {
	const { id, name, frame, color, price, subtotal, quantity } = props;

	const formatPrice = num => {
		if (num) {
			return num.toLocaleString('en-us', {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			});
		}
	};

	const formattedPrice = formatPrice(price);
	const formattedSubtotal = formatPrice(subtotal);

	let convertedName;
	switch (name) {
		case 'revv-1':
			convertedName = 'Revv 1';
			break;
		case 'roadster-v2':
			convertedName = 'Roadster v2';
			break;
		case 'core-5':
			convertedName = 'Core-5';
			break;
		case 'turris':
			convertedName = 'Turris';
			break;
		case 'cruiser':
			convertedName = 'Cafe Cruiser';
			break;
		case '700-series':
			convertedName = '700 Series';
			break;
		case 'lmtd':
			convertedName = "LMT'D";
			break;
		case 'prodigy':
			convertedName = 'Prodigy';
			break;
		default:
			break;
	}

	const dispatch = useDispatch();
	const removeBikeHandler = (id, price) => {
		dispatch(removeBike({ id: id, price: price }));
	};

	return (
		<div className={styles.product}>
			<div className={styles['remove-icon']}>
				<CrossIcon onClick={() => removeBikeHandler(id, price)} />
			</div>
			<div className={styles.row}>
				<div className={styles.name}>
					<h1 className={styles.title}>Product:</h1>
					<Link className={styles['product-link']} to={'/product/revv-1'}>
						{convertedName}
					</Link>
				</div>
				<div className={styles.estimate}>Estimated delivery Apr 27th - May 1st</div>
				<div className={styles.frame}>
					<h1 className={styles.title}>Frame Type:</h1>
					<p className={styles.option}>{frame}</p>
				</div>
				<div className={styles.color}>
					<h1 className={styles.title}>Color:</h1>
					<p className={styles.option}>{color}</p>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.price}>
					<h1 className={styles.title}>Price:</h1>
					<p className={styles.option}>${formattedPrice}</p>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.quantity}>
					<h1 className={styles.title}>Quantity:</h1>
					<input
						defaultValue={quantity}
						className={styles['quantity-input']}
						type='number'
						inputMode='numeric'
					/>
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.subtotal}>
					<h1 className={styles.title}>Subtotal:</h1>
					<p className={`${styles.option} ${styles.bold}`}>${formattedSubtotal}</p>
				</div>
			</div>
		</div>
	);
};

export default MobileCartProduct;
