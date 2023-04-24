import React from 'react';

import MobileCart from './MobileCart';

import DesktopCart from './DesktopCart';
const CartActive = () => {
	return (
		<>
			<MobileCart />
			<DesktopCart />
		</>
	);
};

export default CartActive;
