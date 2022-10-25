import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
	return (
		<div>
			{/* Navbar Section */}
			<div className='navbar-container shadow-2xl rounded-xl bg-sky-200 bg-[url(https://img.freepik.com/premium-vector/abstract-modern-white-grey-gradient-geometric-pattern-background_120819-595.jpg?w=1060)]'>
				<Navbar />
			</div>
			{/* Outlet Section */}
			<Outlet />
			{/* Footer Section */}
			<div className='footer-container mt-10 bg-[url(https://img.freepik.com/premium-vector/abstract-modern-white-grey-gradient-geometric-pattern-background_120819-595.jpg?w=1060)]'>
				<Footer />
			</div>
		</div>
	);
};

export default Root;
