import React from 'react';

import { Link } from 'react-router-dom';

const HeroSection = () => {
	return (
		<section className='home-hero'>
			<div className='home-hero__container container-nav'>
				<div className='home-hero__content'>
					<h1>
						Introducing<br></br>
						<span>TURRIS</span>
						<br></br>Adventure touring-style ebike
					</h1>
				</div>
				<Link className='home-hero__button'>Learn More</Link>
			</div>
		</section>
	);
};

export default HeroSection;
