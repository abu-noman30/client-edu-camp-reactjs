import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
	return (
		<>
			{/* Courses Container */}
			<div className='bg-gray-100	py-8 shadow-lg'>
				<div class='grid grid-cols-12 w-11/12 mx-auto gap-8 py-8 '>
					{/* Sidebar Section */}
					<div class='col-span-12 md:col-span-3 lg:col-span-3'>
						<div class=' mt-4 col-span-12 md:col-span-2 lg:col-span-3 flex h-full flex-col justify-between rounded-xl bg-white p-8'>
							<ul class='space-y-2'>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>

							<Link
								to='#'
								class='flex font-medium text-gray-600 hover:text-green-400 p-2 rounded-lg hover:bg-green-100'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth='{1.5}'
									stroke='currentColor'
									class='mr-3 h-6 w-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
									/>
								</svg>
								Logout
							</Link>
						</div>
					</div>
					{/* Courses Section */}
					<div class='m-4 col-span-12 md:col-span-10 lg:col-span-9 p-8 bg-white rounded-xl flex justify-center items-center h-full'>
						<div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
							{/* Course - 1 */}
							<div className='card w-full bg-base-100 shadow-xl'>
								<figure>
									<img src='https://placeimg.com/400/225/arch' alt='Shoes' />
								</figure>
								<div className='card-body'>
									<h2 className='card-title'>
										Shoes!
										<div className='badge badge-secondary'>NEW</div>
									</h2>
									<p>If a dog chews shoes whose shoes does he choose?</p>
									<div className='card-actions justify-end'>
										<div className='badge badge-outline'>Fashion</div>
										<div className='badge badge-outline'>Products</div>
									</div>
								</div>
							</div>
							{/* Course - 2 */}
							<div className='card w-full bg-base-100 shadow-xl'>
								<figure>
									<img src='https://placeimg.com/400/225/arch' alt='Shoes' />
								</figure>
								<div className='card-body'>
									<h2 className='card-title'>
										Shoes!
										<div className='badge badge-secondary'>NEW</div>
									</h2>
									<p>If a dog chews shoes whose shoes does he choose?</p>
									<div className='card-actions justify-end'>
										<div className='badge badge-outline'>Fashion</div>
										<div className='badge badge-outline'>Products</div>
									</div>
								</div>
							</div>
							{/* Course - 3 */}
							<div className='card w-full bg-base-100 shadow-xl'>
								<figure>
									<img src='https://placeimg.com/400/225/arch' alt='Shoes' />
								</figure>
								<div className='card-body'>
									<h2 className='card-title'>
										Shoes!
										<div className='badge badge-secondary'>NEW</div>
									</h2>
									<p>If a dog chews shoes whose shoes does he choose?</p>
									<div className='card-actions justify-end'>
										<div className='badge badge-outline'>Fashion</div>
										<div className='badge badge-outline'>Products</div>
									</div>
								</div>
							</div>
							{/* Course - 4 */}
							<div className='card w-full bg-base-100 shadow-xl'>
								<figure>
									<img src='https://placeimg.com/400/225/arch' alt='Shoes' />
								</figure>
								<div className='card-body'>
									<h2 className='card-title'>
										Shoes!
										<div className='badge badge-secondary'>NEW</div>
									</h2>
									<p>If a dog chews shoes whose shoes does he choose?</p>
									<div className='card-actions justify-end'>
										<div className='badge badge-outline'>Fashion</div>
										<div className='badge badge-outline'>Products</div>
									</div>
								</div>
							</div>
							{/* Course - 5 */}
							<div className='card w-full bg-base-100 shadow-xl'>
								<figure>
									<img src='https://placeimg.com/400/225/arch' alt='Shoes' />
								</figure>
								<div className='card-body'>
									<h2 className='card-title'>
										Shoes!
										<div className='badge badge-secondary'>NEW</div>
									</h2>
									<p>If a dog chews shoes whose shoes does he choose?</p>
									<div className='card-actions justify-end'>
										<div className='badge badge-outline'>Fashion</div>
										<div className='badge badge-outline'>Products</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Courses;
