import React from 'react';
import styles from './Dimensions.module.css';

import MapItem from './MapItem';
import { dimensionsData } from './DimensionsData';
import { useParams } from 'react-router-dom';

const Dimensions = props => {
	const { version } = props; // data from ProductShowcase component
	const params = useParams();
	const id = params.bikeId;
	return (
		<section className={styles.dimensions}>
			<div className={styles.container}>
				<h1 className={styles.heading}>Dimensions and Sizing</h1>
				<div className={styles.content}>
					<ul className={styles.map}>
						{dimensionsData[id]['general']?.map((data, index) => (
							<MapItem key={index} option={data.option} value={data.value} />
						))}
						<li className={styles.frame}>{`${version} Frame Dimensions:`}</li>
						{dimensionsData[id][version]?.map((data, index) => (
							<MapItem key={index} option={data.option} value={data.value} />
						))}
					</ul>
					<div>
						<img src={dimensionsData[id]?.image} alt='' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Dimensions;
