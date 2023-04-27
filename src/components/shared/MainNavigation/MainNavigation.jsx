import React, { useEffect, useState } from 'react';
import styles from './MainNavigation.module.css';

import cartIcon from '../../../assets/Navigation/shopping-cart.png';
import menuHamburger from '../../../assets/Navigation/menu-hamburger.png';
import chevron from '../../../assets/Navigation/down-arrow.png';
import redChevron from '../../../assets/Navigation/red-chevron.png';
import closeIcon from '../../../assets/Navigation/close.png';

import { ReactComponent as Logo } from '../../../assets/Navigation/logo.svg';

// Router
import { NavLink, useNavigate } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { stopCartAnimation } from '../../features/cart-slice';

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
		MenuIcon = <img className={styles['menu-close']} src={closeIcon} alt='Menu Icon' />;
	} else {
		MenuIcon = (
			<img className={styles['menu-hamburger']} src={menuHamburger} alt='Close Menu Icon' />
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

	// Cart Animation State
	const dispatch = useDispatch();
	useEffect(() => {
		const timer = setTimeout(() => {
			dispatch(stopCartAnimation());
		}, 800);

		return () => {
			clearTimeout(timer);
		};
	}, [cart.addToCartClicked, dispatch]);

	return (
		<header className={styles['main-navigation']}>
			<nav className={styles.nav}>
				<NavLink className={styles['logo-link']} to={'/'}>
					<Logo />
					<span>The Best Value Electric Bikes</span>
				</NavLink>
				<ul className={styles['desktop-menu']}>
					<li>
						<NavLink
							className={styles['main-link']}
							to={'/'}
							onClick={scrollToBikesHandler}
						>
							Ebikes
						</NavLink>
					</li>
					<li>
						Accessories
						<img
							aria-expanded={mobileSubMenuExpanded}
							className={styles['desktop-chevron']}
							onClick={subMenuToggleHandler}
							src={redChevron}
							alt=''
						/>
						<div className={styles['desktop-dropdown']}>
							<NavLink className={styles['sub-link']} to={'/shop/parts'}>
								Parts & Accessories
							</NavLink>
							<NavLink className={styles['sub-link']} to={'/shop/batteries'}>
								Batteries
							</NavLink>
						</div>
					</li>
					<li>
						<NavLink className={styles['main-link']}>Support</NavLink>
					</li>
					<li>
						<NavLink className={styles['main-link']} to={'/about-us'}>
							About Us
						</NavLink>
					</li>
					<li>
						<NavLink className={styles['main-link']} to={'/contact'}>
							Contact Us
						</NavLink>
					</li>
					<li>
						<NavLink className={styles['main-link']} to={'/social-reviews'}>
							Reviews
						</NavLink>
					</li>
				</ul>
				<div className={styles.cart}>
					<NavLink
						className={`${styles['cart-container']} ${
							cart.addToCartClicked ? styles.animating : ''
						}`}
						to={'/cart'}
					>
						<img className={styles['cart-icon']} src={cartIcon} alt='Cart Icon' />
						<span className={styles['cart-total']}>{cart.cartQuantity}</span>
					</NavLink>
					<button
						className={styles['hamburger-container']}
						aria-expanded={menuExpanded}
						aria-controls='mobile-menu'
						onClick={menuToggleHandler}
					>
						{MenuIcon}
					</button>
				</div>
				<ul
					id='mobile-menu'
					className={`${styles['mobile-menu']} ${
						menuExpanded ? styles['menu-active'] : ''
					} ${mobileSubMenuExpanded ? styles['sub-menu-active'] : ''}`}
				>
					<li>
						<NavLink onClick={mobileScrollToBikesAndToggleHandler}>Ebikes</NavLink>
					</li>
					<li onClick={subMenuToggleHandler}>
						Accessories
						<img
							aria-expanded={mobileSubMenuExpanded}
							className={styles.chevron}
							onClick={subMenuToggleHandler}
							src={chevron}
							alt=''
						/>
					</li>
					<li className={styles['accessories-list']}>
						<NavLink to={'/shop/parts'} onClick={menuToggleHandler}>
							Parts & Accessories
						</NavLink>
					</li>
					<li className={styles['accessories-list']}>
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
