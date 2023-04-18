import React from 'react';

const FooterForm = () => {
	return (
		<form className='newsletter-form'>
			<div className='newsletter-form__input-group'>
				<label htmlFor='email' className='sr-only'>
					Email:
				</label>
				<input
					type='email'
					id='email'
					name='email'
					className='newsletter-form__input'
					placeholder='Enter email for updates & promotions'
				/>
			</div>
			<button type='submit' className='newsletter-form__submit'>
				SUBSCRIBE
			</button>
		</form>
	);
};

export default FooterForm;
