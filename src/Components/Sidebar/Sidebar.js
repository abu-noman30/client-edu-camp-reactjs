import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
	const courseData = props.loaderData;

	return (
		<>
			{/* Sidebar Container */}
			<div className=' mt-4 col-span-12 md:col-span-2 lg:col-span-3 flex h-full flex-col justify-between rounded-xl bg-white px-8'>
				<ul className='list-decimal'>
					<h2 className='text-xl font-bold border-b-4 border-spacing-1 border-gray-800 my-3 italic'>Available Courses:</h2>
					{/* Single Courses */}
					{courseData.map((courseName, index) => (
						<Link to={`/all-courses/${courseName.id}`} key={courseName.id}>
							<li className='font-bold underline underline-offset-3 text-blue-700 hover:bg-slate-100  px-2 rounded'>{courseName.name}</li>
						</Link>
					))}
				</ul>
			</div>
		</>
	);
};

export default Sidebar;
