import React from 'react';

// Images
import EbrIcon from '../../assets/Home/ebr-logo-white-1.png';
import ForbesIcon from '../../assets/Home/Forbes-Icon.png';
import NytIcon from '../../assets/Home/nyt-logo-white-1.png';
import ElectrekIcon from '../../assets/Home/electrek-1.png';

const FeaturedInSection = () => {
	return (
		<section className='featured-in'>
			<h1>As Featured In</h1>
			<div className='featured-in__icons-grid'>
				<a
					href='https://electricbikereview.com/ride1up/2022-prodigy-xr/'
					target='_blank'
					rel='noreferrer'
				>
					<img className='ebr-icon' src={EbrIcon} alt='' />
				</a>
				<a
					href='https://www.forbes.com/sites/billroberson/2023/02/25/ride-review-new-turris-from-ride1up-is-a-solid-ebike-and-value/?sh=628c64064ecd'
					target='_blank'
					rel='noreferrer'
				>
					<img className='forbes-icon' src={ForbesIcon} alt='' />
				</a>
				<a
					href='https://www.nytimes.com/2020/06/03/technology/personaltech/e-bikes-are-having-their-moment-they-deserve-it.html'
					target='_blank'
					rel='noreferrer'
				>
					<img className='nyt-icon' src={NytIcon} alt='' />
				</a>
				<a
					href='https://electrek.co/2023/01/18/exclusive-ride1up-revv1-launched-electric-moped-e-bike/'
					target='_blank'
					rel='noreferrer'
				>
					<img className='electrek-icon' src={ElectrekIcon} alt='' />
				</a>
			</div>
			<div className='featured-in__video-container'>
				<iframe
					title='product demo'
					className='featured-in__video'
					src='https://player.vimeo.com/video/704729592'
					width={'1310'}
					height={'720'}
					allowFullScreen=''
					webkitallowfullscreen=''
					mozallowfullscreen=''
				></iframe>
			</div>
		</section>
	);
};

export default FeaturedInSection;
