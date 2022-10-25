import React from 'react';
import * as FAIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
	return (
		<>
			{/* Course Details Container */}
			<div className='course-details pt-16 bg-white '>
				{/* Title Container */}
				<div className='w-10/12 mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between mb-5'>
					<h1 className='text-3xl font-bold text-center lg:text-left mb-4 mt-4 mg:mt-0'>
						Android Development
					</h1>
					<button className='flex items-center p-2 rounded bg-gray-700 hover:bg-gray-800 text-white border-blue-700 mx-1'>
						<div className='mx-1'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-4 w-4'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth='2'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z'
								></path>
							</svg>
						</div>
						<span className='mx-2'>Print</span>
					</button>
				</div>

				{/* Course Details */}
				<div className='max-w-5xl overflow-hidden bg-gray-200 rounded-lg shadow-md w-10/11 mx-auto '>
					<img
						className='object-cover w-full h-64'
						src='https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
						alt='Article'
					/>

					<div className='p-6'>
						<div>
							<span className='text-xs font-medium text-blue-600  '>
								What we will learn?
							</span>
							<p className='mt-2 text-sm text-gray-600 '>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Molestie parturient et sem ipsum volutpat vel. Natoque sem et
								aliquam mauris egestas quam volutpat viverra. In pretium nec
								senectus erat. Et malesuada lobortis.
							</p>
							<h2 className='block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline'>
								Description:
							</h2>
							<p className='mt-2 text-sm text-gray-600 '>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Molestie parturient et sem ipsum volutpat vel. Natoque sem et
								aliquam mauris egestas quam volutpat viverra. In pretium nec
								senectus erat. Et malesuada lobortis.
							</p>
						</div>

						<div className=''>
							<h2 className='block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline'>
								Requirements:
							</h2>
							<p className='mt-2 text-sm text-gray-600 '>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Molestie parturient et sem ipsum volutpat vel. Natoque sem et
								aliquam mauris egestas quam volutpat viverra. In pretium nec
								senectus erat. Et malesuada lobortis.
							</p>
						</div>
						<div className='mt-4'>
							<div className='flex items-center justify-between'>
								<div className='flex items-center'>
									<img
										className='object-cover h-10 rounded-full'
										src='https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60'
										alt='Avatar'
									/>
									<Link
										to='/'
										className='mx-2 font-semibold text-gray-700 '
										tabIndex='0'
										role='link'
									>
										Jone Doe
									</Link>
									<span className='mx-1 text-xs text-gray-600 '>
										21 SEP 2015
									</span>
								</div>
								<p>
									<span>Duration</span>
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Premium button */}
				<div className='w-10/12 mx-auto px-4 flex items-center justify-center lg:justify-end mb-5 mt-10'>
					<button className='px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
						<div className='flex items-center '>
							<span className='mr-2'>
								<FAIcons.FaLock />
							</span>
							<span> Get Premium Access</span>
						</div>
					</button>
				</div>
			</div>
		</>
	);
};

export default CourseDetails;
