import React from 'react';

import MobileCart from './MobileCart';

import DesktopCart from './DesktopCart';
import CartTotals from './CartTotals';
const CartActive = () => {
	return (
		<>
			<MobileCart />
			<DesktopCart />
			<CartTotals />
		</>
	);
};

export default CartActive;
