import React from 'react';

// Components
import FooterForm from './FooterForm';

// React-Router
import { Link, useNavigate } from 'react-router-dom';

// Icons
import { ReactComponent as Logo } from '../../../assets/Footer/ride1up.svg';
import facebook from '../../../assets/Footer/facebook-app-symbol.png';
import instagram from '../../../assets/Footer/instagram.png';
import youtube from '../../../assets/Footer/youtube.png';

const SiteMap = () => {
	const navigate = useNavigate();

	const navigateHandler = async (event, id) => {
		await navigate('/product/' + id);
		const section = document.getElementById('top-notification-bar');
		section.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<div className='site-map'>
			<div className='site-map-links'>
				<Logo className='site-map__logo' />
				<div className='site-map-links__container'>
					<div className='site-map-links__shop'>
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
					<div className='site-map-links__company'>
						<h1>Company</h1>
						<Link>About Us</Link>
						<Link>Blog</Link>
						<Link>Careers</Link>
						<Link>Partner Program</Link>
						<Link>Test Ride</Link>
					</div>
				</div>
			</div>
			<div className='socials-wrapper'>
				<div className='socials'>
					<h2 className='socials__title'>Follow Us</h2>
					<div className='socials__icons'>
						<a
							href='https://www.facebook.com/ride1up/'
							className='socials__icon'
							target='_blank'
							rel='noreferrer'
						>
							<img src={facebook} alt='facebook logo' />
						</a>
						<a
							href='https://www.instagram.com/ride_1up/'
							className='socials__icon'
							target='_blank'
							rel='noreferrer'
						>
							<img src={instagram} alt='instagram logo' />
						</a>
						<a
							href='https://www.youtube.com/channel/UCaIZ_dsdNRFSSH5HdNjsYBg'
							className='socials__icon'
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
