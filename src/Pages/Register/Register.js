import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import * as FAIcons from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const Register = () => {
	const { methodCreateUser, methodUpdateProfile, methodSendEmailVerification, methodSignOut } = useContext(FbaseAuthContext);
	const [error, setError] = useState('');
	const [isDisabled, setIsDisabled] = useState(true);

	const navigate = useNavigate();

	const handlerOnSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const fullname = form.fullname.value;
		const photoUrl = form.photoUrl.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(fullname, email, password, photoUrl);

		// Firebase Auth methods---------------------
		//  for creating a new user with email and password
		if (fullname && email && password && photoUrl) {
			methodCreateUser(email, password)
				.then((userCredential) => {
					// Signed in user
					const user = userCredential.user;
					// Signout user for firebase default behavior of auto login after signup termianted
					handlerOnLogout();
					// 2. for updating user profile---------
					handlerUpdateProfile(fullname, photoUrl);
					handlerVerifyEmail();
					// ------------------------------------

					form.reset();
					console.log(user);
					// ...
					toast.success('Your account has been created successfully. Please verify your email address.');

					navigate('/login');
				})
				.catch((error) => {
					const errorMessage = error.message;
					setError(errorMessage);
					console.error(error);
					// ..
				});
		}
	};

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
	// Email verification
	const handlerVerifyEmail = () => {
		methodSendEmailVerification().then(() => {
			// Email verification sent!
			// ...
		});
	};
	//  for updating the user profile
	const handlerUpdateProfile = (fullname, photoUrl) => {
		methodUpdateProfile(fullname, photoUrl)
			.then(() => {
				// Update successful
				// ...
			})
			.catch((error) => {
				// An error occurred
				// ...
			});
	};

	// Email & Password Validation--------------------
	const handlerOnEmail = (e) => {
		const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

		if (!emailRegEx.test(e.target.value)) {
			setError('Please enter a valid email address');
			return;
		}
		setError('');
	};

	const handlerOnPassword = (e) => {
		if (!/(?=.*[A-Z])/.test(e.target.value)) {
			setError('Password should contain at least one upper case');
			return;
		} else {
			setError('');
		}
		if (!/(?=.*[a-z])/.test(e.target.value)) {
			setError('Password should contain at least one lower case');
			return;
		} else {
			setError('');
		}
		if (!/(?=.*?[0-9])/.test(e.target.value)) {
			setError('Password should contain at least one digit');
			return;
		} else {
			setError('');
		}
		if (!/(?=.*?[!@#$&*~])/.test(e.target.value)) {
			setError('Password should contain at least one Special character');
			return;
		} else {
			setError('');
		}
		if (!/.{8,}/.test(e.target.value)) {
			setError('Password Must be at least 8 characters in length');
			return;
		} else {
			setError('');
		}
		setError('');
	};

	return (
		<>
			{/* Registration Page Container */}
			<div className='registration-container pt-16'>
				<div className='flex flex-wrap w-full'>
					<div className='flex flex-col w-full md:w-1/2'>
						<div className='flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24'>
							<Link to='/register' className='p-4 text-xl font-bold text-white bg-gray-900'>
								Register.
							</Link>
						</div>
						<div className='flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32'>
							<p className='text-3xl text-center'>Welcome.</p>
							<form
								className='flex flex-col pt-3 md:pt-8'
								onSubmit={(e) => {
									handlerOnSubmit(e);
								}}
							>
								<div className='flex flex-col pt-4'>
									<div className='flex relative '>
										<span className=' inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
											<FAIcons.FaUserEdit />
										</span>
										<input
											type='text'
											name='fullname'
											className=' flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
											required
											placeholder='Full Name'
										/>
									</div>
								</div>
								<div className='flex flex-col pt-4'>
									<div className='flex relative '>
										<span className=' inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
											<FAIcons.FaChalkboardTeacher />
										</span>
										<input
											type='text'
											name='photoUrl'
											className=' flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
											required
											placeholder='Photo URL'
										/>
									</div>
								</div>
								<div className='flex flex-col pt-4'>
									<div className='flex relative '>
										<span className=' inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
											<svg width='15' height='15' fill='currentColor' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
												<path d='M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'></path>
											</svg>
										</span>
										<input
											type='email'
											name='email'
											className=' flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
											required
											placeholder='Email'
											onChange={(e) => {
												handlerOnEmail(e);
											}}
										/>
									</div>
								</div>
								<div className='flex flex-col pt-4 mb-12'>
									<div className='flex relative '>
										<span className=' inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
											<svg width='15' height='15' fill='currentColor' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
												<path d='M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z'></path>
											</svg>
										</span>
										<input
											type='password'
											name='password'
											className=' flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
											required
											placeholder='Password'
											onChange={(e) => {
												handlerOnPassword(e);
											}}
										/>
									</div>
									<p className='text-red-600 -mb-6 mt-3 font-semibold text-center'>{error}</p>
								</div>
								<div className=' flex -mt-6'>
									<label className='label cursor-pointer '>
										<input
											type='checkbox'
											className='checkbox checkbox-xs checkbox-black rounded-sm'
											required
											onClick={() => {
												setIsDisabled(!isDisabled);
											}}
										/>
										<span className='label-text ml-2 '>Terms & Conditions</span>
									</label>
								</div>

								<button
									className='w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-gray-900 shadow-md hover:text-whi hover:bg-black focus:outline-none focus:ring-2 rounded-md'
									disabled={isDisabled}
								>
									<span className='w-full'>Submit</span>
								</button>
							</form>
							<div className='pt-12 pb-12 text-center'>
								<p>
									Already have an account?
									<Link to='/login' className='font-semibold underline ml-1'>
										Login
									</Link>
								</p>
							</div>
						</div>
					</div>
					<div className='w-1/2 shadow-2xl'>
						<img className='hidden object-cover w-full h-screen md:block' src='/images/object/9.jpg' alt='Login' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
