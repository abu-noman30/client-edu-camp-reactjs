import React from 'react';
import Instructors from '../../Components/Instructors/Instructors';
import Header from '../../Layouts/Header/Header';

const Home = () => {
	return (
		<>
			{/* Header Section */}
			<div className=''>
				<Header />
			</div>

			{/* Instructors Section */}
			<div className='mt-10 shadow-lg'>
				<Instructors />
			</div>
		</>
	);
};

export default Home;
