import React, { createRef } from 'react';
import * as FAIcons from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf';

const targetRef = createRef();

const options = {
	orientation: 'landscape',
	unit: 'in',
	format: [10.6, 10.2]
};

const CourseDetails = () => {
	const loaderData = useLoaderData();
	const {
		course_name,
		thumbnail_url,
		instructor: { name, published_date, course_duration },
		will_learn,
		course_description,
		requirements,
		_id
	} = loaderData;
	return (
		<>
			{/* Course Details Container */}
			<div className='course-details pt-16 bg-white '>
				{/* Title Container */}
				<div className='w-10/12 mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between mb-5'>
					<h1 className='text-3xl font-bold text-center lg:text-left mb-4 mt-4 mg:mt-0'>
						<FAIcons.FaUserGraduate />
						{course_name}
					</h1>
					<ReactToPdf
						targetRef={targetRef}
						filename={`${course_name}_details.pdf`}
						options={options}
						// x={0.5}
						// y={0.5}
						// scale={0.8}
					>
						{({ toPdf }) => (
							<button className='flex items-center p-2 rounded bg-gray-700 hover:bg-gray-800 text-white border-blue-700 mx-1' onClick={toPdf}>
								<div className='mx-1'>
									<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z'
										></path>
									</svg>
								</div>
								<span className='mx-2'>Print</span>
							</button>
						)}
					</ReactToPdf>
				</div>

				{/* Course Details */}

				<div ref={targetRef} className='max-w-5xl overflow-hidden bg-gray-200 rounded-lg shadow-md w-10/11 mx-auto '>
					<img className='object-fill w-full h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px]' src={thumbnail_url} alt='CourseDetails' />

					<div className='p-6'>
						<h1 className='text-3xl font-bold text-center lg:text-left mb-4 mt-4 mg:mt-0'>
							<FAIcons.FaUserGraduate />
							{course_name}
						</h1>
						<div>
							<span className='text-xs font-medium text-blue-600  '>What we will learn?</span>
							<p className='mt-2 text-md text-gray-600 '>{will_learn}</p>
							<h2 className='block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline'>Description:</h2>
							<p className='mt-2 text-sm text-gray-600 break-all '>{course_description}</p>
						</div>

						<div className=''>
							<h2 className='block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline mb-4'>Requirements:</h2>
							<ul className='pl-4'>
								{requirements.map((requirement, index) => (
									<li className='text-sm text-gray-600 list-decimal font-semibold ' key={index}>
										{requirement}
									</li>
								))}
							</ul>
						</div>
						<div className='mt-4'>
							<div className='flex items-center justify-between'>
								<div className='flex items-center'>
									<img className='object-cover h-10 rounded-full' src='https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60' alt='Avatar' />
									<Link to='/' className='mx-2 font-semibold text-gray-700 ' tabIndex='0' role='link'>
										{name}
									</Link>
									<span className='mx-1 text-xs text-gray-600 '>{published_date}</span>
								</div>
								<p>
									<span className='font-bold underline '>Duration:</span>
									<span className='font-bold'> {course_duration}</span>
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Premium button */}
				<div className='w-10/12 mx-auto px-4 flex items-center justify-center lg:justify-end mb-5 mt-10'>
					<Link to={`/course-enroll/${_id}`}>
						<button className='px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'>
							<div className='flex items-center '>
								<span className='mr-2'>
									<FAIcons.FaLock />
								</span>
								<span> Get Premium Access</span>
							</div>
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default CourseDetails;
