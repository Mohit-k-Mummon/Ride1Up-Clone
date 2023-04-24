import React, { useRef, useState } from 'react';

import chevron from '../../assets/Navigation/red-chevron.png';

import styles from './ShippingAccordian.module.css';

const ShippingAccordian = () => {
	const [active, setActive] = useState(false);

	const contentEl = useRef();
	const handleToggle = () => {
		setActive(!active);
	};

	return (
		<div className={styles.accordian}>
			<div className={styles.container}>
				<header className={styles.header} onClick={handleToggle}>
					<img
						className={active ? styles.chevron : styles['chevron-active']}
						src={chevron}
						alt=''
					/>
					<h1 className={styles.title}>Shipping Information</h1>
				</header>
				<div
					ref={contentEl}
					className={active ? styles['collapse-show'] : styles.collapse}
					style={active ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
				>
					<div className={styles.body}>
						<h1>Shipping Cost</h1>
						<p>
							Shipping within the Contiguous United States is FREE for orders over
							$100. Canada – Shipping to Canada starts at $100 per ebike. Customer is
							responsible for any potential additional charges based on Canadian
							customs. Hawaii & Alaska – Shipping to Hawaii & Alaska starts at $400
							per ebike, exclusions apply on Cafe Cruiser and Prodigy models. We
							CANNOT Ship to P.O. boxes or overseas military addresses.
						</p>
						<h1>Shipping Method & Tracking</h1>
						<p>
							If the selected product is notated as In-Stock, we will ship your ebike
							within 1 business day and you will receive an email with your tracking
							information. Please use this number to track your shipment and have
							someone available during the delivery date to reduce the risk of package
							theft.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShippingAccordian;
