import React from 'react';

// React-Slick Carousel CSS import
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// React-Router
import { Link } from 'react-router-dom';

// Images
import image1 from '../../../assets/Home/Carousel/Gallery-01.jpg';
import image2 from '../../../assets/Home/Carousel/Gallery-02.jpg';
import image3 from '../../../assets/Home/Carousel/Gallery-03.jpg';
import image4 from '../../../assets/Home/Carousel/Gallery-04.jpg';
import image5 from '../../../assets/Home/Carousel/Gallery-05.jpg';
import image6 from '../../../assets/Home/Carousel/Gallery-06.jpg';
import image7 from '../../../assets/Home/Carousel/Gallery-07.jpg';
import image8 from '../../../assets/Home/Carousel/Gallery-08.jpg';
import image9 from '../../../assets/Home/Carousel/Gallery-09.jpg';
import image10 from '../../../assets/Home/Carousel/Gallery-10.jpg';
import image11 from '../../../assets/Home/Carousel/Gallery-11.jpg';

// React Slick Library Import
import Slider from 'react-slick';

// Images Array
const images = [
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	image7,
	image8,
	image9,
	image10,
	image11,
];

const BikesGallerySection = () => {
	// Settings for Slider
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 10000,
		autoplaySpeed: 1000,
		cssEase: 'linear',
		swipe: false,
		pauseOnHover: false,
		responsive: [
			{
				breakpoint: 1400,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};

	return (
		<section className='bikes-gallery'>
			<header className='bikes-gallery-header'>
				<h2>
					<span>#RIDE1UP</span> <span>Community</span>
				</h2>
				<Link className='view-gallery-button'>View Gallery</Link>
			</header>
			<Slider {...settings} aria-label='Bikes Gallery'>
				{images.map((image, index) => (
					<img key={index} src={image} alt=''></img>
				))}
			</Slider>
		</section>
	);
};

export default BikesGallerySection;
