import React from 'react';
import styles from './Included.module.css';
import { useParams } from 'react-router-dom';

import Card from './Card';

import { includedSectionData } from './IncludedSectionData';
console.log(includedSectionData);

const Included = () => {
	const currentBike = useParams();
	return (
		<section className={styles.included}>
			<h1 className={styles.heading}>What's Included</h1>
			<div className={styles.container}>
				{includedSectionData[currentBike.bikeId]?.map((data, index) => (
					<Card key={index} path={data.path} content={data.content} />
				))}
			</div>
		</section>
	);
};

export default Included;
