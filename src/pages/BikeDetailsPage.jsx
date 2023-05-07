import React, { useState } from 'react';

// Components
import ProductShowcase from '../components/BikeDetailsPage/ProductShowcase';
import BikeAddedBanner from '../components/BikeDetailsPage/BikeAddedBanner/BikeAddedBanner';
import Features from '../components/BikeDetailsPage/FeaturesSection/Features';
import Advantages from '../components/BikeDetailsPage/AdvantagesSection/Advantages';
import Components from '../components/BikeDetailsPage/ComponentsSection/Components';
import Dimensions from '../components/BikeDetailsPage/Dimensions/Dimensions';
import Included from '../components/BikeDetailsPage/IncludedSection/Included';

const BikeDetailsPage = () => {
	const [version, setVersion] = useState(null);

	// function to pull Version for ProductShowcase
	const pullVersion = data => {
		setVersion(data);
	};

	return (
		<>
			<BikeAddedBanner />
			<ProductShowcase onVersionUpdate={pullVersion} />
			<Features />
			<Advantages />
			<Components />
			<Dimensions version={version} />
			<Included />
		</>
	);
};

export default BikeDetailsPage;
