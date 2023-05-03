import React from 'react';
import styles from './Features.module.css';

import Bikes from '../../../Bikes.json';
import { useParams } from 'react-router-dom';

import Feature from './Feature';

const Features = () => {
	const params = useParams();
	const currentBikeIndex = Bikes.bikes.findIndex(bike => bike.id === params.bikeId);

	return (
		<section className={styles.features}>
			<div className={styles.container}>
				{Bikes?.bikes[currentBikeIndex]?.pageDetail?.features?.map((feature, index) => (
					<Feature key={index} title={feature.title} tagline={feature.tagline} />
				))}
			</div>
		</section>
	);
};

export default Features;
