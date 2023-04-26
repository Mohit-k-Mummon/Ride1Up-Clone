import React from 'react';

import HeroSection from '../components/HomePage/HeroSection/HeroSection';
import FeaturedInSection from '../components/HomePage/FeaturedInSection/FeaturedInSection';
import ShopBikesSection from '../components/HomePage/BikesSection/ShopBikesSection';
import PerformanceSection from '../components/HomePage/PerformanceSection/PerformanceSection';
import FaqAccordianSection from '../components/HomePage/FaqSection/FaqAccordianSection';
import BikesGallerySection from '../components/HomePage/BikesGallerySection/BikesGallerySection';

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<FeaturedInSection />
			<ShopBikesSection />
			<PerformanceSection />
			<FaqAccordianSection />
			<BikesGallerySection />
		</>
	);
};

export default HomePage;
