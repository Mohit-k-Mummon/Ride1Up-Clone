import React from 'react';
import styles from './Mission.module.css';

const Mission = () => {
	return (
		<section className={styles.mission}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 className={styles.heading}>Our mission is simple:</h1>
					<p className={styles.tagline}>Get more people on e-bikes</p>
					<p className={styles.text}>
						We’ve been meeting milestones of our mission since 2018 by providing people
						with exceptional quality ebikes with name-brand components at surprisingly
						affordable prices.
					</p>
					<p className={styles.text}>
						Keeping prices affordable without sacrificing quality has allowed for
						broader accessibility and the opportunity for more people to experience the
						benefits of ebikes. Spec for spec, you won’t find a better value anywhere
						else.
					</p>
				</div>
				<div className={styles['video-container']}>
					<div className={styles.video}>
						<iframe
							width='560'
							className={styles.iframe}
							height='315'
							src='https://www.youtube.com/embed/8869248oBGg'
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Mission;
