import React from 'react';

import styles from './Loading.module.css';

const Loading = () => {
	return (
		<div className={styles.container}>
			<div id={styles.loading}></div>
		</div>
	);
};

export default Loading;
