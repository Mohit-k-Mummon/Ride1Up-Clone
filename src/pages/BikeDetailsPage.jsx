import React from 'react';

// Components
import ProductShowcase from '../components/BikeDetailsPage/ProductShowcase';
import BikeAddedBanner from '../components/BikeDetailsPage/BikeAddedBanner/BikeAddedBanner';

const BikeDetailsPage = () => {
	return (
		<>
			<BikeAddedBanner />
			<ProductShowcase />
		</>
	);
};

export default BikeDetailsPage;
