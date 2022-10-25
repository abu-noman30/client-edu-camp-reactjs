import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
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
						<div className=' mt-4 col-span-12 md:col-span-2 lg:col-span-3 flex h-full flex-col justify-between rounded-xl bg-white px-8'>
							<ul className='list-decimal'>
								<h2 className='text-xl font-bold border-b-4 border-spacing-1 border-gray-800 my-3 italic'>
									Available Courses:
								</h2>
								{/* Single Courses */}
								{loaderData.map((courseName, index) => (
									<Link
										to={`/all-courses/${courseName.id}`}
										key={courseName.id}
									>
										<li className='font-bold underline underline-offset-3 text-blue-700 hover:bg-slate-100  px-2 rounded'>
											{courseName.name}
										</li>
									</Link>
								))}
							</ul>
						</div>
					</div>
					{/* Courses Section */}
					<div className='lg:m-4 w-full lg:w-[58rem] lg:ml-[20rem] bg-white rounded-xl p-2 md:p-4 lg:p-8 md:py-8 px-2 md:px-8 '>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
							{/* Course Cards - 1 */}
							{loaderData.map((singleCourse) => (
								<SingleCourse
									key={singleCourse.id}
									singleCourse={singleCourse}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Courses;
