import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './DesktopCartProduct.module.css';

// Imgs
import { imageArray } from '../BikeDetailsPage/bikeImagePath';
// Redux
import { removeBike, toggleUpdate } from '../features/cart-slice';
import { useDispatch } from 'react-redux';

// import bike from '../../assets/Home/Bikes/Revv 1/FS/Revv1_FS_Gray_Profile.jpg';

const DesktopCartProduct = props => {
	const { id, name, frame, color, price, subtotal, quantity } = props;

	// Formatting bike price and subtotal
	const formatNumber = num => {
		if (num) {
			return num.toLocaleString('en-us', {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			});
		}
	};

	const formattedPrice = formatNumber(price);
	const formattedSubtotal = formatNumber(subtotal);

	// Convert bike name to displayable name
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

	// Remove bike handler
	const dispatch = useDispatch();
	const removeBikeHandler = (id, price) => {
		dispatch(removeBike({ id: id, price: price }));
	};

	// Display correct bike image
	let bike = imageArray[name][frame][color][0];

	// Quantity update handler
	const quantityRef = useRef();
	const quantityUpdateHandler = () => {
		dispatch(toggleUpdate({ id: id, newQuantity: quantityRef.current.value }));
	};

	return (
		<div className={styles.product}>
			<div className={styles['bike-img']}>
				<div
					onClick={() => {
						removeBikeHandler(id, price);
					}}
					className={styles.cross}
				>
					<span>x</span>
				</div>
				<img src={bike} alt='cart-bike' />
			</div>
			<div>
				<Link className={styles.name} to={'/product/revv-1'}>
					{convertedName}
				</Link>
				<p className={styles['estimated-delivery']}>
					Estimated delivery time Apr 27th - May 1st
				</p>
				<p className={styles.frame}>
					<span>Frame Type:</span> {frame}
				</p>
				<p className={styles.color}>
					<span>Color:</span> {color}
				</p>
			</div>
			<div className={styles['price-container']}>
				<p>${formattedPrice}</p>
			</div>
			<div className={styles['quantity-container']}>
				<input
					ref={quantityRef}
					onChange={quantityUpdateHandler}
					inputMode='numeric'
					defaultValue={quantity}
					type='number'
					min={'1'}
					max={'25'}
				/>
			</div>
			<div className={styles['subtotal-container']}>
				<p>${formattedSubtotal}</p>
			</div>
		</div>
	);
};

export default DesktopCartProduct;
