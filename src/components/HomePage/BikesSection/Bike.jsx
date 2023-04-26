import React, { useState } from 'react';
import styles from './Bike.module.css';

// Importing Link from react-router-dom to create hyperlinks that use client-side routing
import { Link } from 'react-router-dom';

// Importing the ColorSwatches component, which will be used to display color options for each bike
import ColorSwatches from './ColorSwatches';

// JS Object that stores paths to different bikes
import { imageArray } from '../../BikeDetailsPage/bikeImagePath';

const Bike = props => {
	// Extracting bike versions from array of Objects into an array / output example = ["Large", "Small"]
	const versionsNames = props.versions.map(version => version.name);

	// current bike version derived from first element in versionsNames array
	const [currentVersion, setCurrentVersion] = useState(versionsNames[0]);

	// Finding the current Colors for this Version
	const version = props.versions.find(v => v.name === currentVersion);
	const versionColors = version.priceByColor;
	// ^ versionColors looks like { "Burgundy, Matte": 1095, "Gravel Gray": 1245, "Black, Matte": 1095, … }
	// Then here we set the initial currentColor to the first key in the versionColors Obj
	const [currentColor, setCurrentColor] = useState(Object.keys(versionColors)[0]);
	// Event handlers to update current version and color
	const versionChangeHandler = newVersion => {
		setCurrentVersion(newVersion);
	};

	const colorChangeHandler = newColor => {
		setCurrentColor(newColor);
	};

	// Determining bike Image to display based on current version and color
	let bikeImage = imageArray[props.id][currentVersion][currentColor][0];

	// Formatting the bike price
	// Function for formatting prices
	const formatPrice = price => {
		if (price) {
			return price.toLocaleString('en-US', {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			});
		}
	};
	// CurrentPrice Formatted
	const price = versionColors[currentColor];
	const formattedPrice = formatPrice(price);

	// SalePrice Formatted
	const originalPrice = version.originalPrice[currentColor];
	const formattedOriginalPrice = formatPrice(originalPrice);

	// onSale boolean for displaying badge and original price
	let onSale = false;
	props.versions.forEach(version => {
		if (version.onSale === true) {
			onSale = true;
		}
	});

	return (
		<div className={onSale ? styles['bike-onsale'] : styles.bike}>
			<span className={styles.badge}>Sale!</span>

			<header className={styles.header}>
				{/* Bike name and version buttons */}
				<div className={styles['heading-container']}>
					<h1>{props.name}</h1>
					<div className={styles['frame-buttons']}>
						{versionsNames.map(name => (
							<button
								className={
									name === currentVersion
										? styles['frame-button-active']
										: styles['frame-button']
								}
								key={name}
								onClick={() => versionChangeHandler(name)}
							>
								{name}
							</button>
						))}
					</div>
				</div>

				{/* Bike price */}
				<div className={styles['price-container']}>
					{/* Original Price Span */}
					<span
						className={
							originalPrice
								? styles['original-price-active']
								: styles['original-price']
						}
					>
						${formattedOriginalPrice}
					</span>

					{/* Current Price Span */}
					<span className={originalPrice ? styles['price-active'] : styles.price}>
						${formattedPrice}
					</span>

					<span className={styles['in-stock']}>In Stock</span>
				</div>
			</header>

			{/* Bike image and color swatches */}
			<div className={styles['image-container']}>
				<img src={bikeImage} alt='' />

				<div className={styles.swatches}>
					{/* Color swatch buttons */}
					{Object.keys(versionColors)
						.filter(color => versionColors[color])
						.map(color => (
							<ColorSwatches
								key={color}
								color={color}
								onColorChange={colorChangeHandler}
								currentColor={currentColor}
							/>
						))}
				</div>
			</div>

			<Link to={`/product/${props.id}`} className={styles.button}>
				Select Frame
			</Link>
		</div>
	);
};

export default Bike;
