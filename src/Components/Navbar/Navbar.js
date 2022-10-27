import React, { useContext, useState } from 'react';
import * as FAIcons from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { currentUser, methodSignOut } = useContext(FbaseAuthContext);

	// User logout
	const handlerOnLogout = () => {
		methodSignOut()
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
	};
	return (
		<>
			<div className='px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
				<div className='relative flex items-center justify-between z-2'>
					<NavLink to='/' aria-label='eduCamp' title='Company' className='inline-flex items-center'>
						<span>
							<img src='Images/logo.png' alt='logo' className='w-14 h-14' />
						</span>
						<span className='ml-2 text-xl lg:text-3xl font-bold tracking-wide text-gray-800 '>eduCamp</span>
					</NavLink>
					<ul className='hidden items-center space-x-8 lg:flex'>
						<li>
							<NavLink to='/home' aria-label='Home' title='Home' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
								<span className='flex items-center justify-start hover:bg-slate-100 rounded-lg p-2 '>
									<span>
										<FAIcons.FaHome className='mr-2' />
									</span>
									<span>Home</span>
								</span>
							</NavLink>
						</li>
						<li>
							<NavLink to='/courses' aria-label='Courses' title='Courses' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
								<span className='flex items-center justify-start hover:bg-slate-100 rounded-lg p-2'>
									<span>
										<FAIcons.FaBookReader className='mr-2' />
									</span>
									<span>Courses</span>
								</span>
							</NavLink>
						</li>
						<li>
							<NavLink to='/blog' aria-label='Blog' title='Blog' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
								<span className='flex items-center justify-start hover:bg-slate-100 rounded-lg p-2'>
									<span>
										<FAIcons.FaCommentAlt className='mr-2' />
									</span>
									<span>Blog</span>
								</span>
							</NavLink>
						</li>
						<li>
							<NavLink to='/faq' aria-label='FAQ' title='FAQ' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
								<span className='flex items-center justify-start hover:bg-slate-100 rounded-lg p-2 '>
									<span>
										<FAIcons.FaQuestion className='mr-2' />
									</span>
									<span>FAQ</span>
								</span>
							</NavLink>
						</li>
					</ul>
					<ul className='hidden items-center space-x-8 lg:flex'>
						{/* Dark/Light Mood Toggle Button */}
						<li>
							<input type='checkbox' className='toggle mr-2' title='Dark/Light' />
						</li>
						<li>
							{currentUser?.emailVerified ? (
								<>
									<NavLink to='/login'>
										<button
											className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-900 focus:shadow-outline focus:outline-none'
											aria-label='Logout'
											title='Logout'
											onClick={() => {
												handlerOnLogout();
											}}
										>
											LOGOUT
										</button>
									</NavLink>
								</>
							) : (
								<>
									<NavLink
										to='/login'
										className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-900 focus:shadow-outline focus:outline-none'
										aria-label='Login'
										title='Login'
									>
										Login
									</NavLink>
								</>
							)}
						</li>
						{/* Profile Container */}
						{currentUser?.emailVerified ? (
							<NavLink to='/profile' className='nav-link'>
								<li className='tooltip tooltip-bottom' data-tip={currentUser.displayName}>
									<button className='border-2 border-blue-900 border-spacing-2 p-2 rounded-lg hover:bg-slate-100 hover:rounded-lg hover:p-2'>
										<img src={currentUser.photoURL} alt='' className='rounded-circle me-2' style={{ width: '1.5rem', height: '1.5rem' }} />
									</button>
								</li>
							</NavLink>
						) : (
							<li>
								<button className='border-2 border-blue-900 border-spacing-2 p-2 rounded-lg hover:bg-slate-100 hover:rounded-lg hover:p-2'>
									<FAIcons.FaUserLock />
								</button>
							</li>
						)}
					</ul>
					<div className='lg:hidden'>
						<button aria-label='Open Menu' title='Open Menu' className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50' onClick={() => setIsMenuOpen(true)}>
							<svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
								<path fill='currentColor' d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z' />
								<path fill='currentColor' d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z' />
								<path fill='currentColor' d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z' />
							</svg>
						</button>
						{isMenuOpen && (
							<div className='absolute top-0 left-0 w-full z-10'>
								<div className='p-5 bg-white border rounded shadow-sm'>
									<div className='flex items-center justify-between mb-4'>
										<div>
											<NavLink to='/' aria-label='Company' title='Company' className='inline-flex items-center'>
												<span>
													<img src='Images/logo.png' alt='logo' className='w-16 h-1/2' />
												</span>
												<span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>eduCamp</span>
											</NavLink>
										</div>
										<div className='flex items-center justify-end'>
											{/* Dark/Light Toggle Button */}
											<div className=''>
												<input type='checkbox' className='toggle toggle-sm ' title='Dark/Light' />
											</div>
											<button
												aria-label='Close Menu'
												title='Close Menu'
												className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline ml-4 md:ml-16'
												onClick={() => setIsMenuOpen(false)}
											>
												<svg className='w-5 text-gray-600 ' viewBox='0 0 24 24'>
													<path
														fill='currentColor'
														d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
													/>
												</svg>
											</button>
										</div>
									</div>
									<nav>
										<ul className='space-y-4 grid '>
											<li>
												<NavLink to='/home' aria-label='Home' title='Home' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
													<span className='flex items-center justify-start'>
														<span>
															<FAIcons.FaHome className='mr-2' />
														</span>
														<span>Home</span>
													</span>
												</NavLink>
											</li>
											<li>
												<NavLink to='/courses' aria-label='Courses' title='Courses' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
													<span className='flex items-center justify-start'>
														<span>
															<FAIcons.FaBookReader className='mr-2' />
														</span>
														<span>Courses</span>
													</span>
												</NavLink>
											</li>
											<li>
												<NavLink to='/blog' aria-label='Blog' title='Blog' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
													<span className='flex items-center justify-start'>
														<span>
															<FAIcons.FaCommentAlt className='mr-2' />
														</span>
														<span>Blog</span>
													</span>
												</NavLink>
											</li>
											<li>
												<NavLink to='/faq' aria-label='FAQ' title='FAQ' className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'>
													<span className='flex items-center justify-start'>
														<span>
															<FAIcons.FaQuestion className='mr-2' />
														</span>
														<span>FAQ</span>
													</span>
												</NavLink>
											</li>

											<li>
												{currentUser?.emailVerified ? (
													<>
														<NavLink to='/login'>
															<button
																className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-900 focus:shadow-outline focus:outline-none w-full md:w-1/2 md:block mx-auto'
																aria-label='Logout'
																title='Logout'
																onClick={() => {
																	handlerOnLogout();
																}}
															>
																LOGOUT
															</button>
														</NavLink>
													</>
												) : (
													<>
														<NavLink
															to='/login'
															className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-900 focus:shadow-outline focus:outline-none'
															aria-label='Login'
															title='Login'
														>
															Login
														</NavLink>
													</>
												)}
											</li>
											<div className='flex items-center justify-center'>
												{/* sm - profile container */}
												{currentUser?.emailVerified ? (
													<NavLink to='/profile' className='nav-link'>
														<li className='tooltip tooltip-bottom' data-tip={currentUser.displayName}>
															<button className='border-2 border-blue-900 border-spacing-2 p-2 rounded-lg hover:bg-slate-100 hover:rounded-lg hover:p-2'>
																<img src={currentUser.photoURL} alt='' className='rounded-circle me-2' style={{ width: '1.5rem', height: '1.5rem' }} />
															</button>
														</li>
													</NavLink>
												) : (
													<li>
														<button className='border-2 border-blue-900 border-spacing-2 p-2 rounded-lg hover:bg-slate-100 hover:rounded-lg hover:p-2'>
															<FAIcons.FaUserLock />
														</button>
													</li>
												)}
											</div>
										</ul>
									</nav>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
