import React from 'react';
import styles from './ComingSoon.module.css';
import doggie from '../../assets/doggie.jpg';

const ComingSoon = () => {
	return (
		<section className={styles['coming-soon']}>
			<img className={styles.doggie} src={doggie} alt='' />
			<h1 className={styles.heading}>This Page is under construction</h1>
			<p className={styles.tagline}>Try the About Us page</p>
		</section>
	);
};

export default ComingSoon;
