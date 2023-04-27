import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
	cartQuantity: 0,
	cartSubtotal: 0,
	cartUpdated: false,
	addToCartClicked: false,
	bikeAddedDisplayBanner: false,
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
					updatedQuantity: null,
				};
				state.cartItems.push(newBike);
			}
			state.cartQuantity++;
			state.cartSubtotal = state.cartSubtotal + action.payload.price;

			// Update cartItems in localStorage
			// localStorage.setItem('ride1up_cartItems', JSON.stringify(state.cartItems));
		},
		removeBike: (state, action) => {
			// If there is one
			if (state.cartItems.length === 1) {
				state.cartItems = [];
			} else {
				state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
			}

			// Updating cartQuantity
			state.cartQuantity = state.cartItems.reduce((accumulator, currentValue) => {
				return accumulator + currentValue.quantity;
			}, 0);
			// Updating cartSubtotal
			state.cartSubtotal = state.cartItems.reduce((accumulator, currentValue) => {
				return accumulator + currentValue.subtotal;
			}, 0);
		},
		toggleUpdate: (state, action) => {
			// set cartUpdated to true so button is enabled
			state.cartUpdated = true;

			// Find index of bike that is updating it's quantity
			const updatedBike = state.cartItems.findIndex(item => item.id === action.payload.id);

			// Set the bike that updated it's quantity's updatedQuantity prop to the newQuantity
			state.cartItems[updatedBike].updatedQuantity = +action.payload.newQuantity;
		},
		updateCart: state => {
			state.cartItems.forEach(item => {
				if (item.updatedQuantity) {
					item.quantity = item.updatedQuantity; // Set the quantity to the updatedQuantity
					item.subtotal = item.quantity * item.price; // Set the new subtotal for the bike
					item.updatedQuantity = null; // Set updatedQuantity back to initial
				}
			});

			// Updating cartQuantity
			state.cartQuantity = state.cartItems.reduce((accumulator, currentValue) => {
				return accumulator + currentValue.quantity;
			}, 0);
			// Updating cartSubtotal
			state.cartSubtotal = state.cartItems.reduce((accumulator, currentValue) => {
				return accumulator + currentValue.subtotal;
			}, 0);
			state.cartUpdated = false; // Set cartUpdated to false
		},
		fetchCartItems: state => {
			// Grab data from localStorage
			// const fetchedCartItems = JSON.parse(localStorage.getItem('ride1up_cartItems'));
			// console.log(fetchedCartItems);
		},
		startCartAnimation: state => {
			state.addToCartClicked = true;
		},
		stopCartAnimation: state => {
			state.addToCartClicked = false;
		},
		toggleOnBikeBanner: state => {
			state.bikeAddedDisplayBanner = true;
		},
		toggleOffBikeBanner: state => {
			state.bikeAddedDisplayBanner = false;
		},
	},
});

export const {
	addBike,
	fetchCartItems,
	removeBike,
	toggleUpdate,
	updateCart,
	startCartAnimation,
	stopCartAnimation,
	toggleOnBikeBanner,
	toggleOffBikeBanner,
} = cartSlice.actions;

export default cartSlice.reducer;
