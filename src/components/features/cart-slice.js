import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
	cartQuantity: 0,
	cartSubtotal: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		addBike: (state, action) => {
			const existingBikeIndex = state.cartItems.findIndex(
				item =>
					item.name === action.payload.name &&
					item.frame === action.payload.frame &&
					item.color === action.payload.color
			);

			// If the bike already exists we increment it's quantity and add to the subtotal else we add a new bike to array
			if (existingBikeIndex > -1) {
				state.cartItems[existingBikeIndex].quantity++;
				state.cartItems[existingBikeIndex].subtotal += action.payload.price;
			} else {
				// Create an id for our new bike
				const id = Math.random() * 10;
				const newBike = {
					id: id,
					name: action.payload.name,
					frame: action.payload.frame,
					color: action.payload.color,
					price: action.payload.price,
					quantity: action.payload.quantity,
					subtotal: action.payload.price * action.payload.quantity,
				};
				state.cartItems.push(newBike);
			}
			state.cartQuantity++;
			state.cartSubtotal = state.cartSubtotal + action.payload.price;

			// Update cartItems in localStorage
			// localStorage.setItem('ride1up_cartItems', JSON.stringify(state.cartItems));
		},
		removeBike: (state, action) => {
			// If there is on
			if (state.cartItems.length === 1) {
				state.cartItems = [];
			} else {
				state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
			}

			state.cartQuantity--;
			state.cartSubtotal = state.cartSubtotal - action.payload.price;
		},
		fetchCartItems: state => {
			// Grab data from localStorage
			// const fetchedCartItems = JSON.parse(localStorage.getItem('ride1up_cartItems'));
			// console.log(fetchedCartItems);
		},
	},
});

export const { addBike, fetchCartItems, removeBike } = cartSlice.actions;

export default cartSlice.reducer;
