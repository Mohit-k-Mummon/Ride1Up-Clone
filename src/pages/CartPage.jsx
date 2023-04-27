import React from 'react';

// Components
import Cart from '../components/CartPage/Cart';
import CartUpdatedBanner from '../components/CartPage/CartUpdatedBanner/CartUpdatedBanner';

const CartPage = () => {
	return (
		<>
			<CartUpdatedBanner />
			<Cart />
		</>
	);
};

export default CartPage;
