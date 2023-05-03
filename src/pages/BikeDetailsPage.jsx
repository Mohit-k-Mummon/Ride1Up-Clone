import React from 'react';

// Components
import ProductShowcase from '../components/BikeDetailsPage/ProductShowcase';
import BikeAddedBanner from '../components/BikeDetailsPage/BikeAddedBanner/BikeAddedBanner';
import Features from '../components/BikeDetailsPage/FeaturesSection/Features';
import Advantages from '../components/BikeDetailsPage/AdvantagesSection/Advantages';

const BikeDetailsPage = () => {
	return (
		<>
			<BikeAddedBanner />
			<ProductShowcase />
			<Features />
			<Advantages />
		</>
	);
};

export default BikeDetailsPage;
