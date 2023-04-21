import React from 'react';

const Selector = props => {
	const { dropdown, onSelectionChange } = props;

	const handleSelectionChange = event => {
		onSelectionChange(event.target.value);
		event.target.blur();
	};

	return (
		<>
			<label className='bike-type-select-label' htmlFor='bike-type-select'>
				Frame Type:
			</label>
			<select
				className='bike-type-select'
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
