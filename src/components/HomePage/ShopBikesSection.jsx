import React from 'react';

import bikesData from '../../Bikes.json';

// Component
import Bike from './Bike';

// Images
import { ReactComponent as ElectricIcon } from '../../assets/Home/electric-icon.svg';

const ShopBikesSection = () => {
	return (
		<section id='shop-bikes-section' className='shop-bikes'>
			<header className='shop-bikes__header'>
				<ElectricIcon />
				<h1>Find the Best Value Electric Bike</h1>
			</header>
			<div className='shop-bikes__container'>
				{bikesData.bikes.map(bike => (
					<Bike key={bike.name} name={bike.name} versions={bike.versions} />
				))}
			</div>
		</section>
	);
};

export default ShopBikesSection;
