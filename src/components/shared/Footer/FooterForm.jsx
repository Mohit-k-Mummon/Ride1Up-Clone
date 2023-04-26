import React from 'react';
import styles from './FooterForm.module.css';

const FooterForm = () => {
	return (
		<form className={styles.form}>
			<div className={styles['input-group']}>
				<label htmlFor='email' className='sr-only'>
					Email:
				</label>
				<input
					type='email'
					id='email'
					name='email'
					className={styles.input}
					placeholder='Enter email for updates & promotions'
				/>
			</div>
			<button type='submit' className={styles.button}>
				SUBSCRIBE
			</button>
		</form>
	);
};

export default FooterForm;
