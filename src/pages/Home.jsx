import React from 'react';
import './page-styles/Home.css';

import HeroSection from '../components/HomePage/HeroSection';
import FeaturedInSection from '../components/HomePage/FeaturedInSection';
import ShopBikesSection from '../components/HomePage/ShopBikesSection';
import PerformanceSection from '../components/HomePage/PerformanceSection';
import FaqAccordian from '../components/HomePage/FaqSection/FaqAccordian';

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<FeaturedInSection />
			<ShopBikesSection />
			<PerformanceSection />
			<FaqAccordian />
		</>
	);
};

export default HomePage;
