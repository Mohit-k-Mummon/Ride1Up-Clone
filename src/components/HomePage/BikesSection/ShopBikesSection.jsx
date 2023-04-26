import React from 'react';
import styles from './ShopBikesSection.module.css';

import bikesData from '../../../Bikes.json';

// Component
import Bike from './Bike';

// Images
import { ReactComponent as ElectricIcon } from '../../../assets/Home/electric-icon.svg';

const ShopBikesSection = () => {
	return (
		<section id='shop-bikes-section' className={styles['shop-bikes']}>
			<header className={styles.header}>
				<ElectricIcon />
				<h1>Find the Best Value Electric Bike</h1>
			</header>
			<div className={styles.container}>
				{bikesData.bikes.map(bike => (
					<Bike key={bike.id} id={bike.id} name={bike.name} versions={bike.versions} />
				))}
			</div>
		</section>
	);
};

export default ShopBikesSection;
