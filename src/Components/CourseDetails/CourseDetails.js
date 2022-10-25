import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
	return (
		<>
			{/* Course Details Container */}
			<div className='course-details pt-16 bg-white '>
				{/* Title Container */}
				<div className='w-10/12 mx-auto px-4 flex items-center justify-between mb-5'>
					<h1 className='text-3xl font-bold '>Android Development</h1>
					<button class='flex items-center p-2 rounded bg-gray-700 hover:bg-gray-800 text-white border-blue-700 mx-1'>
						<div class='mx-1'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='h-4 w-4'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								stroke-width='2'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z'
								></path>
							</svg>
						</div>
						<span class='mx-2'>Print</span>
					</button>
				</div>
				<div class='max-w-5xl overflow-hidden bg-gray-200 rounded-lg shadow-md w-10/11 mx-auto '>
					<img
						class='object-cover w-full h-64'
						src='https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
						alt='Article'
					/>

					<div class='p-6'>
						<div>
							<span class='text-xs font-medium text-blue-600  '>
								What we will learn?
							</span>
							<p class='mt-2 text-sm text-gray-600 '>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Molestie parturient et sem ipsum volutpat vel. Natoque sem et
								aliquam mauris egestas quam volutpat viverra. In pretium nec
								senectus erat. Et malesuada lobortis.
							</p>
							<h2 class='block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline'>
								Description:
							</h2>
							<p class='mt-2 text-sm text-gray-600 '>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Molestie parturient et sem ipsum volutpat vel. Natoque sem et
								aliquam mauris egestas quam volutpat viverra. In pretium nec
								senectus erat. Et malesuada lobortis.
							</p>
						</div>

						<div className=''>
							<h2 class='block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline'>
								Course content:
							</h2>
							<p class='mt-2 text-sm text-gray-600 '>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Molestie parturient et sem ipsum volutpat vel. Natoque sem et
								aliquam mauris egestas quam volutpat viverra. In pretium nec
								senectus erat. Et malesuada lobortis.
							</p>
						</div>
						<div className=''>
							<h2 class='block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline'>
								Requirements:
							</h2>
							<p class='mt-2 text-sm text-gray-600 '>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Molestie parturient et sem ipsum volutpat vel. Natoque sem et
								aliquam mauris egestas quam volutpat viverra. In pretium nec
								senectus erat. Et malesuada lobortis.
							</p>
						</div>
						<div class='mt-4'>
							<div class='flex items-center justify-between'>
								<div class='flex items-center'>
									<img
										class='object-cover h-10 rounded-full'
										src='https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60'
										alt='Avatar'
									/>
									<Link
										to='/'
										class='mx-2 font-semibold text-gray-700 '
										tabindex='0'
										role='link'
									>
										Jone Doe
									</Link>
									<span class='mx-1 text-xs text-gray-600 '>21 SEP 2015</span>
								</div>
								<p>
									<span>Duration</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CourseDetails;
