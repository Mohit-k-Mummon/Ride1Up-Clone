import React from 'react';

import MainNavigation from '../components/shared/MainNavigation';
import TopNotificationBar from '../components/shared/TopNotificationBar';
import MainFooter from '../components/shared/Footer/MainFooter';
// Router
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
	return (
		<>
			<TopNotificationBar />
			<MainNavigation />
			<main>
				<Outlet />
			</main>
			<MainFooter />
		</>
	);
};

export default RootLayout;
