import React from 'react';

import { ReactComponent as PerformIcon } from '../../assets/Home/perform-icon.svg';
import speedIcon from '../../assets/Home/speed-icon1.png';
import rangeIcon from '../../assets/Home/range-icon1.png';
import motorIcon from '../../assets/Home/motor-icon-11.png';

import PerformanceImageContainer from './PerformanceImageContainer';

const PerformanceSection = () => {
	return (
		<section className='performance'>
			<header className='performance-header'>
				<PerformIcon className='performance-header__icon' />
				<h1 className='performance-header__title'>Our Bikes Are Designed to Perform</h1>
			</header>
			<PerformanceImageContainer />
			<div className='performance__features'>
				<div className='performance-feature speed'>
					<img className='performance-feature__icon speed' src={speedIcon} alt='' />
					<div className='performance-feature-info'>
						<h2 className='performance-feature__title'>Class 3 Ebikes*</h2>
						<span className='performance-feature__label'>Speed</span>
					</div>
				</div>
				<div className='performance-feature range'>
					<img className='performance-feature__icon range' src={rangeIcon} alt='' />
					<div className='performance-feature-info'>
						<h2 className='performance-feature__title'>20-50 Miles*</h2>
						<span className='performance-feature__label'>Range</span>
					</div>
				</div>
				<div className='performance-feature power'>
					<img className='performance-feature__icon power' src={motorIcon} alt='' />
					<div className='performance-feature-info'>
						<h2 className='performance-feature__title'>750 Watts*</h2>
						<span className='performance-feature__label'>Power</span>
					</div>
				</div>
			</div>
			<div className='performance-fine-print'>*Price, speed and range vary by model</div>
		</section>
	);
};

export default PerformanceSection;
