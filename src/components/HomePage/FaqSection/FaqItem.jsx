import React, { useRef } from 'react';
import styles from './FaqItem.module.css';

const FaqItem = props => {
	const contentEl = useRef();

	// active variable for active faq-item styling
	const active = props.index === props.activeIndex;
	// Return a `div` element containing the FAQ item's title, content, and the `active` class (if applicable)
	return (
		<div key={props.index} className={styles.accordian}>
			<div>
				<header className={styles.header} onClick={() => props.onToggle(props.index)}>
					<h1 className={active ? styles['title-active'] : styles.title}>
						{props.title}
					</h1>
				</header>
				<div
					ref={contentEl}
					// className={`faq-accordian__collapse ${active ? 'show' : ''}`}
					className={active ? styles['collapse-show'] : styles.collapse}
					style={active ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
				>
					<div className={styles.body}>{props.content}</div>
				</div>
			</div>
		</div>
	);
};

export default FaqItem;
