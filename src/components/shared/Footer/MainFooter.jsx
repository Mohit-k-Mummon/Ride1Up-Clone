import React from 'react';

import './MainFooter.css';

// Components
import ProductHighlights from './ProductHighlights';
import SiteMap from './SiteMap';
import CopyRight from './CopyRight';

const MainFooter = () => {
	return (
		<section className='footer'>
			<ProductHighlights />
			<SiteMap />
			<CopyRight />
		</section>
	);
};

export default MainFooter;
