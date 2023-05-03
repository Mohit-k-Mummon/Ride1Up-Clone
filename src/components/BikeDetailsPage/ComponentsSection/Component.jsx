import React from 'react';
import styles from './Component.module.css';

import motor from '../../../assets/BikeDetailsPage/components/Ride1Up-motors.png';
import controller from '../../../assets/BikeDetailsPage/components/controller.png';
import battery from '../../../assets/BikeDetailsPage/components/battery.png';
import display from '../../../assets/BikeDetailsPage/components/display.png';
import pas from '../../../assets/BikeDetailsPage/components/pas.png';
import brakes from '../../../assets/BikeDetailsPage/components/brakes.png';
import fork from '../../../assets/BikeDetailsPage/components/fork.png';
import suspension from '../../../assets/BikeDetailsPage/components/suspension.png';
import throttle from '../../../assets/BikeDetailsPage/components/throttle.png';
import handlebar from '../../../assets/BikeDetailsPage/components/handlebar.png';
import stem from '../../../assets/BikeDetailsPage/components/stem.png';
import grips from '../../../assets/BikeDetailsPage/components/grips.png';
import chainring from '../../../assets/BikeDetailsPage/components/chainring.png';
import chain from '../../../assets/BikeDetailsPage/components/chain.png';
import tires from '../../../assets/BikeDetailsPage/components/tires.png';
import tubes from '../../../assets/BikeDetailsPage/components/tubes.png';
import fenders from '../../../assets/BikeDetailsPage/components/fenders.png';
import frontLight from '../../../assets/BikeDetailsPage/components/frontLight.png';
import rearLight from '../../../assets/BikeDetailsPage/components/rearLight.png';
import seat from '../../../assets/BikeDetailsPage/components/seat.png';
import pedals from '../../../assets/BikeDetailsPage/components/pedals.png';
import derailleur from '../../../assets/BikeDetailsPage/components/derailleur.png';
import shifters from '../../../assets/BikeDetailsPage/components/shifters.png';
import seatPost from '../../../assets/BikeDetailsPage/components/seatPost.png';
import gears from '../../../assets/BikeDetailsPage/components/gears.png';
import additional from '../../../assets/BikeDetailsPage/components/additional.png';
import spokes from '../../../assets/BikeDetailsPage/components/spokes.png';
import rack from '../../../assets/BikeDetailsPage/components/rack.png';
import kickstand from '../../../assets/BikeDetailsPage/components/kickstand.png';

const Component = props => {
	const { icon, title, content } = props;

	let CurrentIcon;
	switch (icon) {
		case 'motor':
			CurrentIcon = () => <img src={motor} alt=''></img>;
			break;
		case 'controller':
			CurrentIcon = () => <img src={controller} alt=''></img>;
			break;
		case 'battery':
			CurrentIcon = () => <img src={battery} alt=''></img>;
			break;
		case 'display':
			CurrentIcon = () => <img src={display} alt=''></img>;
			break;
		case 'pas':
			CurrentIcon = () => <img src={pas} alt=''></img>;
			break;
		case 'brakes':
			CurrentIcon = () => <img src={brakes} alt=''></img>;
			break;
		case 'fork':
			CurrentIcon = () => <img src={fork} alt=''></img>;
			break;
		case 'suspension':
			CurrentIcon = () => <img className={styles.suspension} src={suspension} alt=''></img>;
			break;
		case 'throttle':
			CurrentIcon = () => <img src={throttle} alt=''></img>;
			break;
		case 'handlebar':
			CurrentIcon = () => <img src={handlebar} alt=''></img>;
			break;
		case 'stem':
			CurrentIcon = () => <img className={styles.stem} src={stem} alt=''></img>;
			break;
		case 'grips':
			CurrentIcon = () => <img src={grips} alt=''></img>;
			break;
		case 'chainring':
			CurrentIcon = () => <img src={chainring} alt=''></img>;
			break;
		case 'chain':
			CurrentIcon = () => <img src={chain} alt=''></img>;
			break;
		case 'tires':
			CurrentIcon = () => <img src={tires} alt=''></img>;
			break;
		case 'tubes':
			CurrentIcon = () => <img src={tubes} alt=''></img>;
			break;
		case 'fenders':
			CurrentIcon = () => <img src={fenders} alt=''></img>;
			break;
		case 'front-light':
			CurrentIcon = () => <img src={frontLight} alt=''></img>;
			break;
		case 'rear-light':
			CurrentIcon = () => <img src={rearLight} alt=''></img>;
			break;
		case 'seat':
			CurrentIcon = () => <img src={seat} alt=''></img>;
			break;
		case 'pedals':
			CurrentIcon = () => <img src={pedals} alt=''></img>;
			break;
		case 'derailleur':
			CurrentIcon = () => <img src={derailleur} alt=''></img>;
			break;
		case 'shifters':
			CurrentIcon = () => <img src={shifters} alt=''></img>;
			break;
		case 'seat-post':
			CurrentIcon = () => <img src={seatPost} alt=''></img>;
			break;
		case 'gears':
			CurrentIcon = () => <img src={gears} alt=''></img>;
			break;
		case 'additional':
			CurrentIcon = () => <img src={additional} alt=''></img>;
			break;
		case 'spokes':
			CurrentIcon = () => <img src={spokes} alt=''></img>;
			break;
		case 'rack':
			CurrentIcon = () => <img src={rack} alt=''></img>;
			break;
		case 'kickstand':
			CurrentIcon = () => <img src={kickstand} alt=''></img>;
			break;
		default:
			CurrentIcon = () => <img src={pedals} alt=''></img>;
			break;
	}
	return (
		<div className={styles.component}>
			<div className={styles['icon-container']}>
				<CurrentIcon />
			</div>
			<div className={styles['component-content']}>
				<h1>{title}</h1>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default Component;
