import React from 'react';
import toast from 'react-hot-toast';

import * as FAIcons from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const CheckList = () => {
	const loaderData = useLoaderData();
	const {
		course_name,
		thumbnail_url,
		rating: { number, badge },
		total_student
	} = loaderData;
	console.log(loaderData);

	return (
		<>
			{/* Check List Container */}
			<div className='checklist-container w-11/12 md:w-9/12 lg:8/12 mx-auto  '>
				<section className='text-gray-600 body-font bg-white mt-4'>
					<div className='container px-5 pb-4 md:pt-14 md:pb-14  mx-auto flex flex-col lg:flex-row flex-wrap border mt-16 shadow-inner shadow-gray-400  '>
						{/* ---- */}
						<div className=' flex flex-wrap flex-col items-center justify-center w-full lg:w-6/12  mx-auto'>
							{/* 1 */}
							<div className='w-full mt-4 -mb-2 md:mb-4 text-center order-1 lg:order-none'>
								<p className='text-lg md:text-xl lg:text-2xl text-blue-900 flex items-center justify-center'>
									<FAIcons.FaUserGraduate />
								</p>
								<h1 className=' font-bold text-2xl md:text-4xl lg:text-4xl mb-2 text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-blue-800 '>{course_name}</h1>
							</div>
							{/* 2-lg */}
							<div className=' hidden lg:flex items-center justify-evenly border p-2 w-full md:w-8/12 order-3 lg:order-none mt-3 mb-0 md:mb-6'>
								<div className=' w-full  flex flex-col items-center justify-center'>
									<h2 className='font-base lg:font-medium text-lg md:text-xl lg:text-2xl text-gray-900'>{total_student}</h2>
									<p className='leading-relaxed text-sm md:text-base'>Student</p>
								</div>
								<div className='w-full  flex flex-col items-center justify-center'>
									<h2 className='font-base lg:font-medium text-lg md:text-xl lg:text-2xl text-slate-200 bg-red-600 rounded px-2 py-1 mx-8'>{badge}</h2>
								</div>
								<div className='w-full  flex flex-col items-center justify-center'>
									<h2 className='font-base lg:font-medium text-lg md:text-xl lg:text-2xl text-gray-900'>{number}</h2>
									<p className='leading-relaxed text-sm md:text-base'>Ratings</p>
								</div>
							</div>
							{/* 3 */}
							<div className='hidden lg:block mx-auto order-4 lg:order-none'>
								<button
									className='py-3 px-8  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
									onClick={() => {
										toast.success('Course Enrolled Successfully 🎉🎉🎉');
									}}
								>
									ENROLL
								</button>
							</div>
						</div>
						{/* ---- */}
						<div className=' w-full lg:w-1/2 rounded-lg overflow-hidden mt-6 sm:mt-0 order-2 lg:order-none flex justify-center'>
							<img className='object-cover object-center w-full max-h-64' src={thumbnail_url} alt='stats' />
						</div>
						{/* 2-sm */}
						<div className='flex lg:hidden items-center justify-center border p-2 w-full md:w-8/12 mx-auto order-3 lg:order-none mt-3 mb-0 md:mb-6'>
							<div className=' w-full  flex flex-col items-center justify-center'>
								<h2 className='font-base lg:font-medium text-lg md:text-xl lg:text-2xl text-gray-900'>{total_student}</h2>
								<p className='leading-relaxed text-sm md:text-base'>Student</p>
							</div>
							<div className='w-full  flex flex-col items-center justify-center'>
								<h2 className='font-base lg:font-medium text-lg md:text-xl lg:text-2xl text-slate-200 bg-red-600 rounded px-2 py-1 mx-8'>{badge}</h2>
							</div>
							<div className='w-full  flex flex-col items-center justify-center'>
								<h2 className='font-base lg:font-medium text-lg md:text-xl lg:text-2xl text-gray-900'>{number}</h2>
								<p className='leading-relaxed text-sm md:text-base'>Ratings</p>
							</div>
						</div>
						{/* 3-sm */}
						<div className='lg:hidden mt-4 mx-auto order-4 lg:order-none'>
							<button
								className='py-3 px-8  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
								onClick={() => {
									toast.success('Course Enrolled Successfully 🎉🎉🎉');
								}}
							>
								ENROLL
							</button>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default CheckList;
