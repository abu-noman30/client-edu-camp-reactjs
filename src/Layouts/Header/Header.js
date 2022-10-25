import React from 'react';

const Header = () => {
	return (
		<div>
			{/* Header Container */}
			<div className='bg-[url(https://img.freepik.com/premium-vector/abstract-modern-white-grey-gradient-geometric-pattern-background_120819-595.jpg?w=1060)] bg-no-repeat object-fill object-center mt-10 shadow-lg rounded-2xl'>
				<div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-ur bg-ur'>
					<div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
						<div>
							<p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
								Brand new
							</p>
						</div>
						<h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
							<span className='relative inline-block'>
								<svg
									viewBox='0 0 52 24'
									fill='currentColor'
									className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
								>
									<defs>
										<pattern
											id='9a29985a-fc16-419b-ae53-1670f5ca4491'
											x='0'
											y='0'
											width='.135'
											height='.30'
										>
											<circle cx='1' cy='1' r='.7' />
										</pattern>
									</defs>
									<rect
										fill='url(#9a29985a-fc16-419b-ae53-1670f5ca4491)'
										width='52'
										height='24'
									/>
								</svg>
								<span className='relative'>eduCamp</span>
								<br />
							</span>{' '}
							is a new way to learn online with live Courses. Join us today! 🎉
						</h2>
						<p className='text-base text-gray-700 md:text-lg'>
							We are a community of teachers and students who are passionate
							about learning and teaching. We are here to help you learn and
							grow.
						</p>
					</div>
					<div className='grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto'>
						<img
							className='object-fill w-full h-56 rounded shadow-lg'
							src='https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=900&t=st=1666635014~exp=1666635614~hmac=11e90bad87edaafaad789221699e9d3d20fdfd799f02332b685d3a127ea3ba21?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
							alt=''
						/>
						<img
							className='object-fill w-full h-56 rounded shadow-lg'
							src='https://img.freepik.com/premium-vector/programming-code-icon-made-with-binary-code-coding-hacker-matrix-background-with-digits-1-0_127544-1141.jpg?w=1060?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
							alt=''
						/>
						<img
							className='object-fill w-full h-56 rounded shadow-lg'
							src='https://img.freepik.com/free-vector/digital-technology-face-artificial-intelligence_1017-21770.jpg?w=1060&t=st=1666636402~exp=1666637002~hmac=4347ab7a5b598287a083e16d86ad50360568cf07ec1fecba9d77cb71b71ff200?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500'
							alt=''
						/>
						<img
							className='object-fill w-full h-56 rounded shadow-lg'
							src='https://img.freepik.com/free-vector/software-development-isometric-landing-page-website-program-coding-cross-platform-algorithm-programming-languages-interface-computer-screen-technology-process-app-creation-3d-banner_107791-4329.jpg?w=900&t=st=1666636425~exp=1666637025~hmac=da35efa852d24b4c7b768c5e57386cc04aabf97a4c4ade9c18b26075c0516990?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260'
							alt=''
						/>
					</div>
					<div className='flex items-center sm:justify-center'>
						<a
							href='/'
							className='inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-blue-900 transition duration-200 rounded shadow-md border-2 border-blue-900 bg-white hover:bg-blue-900 
            hover:text-white focus:shadow-outline focus:outline-none'
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
