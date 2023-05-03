import React from 'react';

// Components
import ProductShowcase from '../components/BikeDetailsPage/ProductShowcase';
import BikeAddedBanner from '../components/BikeDetailsPage/BikeAddedBanner/BikeAddedBanner';
import Features from '../components/BikeDetailsPage/FeaturesSection/Features';

const BikeDetailsPage = () => {
	return (
		<>
			<BikeAddedBanner />
			<ProductShowcase />
			<Features />
		</>
	);
};

export default BikeDetailsPage;
