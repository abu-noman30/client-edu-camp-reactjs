import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
// import Home from '../../Pages/Home/Home';
import Footer from '../Footer/Footer';

const Root = () => {
	return (
		<div>
			{/* Navbar Section */}
			<div className='navbar-container shadow-2xl rounded-xl bg-[url(https://img.freepik.com/premium-vector/abstract-modern-white-grey-gradient-geometric-pattern-background_120819-595.jpg?w=1060)] fixed w-full z-20'>
				<Navbar />
			</div>
			{/* Outlet Section */}
			<div className='pt-10'>
				<Outlet />
			</div>
			{/* Footer Section */}
			<div className='footer-container mt-10 bg-[url(https://img.freepik.com/premium-vector/abstract-modern-white-grey-gradient-geometric-pattern-background_120819-595.jpg?w=1060)] z-10'>
				<Footer />
			</div>
		</div>
	);
};

export default Root;
