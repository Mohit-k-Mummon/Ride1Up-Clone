import React from 'react';

import MainNavigation from '../components/shared/MainNavigation/MainNavigation';
import TopNotificationBar from '../components/shared/TopNotificationBar';
import MainFooter from '../components/shared/Footer/MainFooter';
// Router
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../helpers/ScrollToTop';
const RootLayout = () => {
	return (
		<>
			<TopNotificationBar />
			<MainNavigation />
			<main>
				<ScrollToTop />
				<Outlet />
			</main>
			<MainFooter />
		</>
	);
};

export default RootLayout;
