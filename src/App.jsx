import React, { lazy, Suspense } from 'react';
import './App.css';

import 'react-slick';

// Router
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import PartsAndAccessoriesPage from './pages/PartsAndAccessories';
import BatteriesPage from './pages/Batteries';
import ContactUsPage from './pages/ContactUs';
import ReviewsPage from './pages/Reviews';
import CartPage from './pages/CartPage';
import PromotionsPage from './pages/Promotions';
import BikeDetailsPage from './pages/BikeDetailsPage';
import Loading from './components/shared/Loading';

const AboutUsPage = lazy(() => import('./pages/AboutUs'));

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
			{ path: '/product/:bikeId', element: <BikeDetailsPage /> },
			{
				path: '/about-us',
				element: (
					<Suspense fallback={<Loading />}>
						<AboutUsPage />
					</Suspense>
				),
			},
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
