import React from 'react';
import './page-styles/Home.css';

import HeroSection from '../components/HomePage/HeroSection';
import FeaturedInSection from '../components/HomePage/FeaturedInSection';
import ShopBikesSection from '../components/HomePage/ShopBikesSection';
import PerformanceSection from '../components/HomePage/PerformanceSection';

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<FeaturedInSection />
			<ShopBikesSection />
			<PerformanceSection />
		</>
	);
};

export default HomePage;
