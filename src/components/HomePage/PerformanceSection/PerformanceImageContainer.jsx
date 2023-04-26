import React from 'react';

import './PerformanceImageContainer.css';

const PerformanceImageContainer = () => {
	return (
		<div className='performance-image-container'>
			<img src='/Bikes/700 Series/XR/gray-1.jpg' alt='' />
			<div className='performance-image-button display'>
				<div className='inner'>
					<div id='display'></div>
				</div>
				<div className='performance-image-button__content display'>
					<h2>Display</h2>
					<p>
						Color LCD TFT display with 2.2" screen. Customizable 0-9 levels of PAS and
						advanced metrics.
					</p>
				</div>
			</div>

			<div className='performance-image-button safety'>
				<div className='inner'>
					<div id='safety'></div>
				</div>
				<div className='performance-image-button__content safety'>
					<h2>Safety</h2>
					<p>
						Tektro dual-piston hydaulic brakes with built-in electric cut-off sensors
						for safety and 180mm rotors.
					</p>
				</div>
			</div>

			<div className='performance-image-button fenders'>
				<div className='inner'>
					<div id='fenders'></div>
				</div>
				<div className='performance-image-button__content fenders'>
					<h2>Fenders</h2>
					<p>Included front and rear hardened alloy fenders with adjustable arms.</p>
				</div>
			</div>

			<div className='performance-image-button suspension'>
				<div className='inner'>
					<div id='suspension'></div>
				</div>
				<div className='performance-image-button__content suspension'>
					<h2>suspension</h2>
					<p>Mozo suspension form with hydraulic lockout and 100mm travel.</p>
				</div>
			</div>

			<div className='performance-image-button battery'>
				<div className='inner'>
					<div id='battery'></div>
				</div>
				<div className='performance-image-button__content battery'>
					<h2>battery</h2>
					<p>
						Internally concealed removable and lockable 14AH I-ion battery, with Sansung
						cells.
					</p>
				</div>
			</div>

			<div className='performance-image-button comfort'>
				<div className='inner'>
					<div id='comfort'></div>
				</div>
				<div className='performance-image-button__content comfort'>
					<h2>comfort</h2>
					<p>Soft plush Selle Royal Gel Saddle for comfort and performance.</p>
				</div>
			</div>

			<div className='performance-image-button lights'>
				<div className='inner'>
					<div id='lights'></div>
				</div>
				<div className='performance-image-button__content lights'>
					<h2>lights</h2>
					<p>
						Integrated headlight and taillight run off the main battery and controller
						by the display.
					</p>
				</div>
			</div>

			<div className='performance-image-button speed'>
				<div className='inner'>
					<div id='speed'></div>
				</div>
				<div className='performance-image-button__content speed'>
					<h2>speed</h2>
					<p>
						Integrated sensitive cadence sensor for pedal assis. 45Tx 11-32T for high
						speed pedaling.
					</p>
				</div>
			</div>

			<div className='performance-image-button power'>
				<div className='inner'>
					<div id='power'></div>
				</div>
				<div className='performance-image-button__content power'>
					<h2>power</h2>
					<p>
						800w peak output geared hub motor capable of 28mph speed on PAS, and 20mph
						by throttle.
					</p>
				</div>
			</div>

			<div className='performance-image-button traction'>
				<div className='inner'>
					<div id='traction'></div>
				</div>
				<div className='performance-image-button__content traction'>
					<h2>traction</h2>
					<p>
						Schwalbe Super-Moto X Tires eBike touring all-surface tires with Green-Guard
						protection.
					</p>
				</div>
			</div>
		</div>
	);
};

export default PerformanceImageContainer;
