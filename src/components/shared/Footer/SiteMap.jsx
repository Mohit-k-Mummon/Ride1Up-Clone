import React from 'react';
import styles from './SiteMap.module.css';

// Components
import FooterForm from './FooterForm';

// React-Router
import { Link, redirect } from 'react-router-dom';

// Icons
import { ReactComponent as Logo } from '../../../assets/Navigation/logo.svg';
import facebook from '../../../assets/Footer/facebook-app-symbol.png';
import instagram from '../../../assets/Footer/instagram.png';
import youtube from '../../../assets/Footer/youtube.png';

const SiteMap = () => {
	const navigateHandler = (event, id) => {
		redirect('/product/' + id);
		const section = document.getElementById('top-notification-bar');
		section.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<div className={styles.map}>
			<div>
				<Logo className={styles.logo} />
				<div className={styles['links-container']}>
					<div className={styles.shop}>
						<h1>SHOP</h1>
						<Link
							to={'/product/700-series'}
							onClick={event => navigateHandler(event, '700-series')}
						>
							700 Series
						</Link>
						<Link
							to={'/product/cruiser'}
							onClick={event => navigateHandler(event, 'cruiser')}
						>
							Cafe Cruiser
						</Link>
						<Link
							to={'/product/core-5'}
							onClick={event => navigateHandler(event, 'core-5')}
						>
							Core-5
						</Link>
						<Link
							to={'/product/lmtd'}
							onClick={event => navigateHandler(event, 'lmtd')}
						>
							LMT'D
						</Link>
						<Link
							to={'/product/prodigy'}
							onClick={event => navigateHandler(event, 'prodigy')}
						>
							Prodigy
						</Link>
						<Link
							to={'/product/revv-1'}
							onClick={event => navigateHandler(event, 'revv-1')}
						>
							Revv1
						</Link>
						<Link
							to={'/product/rift'}
							onClick={event => navigateHandler(event, 'rift')}
						>
							Rift
						</Link>
						<Link
							to={'/product/roadster-v2'}
							onClick={event => navigateHandler(event, 'roadster-v2')}
						>
							Roadster v2
						</Link>
						<Link
							to={'/product/turris'}
							onClick={event => navigateHandler(event, 'turris')}
						>
							Turris
						</Link>
						<Link>Parts</Link>
						<Link>Open Box Ebikes</Link>
					</div>
					<div className={styles.company}>
						<h1>Company</h1>
						<Link to={'/about-us'}>About Us</Link>
						<Link>Blog</Link>
						<Link>Careers</Link>
						<Link>Partner Program</Link>
						<Link>Test Ride</Link>
					</div>
				</div>
			</div>
			<div className={styles['socials-wrapper']}>
				<div className={styles.socials}>
					<h2 className={styles.title}>Follow Us</h2>
					<div className={styles['icons-container']}>
						<a
							href='https://www.facebook.com/ride1up/'
							className={styles.icon}
							target='_blank'
							rel='noreferrer'
						>
							<img src={facebook} alt='facebook logo' />
						</a>
						<a
							href='https://www.instagram.com/ride_1up/'
							className={styles.icon}
							target='_blank'
							rel='noreferrer'
						>
							<img src={instagram} alt='instagram logo' />
						</a>
						<a
							href='https://www.youtube.com/channel/UCaIZ_dsdNRFSSH5HdNjsYBg'
							className={styles.icon}
							target='_blank'
							rel='noreferrer'
						>
							<img src={youtube} alt='youtube logo' />
						</a>
					</div>
				</div>
				<FooterForm />
			</div>
		</div>
	);
};

export default SiteMap;
