import React from 'react';
import styles from './MainFooter.module.css';

// Components
import ProductHighlights from './ProductHighlights';
import SiteMap from './SiteMap';
import CopyRight from './CopyRight';

const MainFooter = () => {
	return (
		<section className={styles.footer}>
			<ProductHighlights />
			<SiteMap />
			<CopyRight />
		</section>
	);
};

export default MainFooter;
