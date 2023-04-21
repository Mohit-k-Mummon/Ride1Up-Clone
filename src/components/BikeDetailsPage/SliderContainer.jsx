import React from 'react';

// React-Slick
import Slider from 'react-slick';

const SliderContainer = props => {
	const { images } = props;
	// Slick settings
	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className='slider-container'>
			<Slider {...settings}>
				{images.map(image => {
					return (
						<div key={image}>
							<img src={image} alt='' />
						</div>
					);
				})}
			</Slider>
		</div>
	);
};

export default SliderContainer;
