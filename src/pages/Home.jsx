import React from 'react';
import './page-styles/Home.css';

import HeroSection from '../components/HomePage/HeroSection';
import FeaturedInSection from '../components/HomePage/FeaturedInSection';

const HomePage = () => {
	return (
		<>
			<HeroSection />
			<FeaturedInSection />
		</>
	);
};

export default HomePage;
