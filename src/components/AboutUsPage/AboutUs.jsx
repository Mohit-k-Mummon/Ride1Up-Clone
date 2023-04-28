import React from 'react';
import styles from './AboutUs.module.css';

import rootsImg from '../../assets/AboutUs/roots.jpg';
import bikesImg from '../../assets/AboutUs/bikes.jpg';
import commitment from '../../assets/AboutUs/commitment.jpg';

// Router
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
	// When page is navigated to it starts the window at the top
	window.scroll(0, 0);

	// Navigate to shop bikes
	const navigate = useNavigate();
	const scrollToBikesHandler = async event => {
		event.preventDefault();
		// The navigate function is asynchronous, if we do not use await
		// here then the section variable will be undefined
		await navigate('/');
		const section = document.getElementById('shop-bikes-section');
		section.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<section className={styles['about-us']}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1>Our Roots</h1>
					<p>
						Ride1Up was born when our founder, Kevin Dugger, realized that there weren’t
						any affordable electric bikes that were built with quality components and
						materials that would last. At the time, any decent ebike seemed out of reach
						for most people – with most entry-level options starting at $2,000. Being a
						seasoned bike mechanic and builder, he knew there was an opportunity to
						create an affordable ebike with quality components.
					</p>
					<p>
						Electric bikes offer a seemingly infinite number of benefits and Kevin
						wanted more people to discover and experience them without having to break
						the bank to get one. In his mind, it didn’t make any sense why electric
						bikes were so expensive and thus, Ride1Up was founded.
					</p>
				</div>
				<img className={styles.photo} src={rootsImg} alt='' />
			</div>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1>Our Electric Bikes</h1>
					<p>
						We design and build our electric bikes with our customers in mind. Each
						model has been meticulously designed to give customers an outstanding riding
						experience no matter the use case.
					</p>
					<p>
						Our focus when it comes to bike design and build, is value. That doesn’t
						mean that we have the cheapest ebikes around, however, within each bikes’
						category, you will not find another ebike with better quality components for
						the price. We outfit our ebikes with name-brand components that will yield
						the most out of your hard-earned dollars and have the capability of lasting
						a lifetime without the steep price.
					</p>
					<p>
						When you choose Ride1Up, you can confidently ride knowing that you purchased
						the best-value ebike on the market without sacrificing performance or
						quality.
					</p>
					<Link to={'/'} onClick={scrollToBikesHandler} className={styles['shop-link']}>
						Shop Ebikes
					</Link>
				</div>
				<img className={styles.photo} src={bikesImg} alt='' />
			</div>
			<div className={styles.container}>
				<div className={styles.content}>
					<h1>Our Commitment</h1>
					<p>
						At Ride1Up, we measure our success through our customers’ experiences. We
						are committed to our riders and their satisfaction with our products. That
						is why, while no company is perfect, we will work tirelessly to ensure that
						we provide nothing short of excellent support to make your purchase and
						riding experience as seamless and enjoyable as possible.
					</p>
					<p>
						The members of our customer support team are just as passionate about happy
						riders as they are about electric bikes. We are continuously working on
						support materials such as articles and videos to help our customers to
						service and maintain their ebikes in great condition for years to come.
					</p>
					<Link className={styles['support-link']}>Contact Support</Link>
				</div>
				<img className={styles.photo} src={commitment} alt='' />
			</div>
		</section>
	);
};

export default AboutUs;
