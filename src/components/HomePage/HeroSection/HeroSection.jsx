import React from 'react';
import styles from './HeroSection.module.css';

import { Link } from 'react-router-dom';

const HeroSection = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1>
						Introducing<br></br>
						<span>RIFT</span>
						<br></br>All-Terrain Fat Tire Bike
					</h1>
				</div>
				<Link to={'/product/rift'} className={styles.link}>
					Learn More
				</Link>
			</div>
		</section>
	);
};

export default HeroSection;
