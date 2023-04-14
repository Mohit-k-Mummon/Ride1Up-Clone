import React from 'react';

// Swatches
import burgundySwatch from '../../../assets/Home/Color Swatches/Burgandy.png';
import gravelGraySwatch from '../../../assets/Home/Color Swatches/gold4.png';
import blackMatteSwatch from '../../../assets/Home/Color Swatches/black-color-icon.png';
import silverMatteSwatch from '../../../assets/Home/Color Swatches/silver-color-icon.png';
import mintSwatch from '../../../assets/Home/Color Swatches/mint-color-icon.png';
import azureBlueSwatch from '../../../assets/Home/Color Swatches/Core-Blue.png';
import midnightGraySwatch from '../../../assets/Home/Color Swatches/Midnight-Gray1.png';
import mossGreenSwatch from '../../../assets/Home/Color Swatches/Moss_Green_Revv1.png';
import graphiteGraySwatch from '../../../assets/Home/Color Swatches/metal-gray-color-icon.png';
import indigoMatteSwatch from '../../../assets/Home/Color Swatches/Slate-Blue1.png';
import blueSteelSwatch from '../../../assets/Home/Color Swatches/BlueSteel-2.png';
import sandStoneSwatch from '../../../assets/Home/Color Swatches/sand-brown-color-icon.png';

const ColorSwatches = props => {
	let swatch;

	switch (props.color) {
		case 'Burgundy, Matte':
			swatch = burgundySwatch;
			break;
		case 'Gravel Gray':
			swatch = gravelGraySwatch;
			break;
		case 'Black, Matte':
			swatch = blackMatteSwatch;
			break;
		case 'Silver, Matte':
		case 'Origami White':
		case 'Latte, Gloss':
		case 'Chalk, Gloss':
			swatch = silverMatteSwatch;
			break;
		case 'Mint':
			swatch = mintSwatch;
			break;
		case 'Azure Blue':
			swatch = azureBlueSwatch;
			break;
		case 'Midnight Gray':
		case 'Carbon, Matte':
			swatch = midnightGraySwatch;
			break;
		case 'Forest Green':
		case 'Moss Green':
			swatch = mossGreenSwatch;
			break;
		case 'Graphite Gray':
			swatch = graphiteGraySwatch;
			break;
		case 'Indigo, Matte':
		case 'Chameleon, Gloss':
			swatch = indigoMatteSwatch;
			break;
		case 'Steel Blue':
			swatch = blueSteelSwatch;
			break;
		case 'SandStone':
			swatch = sandStoneSwatch;
			break;
		default:
			swatch = '';
			break;
	}

	return (
		<span className={`${props.currentColor === props.color ? 'active' : ''}`}>
			<img src={swatch} alt='swatch-color' onClick={() => props.onColorChange(props.color)} />
		</span>
	);
};

export default ColorSwatches;
