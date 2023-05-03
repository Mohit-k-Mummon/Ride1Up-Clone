import React from 'react';

// Components
import ProductShowcase from '../components/BikeDetailsPage/ProductShowcase';
import BikeAddedBanner from '../components/BikeDetailsPage/BikeAddedBanner/BikeAddedBanner';
import Features from '../components/BikeDetailsPage/FeaturesSection/Features';
import Advantages from '../components/BikeDetailsPage/AdvantagesSection/Advantages';
import Components from '../components/BikeDetailsPage/ComponentsSection/Components';

const BikeDetailsPage = () => {
	return (
		<>
			<BikeAddedBanner />
			<ProductShowcase />
			<Features />
			<Advantages />
			<Components />
		</>
	);
};

export default BikeDetailsPage;
