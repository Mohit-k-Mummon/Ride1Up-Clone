import React from 'react';
import styles from './Feature.module.css';

import speedIcon from '../../../assets/BikeDetailsPage/speed-icon1.png';
import motorIcon from '../../../assets/BikeDetailsPage/motor-icon-11.png';
import rangeIcon from '../../../assets/BikeDetailsPage/range-icon1.png';
import frameIcon from '../../../assets/BikeDetailsPage/frame_icon1.png';
import comfortIcon from '../../../assets/BikeDetailsPage/comfort_icon1.png';

const Feature = props => {
	const { title, tagline } = props;

	let Icon;
	switch (title) {
		case 'speed':
			Icon = () => <img className={styles.icon} src={speedIcon} alt='' />;
			break;
		case 'motor':
			Icon = () => <img className={styles.icon} src={motorIcon} alt='' />;
			break;
		case 'range':
			Icon = () => <img className={styles.icon} src={rangeIcon} alt='' />;
			break;
		case 'frame':
			Icon = () => <img className={styles.icon} src={frameIcon} alt='' />;
			break;
		case 'comfort':
			Icon = () => <img className={styles.icon} src={comfortIcon} alt='' />;
			break;
		default:
			break;
	}
	return (
		<div className={styles.feature}>
			<Icon />
			<h1>{title}</h1>
			<p>{tagline}</p>
		</div>
	);
};

export default Feature;
