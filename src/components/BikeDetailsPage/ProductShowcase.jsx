import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

// Importing a JSON file containing bike data
import BikesJSON from '../../Bikes.json';

// Components
import Selector from './Selector';
import DetailsColorSwatch from './DetailsColorSwatch';
import SliderContainer from './SliderContainer';

// Icon
import { ReactComponent as InfoIcon } from '../../assets/info.svg';

// JavaScript object storing image paths for bike models, sizes, and colors. Provides easy access to bike images for web applications or digital platforms.
import { imageArray } from './bikeImagePath';

const ProductShowcase = () => {
	const { bikeId } = useParams(); // destructuring the URL parameters to a constant
	const { bikes: bikesArray } = BikesJSON; //Each object in the "bikesArray" represents a specific bike and contains information about that bike.
	const [bike, setBike] = useState(bikeId);
	const [version, setVersion] = useState('');
	const [color, setColor] = useState('');
	const [images, setImages] = useState([]);
	const colorsAvailable = useMemo(() => imageArray[bike][version], [bike, version]); //Object of our current bike version colors

	// UseEffect for scrolling to top of the page onMount and when states related to displaying bike change
	useEffect(() => {
		const section = document.getElementById('top-notification-bar');
		section.scrollIntoView({ behavior: 'smooth' });
	}, [bike, version, color]);

	// This useEffect hook updates the state variables when the URL params or bikesArray array changes
	useEffect(() => {
		setBike(bikeId);

		// Here we're using the findIndex method on the bikesArray to look for the object that has the same id as our bikeId parameter.
		// Once we find the object, we assign the index of that object to the bikeIndex variable.
		// This is necessary to access the correct bike object, and its information, based on the URL parameters.
		const bikeIndex = bikesArray.findIndex(obj => obj.id === bikeId);

		// Here we update bike version i.e ('Large', 'Small') or ('XR', 'ST')
		// We use the bikeIndex from the previous step to access the correct bike
		// Set version to the defaultValue key from the dropdown object
		setVersion(bikesArray[bikeIndex].dropdown.defaultValue);

		// Using optional chaining, we access the priceByColor object of the first version object within the "versions" array, that is within the bikesArray array.
		// Object.keys is used to create an array of the object's properties.
		// We assign this array of version colors to the bikeVersionColors variable. This will be used to update the color initial state.
		const bikeVersionColors = Object.keys(bikesArray[bikeIndex]?.versions?.[0]?.priceByColor);
		setColor(bikeVersionColors?.[0]); // Sets the color state variable to the first color, if it exists
	}, [bikeId, bikesArray]);

	useEffect(() => {
		// Here, we use the imported imageArray which holds the image paths for each bike.
		// By using the bike, version, and color state variables, we access the correct array of image paths from imageArray
		// We then set the images state variable to this array of image paths.
		// This allows us to display the appropriate images for the selected bike, version, and color.
		setImages(imageArray[bike]?.[version]?.[color] || []);
	}, [bike, version, color, bikeId]);

	// Here we're using the findIndex method on the bikesArray to look for the object that has the same id as our bikeId parameter.
	// Once we find the object, we assign the index of that object to the bikeIndex variable.
	// This is necessary to access the correct bike object, and its information, based on the URL parameters.
	const bikeIndex = bikesArray.findIndex(obj => obj.id === bikeId);

	// Here we create currentBike which is a object from the 'bikesArray' with the bikeIndex variable from the last step
	const currentBike = bikesArray[bikeIndex];

	// Here, we are finding the index of the current bike version by accessing the 'versions' property of the 'currentBike' object.
	// We use the 'findIndex' method to search for the version that matches the 'version' state.
	// The resulting index is stored in the 'selectedVersionIndex' variable so that we can access the correct version information later.
	const selectedVersionIndex = currentBike.versions.findIndex(bike => bike.name === version);

	// Function for formatting prices
	const formatPrice = price => {
		if (price) {
			return price.toLocaleString('en-US', {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			});
		}
	};

	// Here we find the current bike price and format it with our formatPrice function
	const bikePrice = formatPrice(currentBike.versions[selectedVersionIndex]?.priceByColor[color]);

	// onClickHandlers
	const selectionChangeHandler = version => {
		setVersion(version);
	};

	const swatchClickHandler = clickedColor => {
		setColor(clickedColor);
	};

	const formSubmitHandler = event => {
		event.preventDefault();
	};

	return (
		<section className='product-section'>
			<div className='product-wrapper'>
				<SliderContainer images={images} />
				<div className='product-content-wrapper'>
					<h1 className='product-title'>{currentBike.name}</h1>
					<p className='product-tagline'>{currentBike.pageDetail.tagline}</p>
					{currentBike.pageDetail.note && (
						<p className='product-note'>{currentBike.pageDetail.note}</p>
					)}
					<p className='product-description'>{currentBike.pageDetail.description}</p>
					<form onSubmit={formSubmitHandler} className='product-form'>
						<Selector
							dropdown={currentBike.dropdown}
							onSelectionChange={selectionChangeHandler}
						/>
						<div className='product-swatch-label'>Color:</div>
						<div className='product-color-swatches-wrapper'>
							{typeof colorsAvailable === 'object' &&
								Object.keys(colorsAvailable).map((swatchColor, index) => (
									<DetailsColorSwatch
										key={index}
										color={swatchColor}
										currentColor={color}
										onSwatchClick={swatchClickHandler}
									/>
								))}
						</div>
						<p className='product-current-color'>{color}</p>
						<span className='product-call-us'>
							<span>"Is this the right bike for me?"</span> Let's chat:{' '}
							<a href='tel: +18884941415'>{`(888)494-1415`}</a>
							<div className='info-icon-wrapper'>
								<InfoIcon />
								<div className='info-popup'>
									<h2>Pre-Sale Support Hours</h2>
									<p>9:00 AM - 5:00 PM PST</p>
									<p>Monday-Friday</p>
								</div>
							</div>
						</span>
						<div className='product-price'>{`$${bikePrice}`}</div>
						<button className=' product-form-button'>Add To Cart</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ProductShowcase;