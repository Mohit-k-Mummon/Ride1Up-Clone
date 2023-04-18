import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './page-styles/BikeDetailsPage.css';

// React-Slick
import Slider from 'react-slick';

import Bikes from '../Bikes.json';

const BikeDetailsPage = () => {
	// This code sets up the bike customization feature, starting with getting the bike ID from the router.
	const params = useParams();

	// Initializing the bike state to the ID passed in the URL params
	const [bike, setBike] = useState(params.bikeId);

	// Finding the index of the selected bike in the Bikes JSON object
	const bikeIndex = Bikes.bikes.findIndex(obj => obj.id === params.bikeId);

	// Populating an array with the available versions of the selected bike
	const bikeVersions = Bikes.bikes[bikeIndex].versions.map(version => version.name);

	// Initializing the version state with the first available version of the bike
	const [version, setVersion] = useState(bikeVersions[0]);

	// Populating an array with the available colors for the selected version of the bike
	const bikeVersionColors = Object.keys(Bikes.bikes[bikeIndex].versions[0].priceByColor);

	// Initializing the color state with the first available color for the selected version of the bike
	const [color, setColor] = useState(bikeVersionColors[0]);

	// Overall, this code sets up the initial state of the bike customization feature, allowing the user to select a bike, version, and color.

	const imageArray = {
		'roadster-v2': {
			Large: {
				'Burgundy, Matte': [
					'/Bikes/Roadster v2/red-1.jpg',
					'/Bikes/Roadster v2/red-2.jpg',
					'/Bikes/Roadster v2/red-3.jpg',
				],
				'Gravel Gray': [
					'/Bikes/Roadster v2/gravel-1.jpg',
					'/Bikes/Roadster v2/gravel-2.jpg',
					'/Bikes/Roadster v2/gravel-3.jpg',
				],
				'Black, Matte': [
					'/Bikes/Roadster v2/black-1.jpg',
					'/Bikes/Roadster v2/black-2.jpg',
					'/Bikes/Roadster v2/black-3.jpg',
				],
				'Silver, Matte': [
					'/Bikes/Roadster v2/silver-1.jpg',
					'/Bikes/Roadster v2/silver-2.jpg',
					'/Bikes/Roadster v2/silver-3.jpg',
				],
			},
			Small: {
				'Burgundy, Matte': [
					'/Bikes/Roadster v2/red-1.jpg',
					'/Bikes/Roadster v2/red-2.jpg',
					'/Bikes/Roadster v2/red-3.jpg',
				],
				'Gravel Gray': [
					'/Bikes/Roadster v2/gravel-1.jpg',
					'/Bikes/Roadster v2/gravel-2.jpg',
					'/Bikes/Roadster v2/gravel-3.jpg',
				],
				'Black, Matte': [
					'/Bikes/Roadster v2/black-1.jpg',
					'/Bikes/Roadster v2/black-2.jpg',
					'/Bikes/Roadster v2/black-3.jpg',
				],
				'Silver, Matte': [
					'/Bikes/Roadster v2/silver-1.jpg',
					'/Bikes/Roadster v2/silver-2.jpg',
					'/Bikes/Roadster v2/silver-3.jpg',
				],
			},
		},
		'core-5': {
			XR: {
				Mint: [
					'/Bikes/Core-5/XR/mint-1.jpg',
					'/Bikes/Core-5/XR/mint-2.jpg',
					'/Bikes/Core-5/XR/mint-3.jpg',
				],
				'Midnight Gray': [
					'/Bikes/Core-5/XR/midnight-1.jpg',
					'/Bikes/Core-5/XR/midnight-2.jpg',
					'/Bikes/Core-5/XR/midnight-3.jpg',
				],
				'Azure Blue': [
					'/Bikes/Core-5/XR/blue-1.jpg',
					'/Bikes/Core-5/XR/blue-2.jpg',
					'/Bikes/Core-5/XR/blue-3.jpg',
				],
			},
			ST: {
				Mint: [
					'/Bikes/Core-5/ST/mint-1.jpg',
					'/Bikes/Core-5/ST/mint-2.jpg',
					'/Bikes/Core-5/ST/mint-3.jpg',
				],
				'Midnight Gray': [
					'/Bikes/Core-5/ST/midnight-1.jpg',
					'/Bikes/Core-5/ST/midnight-2.jpg',
					'/Bikes/Core-5/ST/midnight-3.jpg',
				],
			},
		},
		turris: {
			XR: {
				'Forest Green': [
					'/Bikes/turris/XR/green-1.jpg',
					'/Bikes/turris/XR/green-2.jpg',
					'/Bikes/turris/XR/green-3.jpg',
					'/Bikes/turris/XR/green-4.jpg',
				],
				'Origami White': [
					'/Bikes/turris/XR/white-1.jpg',
					'/Bikes/turris/XR/white-2.jpg',
					'/Bikes/turris/XR/white-3.jpg',
					'/Bikes/turris/XR/white-4.jpg',
					'/Bikes/turris/XR/white-5.jpg',
				],
				'Graphite Gray': [
					'/Bikes/turris/XR/gray-1.jpg',
					'/Bikes/turris/XR/gray-2.jpg',
					'/Bikes/turris/XR/gray-3.jpg',
					'/Bikes/turris/XR/gray-4.jpg',
				],
			},
			ST: {
				'Forest Green': [
					'/Bikes/turris/ST/green-1.jpg',
					'/Bikes/turris/ST/green-2.jpg',
					'/Bikes/turris/ST/green-3.jpg',
					'/Bikes/turris/ST/green-4.jpg',
					'/Bikes/turris/ST/green-5.jpg',
				],
				'Origami White': [
					'/Bikes/turris/ST/white-1.jpg',
					'/Bikes/turris/ST/white-2.jpg',
					'/Bikes/turris/ST/white-3.jpg',
					'/Bikes/turris/ST/white-4.jpg',
					'/Bikes/turris/ST/white-5.jpg',
				],
				'Graphite Gray': [
					'/Bikes/turris/ST/gray-1.jpg',
					'/Bikes/turris/ST/gray-2.jpg',
					'/Bikes/turris/ST/gray-3.jpg',
					'/Bikes/turris/ST/gray-4.jpg',
					'/Bikes/turris/ST/gray-5.jpg',
				],
			},
		},
		cruiser: {
			XR: {
				'Carbon, Matte': [
					'/Bikes/Cafe Cruiser/XR/carbon-1.jpg',
					'/Bikes/Cafe Cruiser/XR/carbon-2.jpg',
					'/Bikes/Cafe Cruiser/XR/carbon-3.jpg',
				],
				'Indigo, Matte': [
					'/Bikes/Cafe Cruiser/XR/indigo-1.jpg',
					'/Bikes/Cafe Cruiser/XR/indigo-2.jpg',
					'/Bikes/Cafe Cruiser/XR/indigo-3.jpg',
				],
				'Latte, Gloss': [
					'/Bikes/Cafe Cruiser/XR/white-1.jpg',
					'/Bikes/Cafe Cruiser/XR/white-2.jpg',
					'/Bikes/Cafe Cruiser/XR/white-3.jpg',
					'/Bikes/Cafe Cruiser/XR/white-4.jpg',
				],
			},
			ST: {
				'Carbon, Matte': [
					'/Bikes/Cafe Cruiser/ST/carbon-1.jpg',
					'/Bikes/Cafe Cruiser/ST/carbon-2.jpg',
					'/Bikes/Cafe Cruiser/ST/carbon-3.jpg',
				],
				'Indigo, Matte': [
					'/Bikes/Cafe Cruiser/ST/indigo-1.jpg',
					'/Bikes/Cafe Cruiser/ST/indigo-2.jpg',
					'/Bikes/Cafe Cruiser/ST/indigo-3.jpg',
				],
				'Latte, Gloss': [
					'/Bikes/Cafe Cruiser/ST/white-1.jpg',
					'/Bikes/Cafe Cruiser/ST/white-2.jpg',
					'/Bikes/Cafe Cruiser/ST/white-3.jpg',
					'/Bikes/Cafe Cruiser/ST/white-4.jpg',
				],
			},
		},
		'700-series': {
			XR: {
				'Steel Blue': [
					'/Bikes/700 Series/XR/blue-1.jpg',
					'/Bikes/700 Series/XR/blue-2.jpg',
					'/Bikes/700 Series/XR/blue-3.jpg',
				],
				'Graphite Gray': [
					'/Bikes/700 Series/XR/gray-1.jpg',
					'/Bikes/700 Series/XR/gray-2.jpg',
					'/Bikes/700 Series/XR/gray-3.jpg',
				],
			},
			ST: {
				'Steel Blue': [
					'/Bikes/700 Series/ST/blue-1.jpg',
					'/Bikes/700 Series/ST/blue-2.jpg',
					'/Bikes/700 Series/ST/blue-3.jpg',
				],
				'Graphite Gray': [
					'/Bikes/700 Series/ST/gray-1.jpg',
					'/Bikes/700 Series/ST/gray-2.jpg',
					'/Bikes/700 Series/ST/gray-3.jpg',
				],
			},
		},
		lmtd: {
			XR: {
				'Midnight Gray': [
					'/Bikes/700 Series/XR/gray-1.jpg',
					'/Bikes/700 Series/XR/gray-2.jpg',
					'/Bikes/700 Series/XR/gray-3.jpg',
				],
				SandStone: [
					'/Bikes/700 Series/XR/sand-1.jpg',
					'/Bikes/700 Series/XR/sand-2.jpg',
					'/Bikes/700 Series/XR/sand-3.jpg',
				],
			},
			ST: {
				'Midnight Gray': [
					'/Bikes/700 Series/ST/gray-1.jpg',
					'/Bikes/700 Series/ST/gray-2.jpg',
					'/Bikes/700 Series/ST/gray-3.jpg',
				],
				SandStone: [
					'/Bikes/700 Series/ST/sand-1.jpg',
					'/Bikes/700 Series/ST/sand-2.jpg',
					'/Bikes/700 Series/ST/sand-3.jpg',
				],
			},
		},
		prodigy: {
			XR: {
				'Carbon, Matte': [
					'/Bikes/prodigy/XR/carbon-1.jpg',
					'/Bikes/prodigy/XR/carbon-2.jpg',
					'/Bikes/prodigy/XR/carbon-3.jpg',
				],
				'Chameleon, Gloss': [
					'/Bikes/prodigy/XR/green-1.jpg',
					'/Bikes/prodigy/XR/green-2.jpg',
					'/Bikes/prodigy/XR/green-3.jpg',
				],
			},
			XC: {
				'Carbon, Matte': [
					'/Bikes/prodigy/XR/carbon-1.jpg',
					'/Bikes/prodigy/XR/carbon-2.jpg',
					'/Bikes/prodigy/XR/carbon-3.jpg',
				],
				'Chameleon, Gloss': [
					'/Bikes/prodigy/XR/green-1.jpg',
					'/Bikes/prodigy/XR/green-2.jpg',
					'/Bikes/prodigy/XR/green-3.jpg',
				],
			},
			ST: {
				'Carbon, Matte': [
					'/Bikes/prodigy/ST/carbon-1.jpg',
					'/Bikes/prodigy/ST/carbon-2.jpg',
					'/Bikes/prodigy/ST/carbon-3.jpg',
				],
				'Chalk, Gloss': [
					'/Bikes/prodigy/ST/white-1.jpg',
					'/Bikes/prodigy/ST/white-2.jpg',
					'/Bikes/prodigy/ST/white-3.jpg',
				],
			},
		},
		'revv-1': {
			FS: {
				'Graphite Gray': [
					'/Bikes/Revv 1/FS/gray-1.jpg',
					'/Bikes/Revv 1/FS/gray-2.jpg',
					'/Bikes/Revv 1/FS/gray-3.jpg',
					'/Bikes/Revv 1/FS/gray-4.jpg',
				],
				'Moss Green': [
					'/Bikes/Revv 1/FS/moss-1.jpg',
					'/Bikes/Revv 1/FS/moss-2.jpg',
					'/Bikes/Revv 1/FS/moss-3.jpg',
					'/Bikes/Revv 1/FS/moss-4.jpg',
					'/Bikes/Revv 1/FS/moss-5.jpg',
				],
			},
			HT: {
				'Graphite Gray': [
					'/Bikes/Revv 1/HT/gray-1.jpg',
					'/Bikes/Revv 1/HT/gray-2.jpg',
					'/Bikes/Revv 1/HT/gray-3.jpg',
					'/Bikes/Revv 1/HT/gray-4.jpg',
				],
				'Moss Green': [
					'/Bikes/Revv 1/HT/moss-1.jpg',
					'/Bikes/Revv 1/HT/moss-2.jpg',
					'/Bikes/Revv 1/HT/moss-3.jpg',
					'/Bikes/Revv 1/HT/moss-4.jpg',
					'/Bikes/Revv 1/HT/moss-5.jpg',
				],
			},
		},
	};

	const [images, setImages] = useState(imageArray[bike][version][color]);

	console.log(bike, version, color, images);

	// Slick settings
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		wheel: true, // enable mouse wheel scrolling
	};

	return (
		<section className='product-showcase'>
			<div className='product-container'>
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
			</div>
		</section>
	);
};

export default BikeDetailsPage;