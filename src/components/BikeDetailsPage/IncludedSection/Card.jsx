import React from 'react';
import styles from './Card.module.css';

const Card = props => {
	const { path, content } = props;
	return (
		<div className={styles.card}>
			<img src={path} alt='' />
			<div className={styles.content}>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default Card;
