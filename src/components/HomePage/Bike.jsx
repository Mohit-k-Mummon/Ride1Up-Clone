import React, { useState } from 'react';

// Importing Link from react-router-dom to create hyperlinks that use client-side routing
import { Link } from 'react-router-dom';

// Importing the ColorSwatches component, which will be used to display color options for each bike
import ColorSwatches from './ColorSwatches';

// Importing images for all the different bike models and colors offered
// Roadster
import roadsterBurgundy from '../../assets/Home/Bikes/Roadster v2/Roadster_v2_Matte_Burgundy-scaled.jpg';
import roadsterGravel from '../../assets/Home/Bikes/Roadster v2/Roadster_v2_Gravel_Grey-scaled.jpg';
import roadsterBlack from '../../assets/Home/Bikes/Roadster v2/Roadster_v2_Matte_Black-scaled.jpg';
import roadsterSilver from '../../assets/Home/Bikes/Roadster v2/Roadster_v2_Matte_Silver-scaled.jpg';

// Core-5
import coreMintST from '../../assets/Home/Bikes/Core-5/ST/Core-5-Rev_Core5-ST-Mint-Ebike.jpg';
import coreAzureST from '../../assets/Home/Bikes/Core-5/ST/PP_Core5-ST-Azure-Blue-Ebike.jpg';
import coreBlackST from '../../assets/Home/Bikes/Core-5/ST/PP_Core5-ST-Midnight-Grey-Ebike.jpg';
import coreMintXR from '../../assets/Home/Bikes/Core-5/XR/Core-5-Rev_Core5-XR-Mint-Ebike.jpg';
import coreAzureXR from '../../assets/Home/Bikes/Core-5/XR/PP_Core5-XR-Azure-Blue-Ebike.jpg';
import coreBlackXR from '../../assets/Home/Bikes/Core-5/XR/PP_Core5-XR-Midnight-Grey-Ebike.jpg';

// Turris
import turrisGreenXR from '../../assets/Home/Bikes/Turris/XR/Turris_XR_Green_Profile.jpg';
import turrisWhiteXR from '../../assets/Home/Bikes/Turris/XR/Turris_XR_White_Profile.jpg';
import turrisGrayXR from '../../assets/Home/Bikes/Turris/XR/Turris_XR_Gray_Profile.jpg';
import turrisGreenST from '../../assets/Home/Bikes/Turris/ST/Turris_ST_Green_Profile.jpg';
import turrisWhiteST from '../../assets/Home/Bikes/Turris/ST/Turris_ST_White_Profile.jpg';
import turrisGrayST from '../../assets/Home/Bikes/Turris/ST/Turris_ST_Gray_Profile.jpg';

// Cafe Cruiser
import cafeBlackXR from '../../assets/Home/Bikes/Cafe Cruiser/XR/Cafe_Cruiser_XR_Gunmetal_Grey-scaled.jpg';
import cafeIndigoXR from '../../assets/Home/Bikes/Cafe Cruiser/XR/Cafe_Cruiser_XR_Indigo_Matte-scaled.jpg';
import cafeLatteXR from '../../assets/Home/Bikes/Cafe Cruiser/XR/Cafe_Cruiser_XR_Latte_Gloss-scaled.jpg';
import cafeBlackST from '../../assets/Home/Bikes/Cafe Cruiser/ST/Cafe_Cruiser_ST_Gunmetal_Grey-scaled.jpg';
import cafeIndigoST from '../../assets/Home/Bikes/Cafe Cruiser/ST/Cafe_Cruiser_ST_Indigo_Matte-scaled.jpg';
import cafeLatteST from '../../assets/Home/Bikes/Cafe Cruiser/ST/Cafe_Cruiser_ST_Latte_Gloss-scaled.jpg';

// 700 Series
import SeriesBlueXR from '../../assets/Home/Bikes/700 Series/XR/700-Series_XR_Steel.jpg';
import SeriesBlackXR from '../../assets/Home/Bikes/700 Series/XR/700-Series_XR_Gunmetal_Gray.jpg';
import SeriesBlueST from '../../assets/Home/Bikes/700 Series/ST/700-Series_ST_Steel.jpg';
import SeriesBlackST from '../../assets/Home/Bikes/700 Series/ST/700-Series_ST_Gunmetal_Gray.jpg';

// LMT'D
import LMTDBlackXR from '../../assets/Home/Bikes/LMTD/XR/PP-Edit_LMTD-XR-Midnight.jpg';
import LMTDSandXR from '../../assets/Home/Bikes/LMTD/XR/PP_LMTD-XR-Sand.jpg';
import LMTDBlackST from '../../assets/Home/Bikes/LMTD/ST/PP_LMTD-ST-Midnight.jpg';
import LMTDSandST from '../../assets/Home/Bikes/LMTD/ST/PP_LMTD-ST-Sand.jpg';

// Prodigy
import ProdigyBlackST from '../../assets/Home/Bikes/Prodigy/ST/Prodigy_ST_Matte_Gray.jpg';
import ProdigyWhiteST from '../../assets/Home/Bikes/Prodigy/ST/Prodigy_ST_Chalk.jpg';
import ProdigyBlackXR from '../../assets/Home/Bikes/Prodigy/XR/Prodigy_XR_Matte_Gray.jpg';
import ProdigyGreenXR from '../../assets/Home/Bikes/Prodigy/XR/Prodigy_XR_Chameleon.jpg';
import ProdigyBlackXC from '../../assets/Home/Bikes/Prodigy/XC/Prodigy_XC_Matte_Gray.jpg';
import ProdigyGreenXC from '../../assets/Home/Bikes/Prodigy/XC/Prodigy_XC_Chameleon.jpg';

// Revv1
import RevvBlackFS from '../../assets/Home/Bikes/Revv 1/FS/Revv1_FS_Gray_Profile.jpg';
import RevvGreenFS from '../../assets/Home/Bikes/Revv 1/FS/Revv1_FS_Moss_Profile.jpg';
import RevvBlackHT from '../../assets/Home/Bikes/Revv 1/HT/Revv1_HT_Gray_Profile.jpg';
import RevvGreenHT from '../../assets/Home/Bikes/Revv 1/HT/Revv1_HT_Moss_Profile.jpg';

// Object containing image paths for different bike versions and colors
const bikeImages = {
	'Roadster v2': {
		Large: {
			'Burgundy, Matte': roadsterBurgundy,
			'Gravel Gray': roadsterGravel,
			'Black, Matte': roadsterBlack,
			'Silver, Matte': roadsterSilver,
		},
		Small: {
			'Burgundy, Matte': roadsterBurgundy,
			'Gravel Gray': roadsterGravel,
			'Black, Matte': roadsterBlack,
			'Silver, Matte': roadsterSilver,
		},
	},
	'Core-5': {
		XR: {
			Mint: coreMintXR,
			'Azure Blue': coreAzureXR,
			'Midnight Gray': coreBlackXR,
		},
		ST: {
			Mint: coreMintST,
			'Azure Blue': coreAzureST,
			'Midnight Gray': coreBlackST,
		},
	},
	Turris: {
		XR: {
			'Forest Green': turrisGreenXR,
			'Origami White': turrisWhiteXR,
			'Graphite Gray': turrisGrayXR,
		},
		ST: {
			'Forest Green': turrisGreenST,
			'Origami White': turrisWhiteST,
			'Graphite Gray': turrisGrayST,
		},
	},
	'Cafe Cruiser': {
		XR: {
			'Carbon, Matte': cafeBlackXR,
			'Indigo, Matte': cafeIndigoXR,
			'Latte, Gloss': cafeLatteXR,
		},
		ST: {
			'Carbon, Matte': cafeBlackST,
			'Indigo, Matte': cafeIndigoST,
			'Latte, Gloss': cafeLatteST,
		},
	},
	'700 Series': {
		XR: {
			'Steel Blue': SeriesBlueXR,
			'Graphite Gray': SeriesBlackXR,
		},
		ST: {
			'Steel Blue': SeriesBlueST,
			'Graphite Gray': SeriesBlackST,
		},
	},
	"LMT'D": {
		XR: {
			'Midnight Gray': LMTDBlackXR,
			SandStone: LMTDSandXR,
		},
		ST: {
			'Midnight Gray': LMTDBlackST,
			SandStone: LMTDSandST,
		},
	},
	Prodigy: {
		XR: {
			'Carbon, Matte': ProdigyBlackXR,
			'Chalk, Gloss': null,
			'Chameleon, Gloss': ProdigyGreenXR,
		},
		XC: {
			'Carbon, Matte': ProdigyBlackXC,
			'Chalk, Gloss': null,
			'Chameleon, Gloss': ProdigyGreenXC,
		},
		ST: {
			'Carbon, Matte': ProdigyBlackST,
			'Chalk, Gloss': ProdigyWhiteST,
			'Chameleon, Gloss': null,
		},
	},
	Revv1: {
		FS: {
			'Moss Green': RevvGreenFS,
			'Graphite Gray': RevvBlackFS,
		},
		HT: {
			'Moss Green': RevvGreenHT,
			'Graphite Gray': RevvBlackHT,
		},
	},
};

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
	let bikeImage = bikeImages[props.name][currentVersion][currentColor];

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
		<div className={`bike ${onSale ? 'onSale' : ''}`}>
			<span className='bike__sale-badge'>Sale!</span>
			<header className='bike__header'>
				{/* Bike name and version buttons */}
				<div className='bike__heading-container'>
					<h1>{props.name}</h1>
					<div className='bike__button-container'>
						{versionsNames.map(name => (
							<button
								className={`${name === currentVersion ? 'active' : ''}`}
								key={name}
								onClick={() => versionChangeHandler(name)}
							>
								{name}
							</button>
						))}
					</div>
				</div>
				{/* Bike price */}
				<div className='bike__price-container'>
					{/* Original Price Span */}
					<span className={`original-price ${originalPrice ? 'active' : ''}`}>
						${formattedOriginalPrice}
					</span>
					{/* Current Price Span */}
					<span className={`price ${originalPrice ? 'active' : ''}`}>
						${formattedPrice}
					</span>
					<span className='in-stock'>In Stock</span>
				</div>
			</header>
			{/* Bike image and color swatches */}
			<div className='bike__image-container'>
				<img src={bikeImage} alt='' />
				<div className='color-swatches-container'>
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
			<Link className='button'>Select Frame</Link>
		</div>
	);
};

export default Bike;
