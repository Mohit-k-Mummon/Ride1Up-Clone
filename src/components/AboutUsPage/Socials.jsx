import React from 'react';
import styles from './socials.module.css';

import Twitter from '../../assets/AboutUs/twitter.svg?react';
import Facebook from '../../assets/AboutUs/facebook.svg?react';
import Instagram from '../../assets/AboutUs/instagram.svg?react';
import Youtube from '../../assets/AboutUs/youtube.svg?react';

const Socials = () => {
	return (
		<section className={styles.social}>
			<div className={styles.container}>
				<h1>Follow us on social</h1>
				<div className={styles.icons}>
					<a
						rel='noreferrer nofollow'
						target='_blank'
						className={styles['facebook-link']}
						href='https://www.facebook.com/ride1up/'
					>
						<div className={styles['facebook-container']}>
							<Facebook className={styles.facebook} />
						</div>
					</a>
					<a
						rel='noreferrer nofollow'
						target='_blank'
						className={styles['twitter-link']}
						href='https://twitter.com/Ride1Up'
					>
						<Twitter className={styles.twitter} />
					</a>
					<a
						rel='noreferrer nofollow'
						target='_blank'
						className={styles['instagram-link']}
						href='https://www.instagram.com/ride_1up/'
					>
						<Instagram className={styles.instagram} />
					</a>
					<a
						rel='noreferrer nofollow'
						target='_blank'
						className={styles['youtube-link']}
						href='https://www.youtube.com/channel/UCaIZ_dsdNRFSSH5HdNjsYBg'
					>
						<Youtube className={styles.youtube} />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Socials;
