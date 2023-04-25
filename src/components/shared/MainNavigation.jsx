import React, { useState } from 'react';
import './MainNavigation.css';

import logo from '../../assets/Navigation/Logo.png';
import cartIcon from '../../assets/Navigation/shopping-cart.png';
import menuHamburger from '../../assets/Navigation/menu-hamburger.png';
import chevron from '../../assets/Navigation/down-arrow.png';
import redChevron from '../../assets/Navigation/red-chevron.png';
import closeIcon from '../../assets/Navigation/close.png';

// Router
import { NavLink, useNavigate } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

const MainNavigation = () => {
	// Redux
	const cart = useSelector(state => state.cart);

	// Mobile Menu Active State
	const [menuExpanded, setMenuExpanded] = useState(false);
	const menuToggleHandler = () => {
		setMenuExpanded(!menuExpanded);
		setMobileSubMenuExpanded(false);
	};

	// Mobile Sub Menu Active State
	const [mobileSubMenuExpanded, setMobileSubMenuExpanded] = useState(false);
	const subMenuToggleHandler = () => {
		setMobileSubMenuExpanded(!mobileSubMenuExpanded);
	};

	// Menu Icon Toggle Img
	let MenuIcon;
	if (menuExpanded) {
		MenuIcon = <img className='menu-icon-close' src={closeIcon} alt='Menu Icon' />;
	} else {
		MenuIcon = (
			<img className='menu-icon-hamburger' src={menuHamburger} alt='Close Menu Icon' />
		);
	}

	// Scroll to bikes section Desktop Link Handler
	const navigate = useNavigate();
	const scrollToBikesHandler = async event => {
		event.preventDefault();
		// The navigate function is asynchronous, if we do not use await
		// here then the section variable will be undefined
		await navigate('/');
		const section = document.getElementById('shop-bikes-section');
		section.scrollIntoView({ behavior: 'smooth' });
	};

	// Scroll to bikes section Mobile Link Handler
	const mobileScrollToBikesAndToggleHandler = async event => {
		setMenuExpanded(!menuExpanded);
		event.preventDefault();
		await navigate('/');
		const section = document.getElementById('shop-bikes-section');
		section.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<header className='main-navigation'>
			<nav className='nav container-nav'>
				<NavLink className='logo-container' to={'/'}>
					<img className='logo-container__icon' src={logo} alt='Ride1Up logo' />
					<span>The Best Value Electric Bikes</span>
				</NavLink>
				<ul className='desktop-menu'>
					<li>
						<NavLink to={'/'} onClick={scrollToBikesHandler}>
							Ebikes
						</NavLink>
					</li>
					<li>
						Accessories
						<img
							aria-expanded={mobileSubMenuExpanded}
							className='chevron-icon-red'
							onClick={subMenuToggleHandler}
							src={redChevron}
							alt=''
						/>
						<div className='nav__desktop-drop-down'>
							<NavLink to={'/shop/parts'}>Parts & Accessories</NavLink>
							<NavLink to={'/shop/batteries'}>Batteries</NavLink>
						</div>
					</li>
					<li>
						<NavLink>Support</NavLink>
					</li>
					<li>
						<NavLink to={'/about-us'}>About Us</NavLink>
					</li>
					<li>
						<NavLink to={'/contact'}>Contact Us</NavLink>
					</li>
					<li>
						<NavLink to={'/social-reviews'}>Reviews</NavLink>
					</li>
				</ul>
				<div className='cart-menu'>
					<NavLink className='cart-menu__icon-container' to={'/cart'}>
						<img className='cart-icon' src={cartIcon} alt='Cart Icon' />
						<span className='cart-total'>{cart.cartQuantity}</span>
					</NavLink>
					<button
						aria-expanded={menuExpanded}
						aria-controls='mobile-menu'
						onClick={menuToggleHandler}
					>
						{MenuIcon}
					</button>
				</div>
				<ul
					id='mobile-menu'
					className={`mobile-menu ${menuExpanded ? 'menu-active' : ''} ${
						mobileSubMenuExpanded ? 'sub-menu-active' : ''
					}`}
				>
					<li>
						<NavLink onClick={mobileScrollToBikesAndToggleHandler}>Ebikes</NavLink>
					</li>
					<li onClick={subMenuToggleHandler}>
						Accessories
						<img
							aria-expanded={mobileSubMenuExpanded}
							className='chevron-icon'
							onClick={subMenuToggleHandler}
							src={chevron}
							alt=''
						/>
					</li>
					<li className='accessories-list'>
						<NavLink to={'/shop/parts'} onClick={menuToggleHandler}>
							Parts & Accessories
						</NavLink>
					</li>
					<li className='accessories-list'>
						<NavLink to={'/shop/batteries'} onClick={menuToggleHandler}>
							Batteries
						</NavLink>
					</li>
					<li>
						<NavLink>Support</NavLink>
					</li>
					<li>
						<NavLink to={'/about-us'} onClick={menuToggleHandler}>
							About Us
						</NavLink>
					</li>
					<li>
						<NavLink to={'/contact'} onClick={menuToggleHandler}>
							Contact Us
						</NavLink>
					</li>
					<li>
						<NavLink to={'/social-reviews'} onClick={menuToggleHandler}>
							Reviews
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
