import React from 'react';

import MainNavigation from '../components/shared/MainNavigation';
import TopNotificationBar from '../components/shared/TopNotificationBar';

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
		</>
	);
};

export default RootLayout;
