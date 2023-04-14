import React from 'react';
import './page-styles/Home.css';

import HeroSection from '../components/HomePage/HeroSection/HeroSection';
import FeaturedInSection from '../components/HomePage/FeaturedInSection/FeaturedInSection';
import ShopBikesSection from '../components/HomePage/BikesSection/ShopBikesSection';
import PerformanceSection from '../components/HomePage/PerformanceSection/PerformanceSection';
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
