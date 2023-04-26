import React from 'react';
import styles from './PerformanceSection.module.css';

import { ReactComponent as PerformIcon } from '../../../assets/Home/perform-icon.svg';
import speedIcon from '../../../assets/Home/speed-icon1.png';
import rangeIcon from '../../../assets/Home/range-icon1.png';
import motorIcon from '../../../assets/Home/motor-icon-11.png';

import PerformanceImageContainer from './PerformanceImageContainer';

const PerformanceSection = () => {
	return (
		<section className={styles.performance}>
			<header className={styles.header}>
				<PerformIcon className={styles.icon} />
				<h1 className={styles.title}>Our Bikes Are Designed to Perform</h1>
			</header>
			<PerformanceImageContainer />
			<div className={styles.features}>
				<div className={styles.feature}>
					<img className={styles['feature-icon']} src={speedIcon} alt='' />
					<div className={styles['info-container']}>
						<h2 className={styles['info-title']}>Class 3 Ebikes*</h2>
						<span className={styles['info-label']}>Speed</span>
					</div>
				</div>
				<div className={styles.feature}>
					<img className={styles['feature-icon']} src={rangeIcon} alt='' />
					<div className={styles['info-container']}>
						<h2 className={styles['info-title']}>20-50 Miles*</h2>
						<span className={styles['info-label']}>Range</span>
					</div>
				</div>
				<div className={styles.feature}>
					<img className={styles['feature-icon']} src={motorIcon} alt='' />
					<div className={styles['info-container']}>
						<h2 className={styles['info-title']}>750 Watts*</h2>
						<span className={styles['info-label']}>Power</span>
					</div>
				</div>
			</div>
			<div className={styles['fine-print']}>*Price, speed and range vary by model</div>
		</section>
	);
};

export default PerformanceSection;
