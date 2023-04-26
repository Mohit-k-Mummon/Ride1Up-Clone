import React, { useState, useRef } from 'react';
import styles from './FaqAccordianSection.module.css';

// Import an object named `items` from a separate file
import items from './Items';

// Import two SVG icons
import { ReactComponent as Plus } from '../../../assets/Home/plus-solid.svg';
import { ReactComponent as Minus } from '../../../assets/Home/minus-solid.svg';

import FaqItem from './FaqItem';

const FaqAccordianSection = () => {
	const [faqActive, setFaqActive] = useState(false);
	const [activeIndex, setActiveIndex] = useState(null);
	const contentElMain = useRef();

	// Create a variable named `icon` that holds either the Plus or Minus SVG icon depending on the value of `faqActive`
	const icon = faqActive ? <Minus /> : <Plus />;

	const toggleFaqHandler = () => {
		setFaqActive(!faqActive);
		// If activeIndex is not null when we close the entire FAQ we set it to null, reseting the inner accordian
		if (activeIndex !== null) {
			setActiveIndex(null);
		}
	};

	const toggleSubFaqHandler = index => {
		if (index === activeIndex) {
			setActiveIndex(null);
		} else {
			setActiveIndex(index);
		}
	};

	// Use the `map` function to create an array of `div` elements containing FAQ items and their content

	return (
		<section className={styles.accordian}>
			<div>
				<header onClick={toggleFaqHandler} className={styles.header}>
					Electric Ebike FAQ's
					{icon}
				</header>
				<div
					ref={contentElMain}
					className={faqActive ? styles['collapse-show'] : styles.collapse}
					style={
						faqActive
							? { height: contentElMain.current.scrollHeight }
							: { height: '0px' }
					}
				>
					<div className={styles.body}>
						{items.map((item, index) => (
							<FaqItem
								key={index}
								index={index}
								title={item.title}
								content={item.content}
								activeIndex={activeIndex}
								onToggle={toggleSubFaqHandler}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FaqAccordianSection;
