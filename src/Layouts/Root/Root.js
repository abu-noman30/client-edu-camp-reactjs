import React from 'react';
import { Outlet } from 'react-router-dom';
import Carousel from '../../Components/Navbar/Carousel/Carousel';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Root = () => {
	return (
		<>
			{/* Navbar Section */}
			<div className='navbar-container shadow-2xl rounded-xl bg-sky-200 bg-[url(https://img.freepik.com/premium-vector/abstract-modern-white-grey-gradient-geometric-pattern-background_120819-595.jpg?w=1060)]'>
				<Navbar />
			</div>
			{/* Outlet Section */}
			<div className='outlet-container'>
				<Outlet />
				<Carousel />
				<Header />
			</div>
			{/* Footer Section */}
			<div className='footer-container'>
				<Footer />
			</div>
		</>
	);
};

export default Root;
