import React, { useRef } from 'react';

const FaqItem = props => {
	const contentEl = useRef();

	// active variable for active faq-item styling
	const active = props.index === props.activeIndex;
	// Return a `div` element containing the FAQ item's title, content, and the `active` class (if applicable)
	return (
		<div key={props.index} className='faq-accordian-card'>
			<div className='faq-accordian-header'>
				<div
					className={`faq-accordian-toggle ${active ? 'active' : ''}`}
					onClick={() => props.onToggle(props.index)}
				>
					<h1 className='faq-accordian__title'>{props.title}</h1>
				</div>
			</div>
			<div
				ref={contentEl}
				className={`faq-accordian__collapse ${active ? 'show' : ''}`}
				style={active ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
			>
				<div className='faq-accordian__body'>{props.content}</div>
			</div>
		</div>
	);
};

export default FaqItem;
