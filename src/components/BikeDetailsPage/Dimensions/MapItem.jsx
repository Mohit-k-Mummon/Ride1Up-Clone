import React from 'react';
import styles from './MapItem.module.css';

const MapItem = props => {
	const { option, value } = props;
	return (
		<li className={styles['map-item']}>
			<span className={styles.option}>{option}</span>
			<span className={styles.dots}></span>
			<span className={styles.value}>{value}</span>
		</li>
	);
};

export default MapItem;
