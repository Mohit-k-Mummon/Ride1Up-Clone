import React from 'react';

import { ReactComponent as Logo } from '../../../assets/Footer/ride1up.svg';

// React-Router
import { Link } from 'react-router-dom';

// Icons
import facebook from '../../../assets/Footer/facebook-app-symbol.png';
import instagram from '../../../assets/Footer/instagram.png';
import youtube from '../../../assets/Footer/youtube.png';

const SiteMap = () => {
	return (
		<div className='site-map'>
			<div className='site-map-links'>
				<Logo className='site-map__logo' />
				<div className='site-map-links__container'>
					<div className='site-map-links__shop'>
						<h1>SHOP</h1>
						<Link>700 Series</Link>
						<Link>Cafe Cruiser</Link>
						<Link>Core-5</Link>
						<Link>LMT'D</Link>
						<Link>Prodigy</Link>
						<Link>Revv1</Link>
						<Link>Roadster v2</Link>
						<Link>Turris</Link>
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
			</div>
		</div>
	);
};

export default SiteMap;
