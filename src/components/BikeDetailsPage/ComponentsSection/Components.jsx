import React from 'react';
import styles from './Components.module.css';
import Bikes from '../../../Bikes.json';

import { useParams } from 'react-router-dom';

import Component from './Component';

const Components = () => {
	const params = useParams();
	const currentBikeIndex = Bikes.bikes.findIndex(bike => bike.id === params.bikeId);
	return (
		<section className={styles.components}>
			<h1 className={styles.heading}>Components</h1>
			<div className={styles.container}>
				{Bikes.bikes[currentBikeIndex].pageDetail?.components?.map((component, index) => (
					<Component
						key={index}
						icon={component.icon}
						title={component.title}
						content={component.content}
					/>
				))}
			</div>
		</section>
	);
};

export default Components;
