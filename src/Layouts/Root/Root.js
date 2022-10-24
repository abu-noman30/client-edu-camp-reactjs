import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
	return (
		<>
			{/* Navbar Section */}
			<div className='navbar-container shadow-2xl rounded-xl'>
				<Navbar />
			</div>
			{/* Outlet Section */}
			<div className='outlet-container'>
				<Outlet />
			</div>
			{/* Footer Section */}
			<div className='footer-container'>
				<Footer />
			</div>
		</>
	);
};

export default Root;
