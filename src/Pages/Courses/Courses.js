import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
	return (
		<>
			{/* Courses Container */}
			<div className='bg-gray-100	pt-8 shadow-lg'>
				<div class='flex flex-col lg:flex-none justify-between w-full lg:w-11/12 mx-auto gap-8 py-6 px-4 md:px-16 lg:px-0  '>
					{/* Sidebar Section */}
					<div class=' w-full lg:w-[16rem] lg:fixed lg:left-16 h-80'>
						<div class=' mt-4 col-span-12 md:col-span-2 lg:col-span-3 flex h-full flex-col justify-between rounded-xl bg-white p-8'>
							<ul class='space-y-2'>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
						</div>
					</div>
					{/* Courses Section */}
					<div class='lg:m-4 w-full lg:w-[58rem] lg:ml-[20rem] bg-white rounded-xl p-2 md:p-4 lg:p-8 md:py-8 px-2 md:px-8 '>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
							{/* Course - 1 */}
							<Link to='/details'>
								<div className='card w-full bg-base-100 shadow-xl shadow-gray-400'>
									<figure className='p-1 rounded-lg'>
										<img
											src='https://placeimg.com/400/225/arch'
											alt='Shoes'
											className='rounded-lg'
										/>
									</figure>
									<div className='card-body'>
										<h2 className='card-title -mt-7'>
											Shoes!
											<div className='badge badge-primary'>NEW</div>
										</h2>
										<p>Description</p>
										<p>Instructor</p>
										<div className='card-actions justify-evenly'>
											<span>ratings</span>
											<span>icons</span>
											<span>student</span>
										</div>
									</div>
								</div>
							</Link>
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
