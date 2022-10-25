import React from 'react';
import Instructors from '../../Components/Instructors/Instructors';
import Header from '../../Layouts/Header/Header';

const Home = () => {
	return (
		<div>
			{/* Header Section */}
			<div className=''>
				<Header />
			</div>

			{/* Instructors Section */}
			<div className='mt-10 shadow-lg'>
				<Instructors />
			</div>
		</div>
	);
};

export default Home;
