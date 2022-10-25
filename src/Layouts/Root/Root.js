import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Home from '../../Pages/Home/Home';
import Footer from '../Footer/Footer';

const Root = () => {
	return (
		<>
			{/* Navbar Section */}
			<div className='navbar-container shadow-2xl rounded-xl bg-sky-200 bg-[url(https://img.freepik.com/premium-vector/abstract-modern-white-grey-gradient-geometric-pattern-background_120819-595.jpg?w=1060)]'>
				<Navbar />
			</div>
			{/* Outlet Section */}
			<div className='home-section'>
				<Home />
			</div>
			{/* Footer Section */}
			<div className='footer-container'>
				<Footer />
			</div>
		</>
	);
};

export default Root;
