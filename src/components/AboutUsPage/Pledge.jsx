import React from 'react';
import styles from './Pledge.module.css';

const Pledge = () => {
	return (
		<section className={styles.pledge}>
			<div className={styles.container}>
				<h1 className={styles.heading}>Take the ride1up pledge</h1>
				<p className={styles.tagline}> Get a $40 coupon towards a new ebike</p>
				<p className={styles.text}>
					Replacing cars on the road has always been a big initiative for Ride1Up. We
					continue to encourage people to ride a bike over a car whenever possible. The
					smallest changes have the potential to lead to big impacts on the environment
					and one’s health. Commit to replace at least 2 car trips per month with your
					electric bike by entering your email below to subscribe, and we will reward you
					with $40 off your purchase of a Ride1Up electric bike.
				</p>
				<div className={styles['input-group']}>
					<input
						className={styles.input}
						type='email'
						placeholder='Email'
						maxLength={'255'}
					/>
					<button className={styles.button}>Take the Pledge</button>
				</div>
			</div>
		</section>
	);
};

export default Pledge;
