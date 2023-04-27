import React from 'react';
import { useRef } from 'react';
import styles from './BikeAddedBanner.module.css';

// Router
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import checkmark from '../../../assets/shared/accept.png';

// Redux
import { useSelector } from 'react-redux';

const BikeAddedBanner = () => {
	const params = useParams();
	const name = params.bikeId;

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
		case 'rift':
			convertedName = 'Rift';
			break;
		default:
			break;
	}

	const cart = useSelector(state => state.cart);
	const content = useRef();

	return (
		<section
			ref={content}
			className={cart.bikeAddedDisplayBanner ? styles['banner-active'] : styles.banner}
			style={
				cart.bikeAddedDisplayBanner
					? { height: content.current.scrollHeight }
					: { height: '0px' }
			}
		>
			<div className={styles['banner-container']}>
				<img className={styles.checkmark} src={checkmark} alt='' />
				<span
					className={styles.message}
				>{`"${convertedName}" has been added to your cart.`}</span>
				<Link className={styles.link} to={'/cart'}>
					View Cart
				</Link>
			</div>
		</section>
	);
};

export default BikeAddedBanner;
