import React from 'react';
import styles from './Selector.module.css';

const Selector = props => {
	const { dropdown, onSelectionChange } = props;

	const handleSelectionChange = event => {
		onSelectionChange(event.target.value);
		event.target.blur();
	};

	return (
		<>
			<label className={styles.label} htmlFor='bike-type-select'>
				Frame Type:
			</label>
			<select
				className={styles.selector}
				defaultValue={dropdown.defaultValue}
				aria-label='Choose a bike type'
				aria-describedby='bike-type-description'
				onChange={handleSelectionChange}
			>
				{dropdown.options.map((option, index) => {
					return (
						<option
							key={index}
							className='bike-type-option'
							value={option.value}
							disabled={option.value === 'option'}
						>
							{option.option}
						</option>
					);
				})}
			</select>
		</>
	);
};

export default Selector;
