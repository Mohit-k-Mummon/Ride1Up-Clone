import React from 'react';

import MobileCart from './MobileCart';

import DesktopCart from './DesktopCart';
import CartTotals from './CartTotals';
const CartActive = () => {
	// DELIVERY DATE LOGIC
	// Get the current date and add 7 to the start and 14 to the end
	const startDate = new Date();
	const endDate = new Date();
	startDate.setDate(startDate.getDate() + 7);
	endDate.setDate(endDate.getDate() + 9);

	// Format the dates
	const startMonth = startDate.toLocaleDateString('default', { month: 'short' });
	const endMonth = endDate.toLocaleDateString('default', { month: 'short' });
	const startDateString = `${startMonth} ${startDate.getDate()}${getDateSuffix(
		startDate.getDate()
	)}`;
	const endDateString = `${endMonth} ${endDate.getDate()}${getDateSuffix(endDate.getDate())}`;

	// Function to get the suffix for the day of the month (e.g. 1st, 2nd, 3rd)
	function getDateSuffix(date) {
		const suffixes = ['th', 'st', 'nd', 'rd'];
		const suffix = suffixes[(date - 20) % 10] || suffixes[date] || suffixes[0];
		return suffix;
	}

	return (
		<>
			<MobileCart startDateString={startDateString} endDateString={endDateString} />
			<DesktopCart startDateString={startDateString} endDateString={endDateString} />
			<CartTotals />
		</>
	);
};

export default CartActive;
