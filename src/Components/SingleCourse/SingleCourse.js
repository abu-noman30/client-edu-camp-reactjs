import React from 'react';
import * as FAIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleCourse = (props) => {
	const { name, student, img, description, instructor, rating } =
		props.singleCourse;
	return (
		<>
			{/* Single Course Card Container */}
			<div className=''>
				<Link to='/details'>
					<div className='card w-full bg-base-100 shadow-xl shadow-gray-400'>
						<figure className='p-1 rounded-lg'>
							<img
								src={img}
								alt='CourseImage'
								className='rounded-lg w-full h-[10rem]'
							/>
						</figure>
						<div className='card-body px-4'>
							<h2 className='card-title -mt-7'>{name}</h2>
							<p className='break-all'>
								{description.length > 120
									? description.slice(0, 120) + '...more'
									: description}
							</p>
							<p className='font-semibold flex items-center gap-1'>
								<FAIcons.FaUserTie />
								{instructor}
							</p>
							<div className='card-actions justify-between'>
								<span className='font-bold text-red-700'>{rating}</span>
								<span className='font-semibold flex items-center gap-1'>
									<FAIcons.FaUsers />({student})
								</span>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</>
	);
};

export default SingleCourse;
