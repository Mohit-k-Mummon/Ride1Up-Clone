import React from 'react';
import './TopNotificationBar.css';

// Router
import { Link } from 'react-router-dom';

const TopNotificationBar = () => {
	return (
		<section className='top-notification-bar'>
			<Link to={'/promotions-and-discounts'}>up to $200 off select ebikes</Link>
		</section>
	);
};

export default TopNotificationBar;
