import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import SingleCourse from '../../Components/SingleCourse/SingleCourse';

const Courses = () => {
	const loaderData = useLoaderData();
	// console.log(loaderData);
	return (
		<>
			{/* Courses Container */}
			<div className='bg-gray-100	pt-8 shadow-lg'>
				<div className='flex flex-col lg:flex-none justify-between w-full lg:w-11/12 mx-auto gap-8 py-6 px-4 md:px-16 lg:px-0  '>
					{/* Sidebar Section */}
					<div className=' w-full lg:w-[16rem] lg:fixed lg:left-16 h-80'>
						<Sidebar loaderData={loaderData} />
					</div>
					{/* Courses Section */}
					<div className='lg:m-4 w-full lg:w-[58rem] lg:ml-[20rem] bg-white rounded-xl p-2 md:p-4 lg:p-8 md:py-8 px-2 md:px-8 '>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
							{/* Course Cards - 1 */}
							{loaderData.map((singleCourse) => (
								<SingleCourse key={singleCourse.id} singleCourse={singleCourse} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Courses;
