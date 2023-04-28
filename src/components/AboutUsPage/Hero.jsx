import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.container}>
				<h1 className={styles.heading}>
					Hello,
					<br /> We're <strong>Ride1Up</strong>
				</h1>
				<p className={styles.tagline}>we make some pretty great electric bikes</p>
			</div>
		</section>
	);
};

export default Hero;
