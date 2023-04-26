import React from 'react';
import styles from './ProductHighlights.module.css';

// Images
import serviceIcon from '../../../assets/Footer/ride1up-serviceandsupport.png';
import warrantyIcon from '../../../assets/Footer/ride1up-1yearwarranty.png';
import trialIcon from '../../../assets/Footer/ride1up-30daytrial.png';
import shippingIcon from '../../../assets/Footer/ride1up-freeshipping.png';

const ProductHighlights = () => {
	return (
		<div className={styles.highlights}>
			<div className={styles.highlight}>
				<a href='https://www.google.com'>
					<img className={styles.icon} src={serviceIcon} alt='' />
				</a>
				<a href='https://www.google.com'>
					<h1 className={styles.title}>Service & Support</h1>
				</a>
				<p className={styles.description}>
					Seasoned Bike Mechanics Offer Expert Technical Support and Friendly Customer
					Service.
				</p>
				<a className={styles.link} href='google.com'>
					Learn More
				</a>
			</div>
			<div className={styles.highlight}>
				<a href='https://www.google.com'>
					<img className={styles.icon} src={warrantyIcon} alt='' />
				</a>
				<a href='https://www.google.com'>
					<h1 className={styles.title}>1-Year Warranty</h1>
				</a>
				<p className={styles.description}>
					Every Ride1Up eBike Comes With a Warranty Against Manufacturing Defects. *Terms
					Apply
				</p>
				<a className={styles.link} href='google.com'>
					Learn More
				</a>
			</div>
			<div className={styles.highlight}>
				<a href='https://www.google.com'>
					<img className={styles.icon} src={trialIcon} alt='' />
				</a>
				<a href='https://www.google.com'>
					<h1 className={styles.title}>30-Day Returns*</h1>
				</a>
				<p className={styles.description}>
					We're Confident That You'll Be Thrilled! If Conditions Are Met, Send It Back For
					a Refund. *Terms and Model Exclusions Apply
				</p>
				<a className={styles.link} href='google.com'>
					Learn More
				</a>
			</div>
			<div className={styles.highlight}>
				<a href='https://www.google.com'>
					<img className={styles.icon} src={shippingIcon} alt='' />
				</a>
				<a href='https://www.google.com'>
					<h1 className={styles.title}>Free Shipping</h1>
				</a>
				<p className={styles.description}>
					On All Bikes to Contiguous 48 States. $100 Direct Shipping to Canada. Exclusions
					Apply.
				</p>
				<a className={styles.link} href='google.com'>
					Learn More
				</a>
			</div>
		</div>
	);
};

export default ProductHighlights;
