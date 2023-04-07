import React from 'react';
import './App.css';

// Router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import PartsAndAccessoriesPage from './pages/PartsAndAccessories';
import BatteriesPage from './pages/Batteries';
import AboutUsPage from './pages/AboutUs';
import ContactUsPage from './pages/ContactUs';
import ReviewsPage from './pages/Reviews';
import CartPage from './pages/Cart';
import PromotionsPage from './pages/Promotions';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: '/shop',
				children: [
					{ path: 'parts', element: <PartsAndAccessoriesPage /> },
					{ path: 'batteries', element: <BatteriesPage /> },
				],
			},
			{ path: '/about-us', element: <AboutUsPage /> },
			{ path: '/contact', element: <ContactUsPage /> },
			{ path: '/social-reviews', element: <ReviewsPage /> },
			{ path: '/cart', element: <CartPage /> },
			{ path: '/promotions-and-discounts', element: <PromotionsPage /> },
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
