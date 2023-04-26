import React from 'react';
import styles from './TopNotificationBar.module.css';

// Router
import { Link } from 'react-router-dom';

const TopNotificationBar = () => {
	return (
		<section id='top-notification-bar' className={styles['top-notification-bar']}>
			<Link to={'/promotions-and-discounts'}>up to $200 off select ebikes</Link>
		</section>
	);
};

export default TopNotificationBar;
