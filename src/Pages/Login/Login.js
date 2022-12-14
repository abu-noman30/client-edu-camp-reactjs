import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const Login = () => {
	const { methodSignIn, methodGoogleSignIn, methodSignOut, methodGithubSignIn, methodSendPasswordResetEmail } = useContext(FbaseAuthContext);
	const [error, setError] = useState('');
	const [modalError, setModalError] = useState('');
	const [resetEmail, setResetEmail] = useState('');
	const navigate = useNavigate();
	const location = useLocation();

	let from = location.state?.from?.pathname || '/';
	console.log(from);

	const handlerOnSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		// Firebase Auth methods---------------------
		//  for sign in user with email and password
		methodSignIn(email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				form.reset();
				setError('');
				if (user && user.uid) {
					if (from === '/' || from === '/home') {
						toast.success('Login Successful');
						navigate('/home');
					} else {
						toast.success('Login Successful');
						navigate(from, { replace: true });
					}
				} else {
					// toast.error('Please verify your Email!');
					handlerOnLogout();
				}
				console.log(user);
				// ...
			})

			.catch((error) => {
				const errorMessage = error.message;
				setError(errorMessage);

				console.error(error);
				// ..
			});
	};

	// Reset Password using email------
	const handlerModalResetEmail = (e) => {
		const email = e.target.value;
		setResetEmail(email);
	};
	// console.log(resetEmail);
	const handlerResetPassword = () => {
		methodSendPasswordResetEmail(resetEmail)
			.then(() => {
				// Email sent.
				if (resetEmail === '' || resetEmail === null) {
					toast.error('Please enter your email!');
				} else {
					setResetEmail('');
					toast.success(' Email sent. Please check your email for password reset link');
				}
			})
			.catch((error) => {
				const errorMessage = error.message;
				setModalError(errorMessage);
				console.error(error);
			});
	};

	//  for signing in with google------------
	const handlerGoogleSignIn = () => {
		methodGoogleSignIn()
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const user = result.user;
				console.log(user);
				if (user && user.uid) {
					if (from === '/' || from === '/home') {
						toast.success('Login Successful');
						navigate('/');
					} else {
						toast.success('Login Successful');
						navigate(from, { replace: true });
					}
				} else {
					// toast.error('Please verify your Email! A verification link has been sent to your email.');
					handlerOnLogout();
				}
				console.log(user);
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorMessage = error.message;
				setError(errorMessage);
				console.error(error);
				// ...
			});
	};

	// for signing in with github------------
	const handlerGithubSignIn = () => {
		methodGithubSignIn()
			.then((result) => {
				// This gives you a GitHub Access Token. You can use it to access the GitHub API.
				const user = result.user;
				if (user && user.uid) {
					if (from === '/' || from === '/home') {
						toast.success('Login Successful');
						navigate('/');
					} else {
						toast.success('Login Successful');
						navigate(from, { replace: true });
					}
				} else {
					// toast.error('Please verify your Email! A verification link has been sent to your email.');
					handlerOnLogout();
				}

				console.log(user);
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorMessage = error.message;
				setError(errorMessage);
				console.error(error);
				// ...
			});
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

	return (
		<>
			{/* Login Container */}
			<div className='pt-24'>
				<div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-xl  lg:max-w-4xl'>
					<div className='hidden bg-cover lg:block lg:w-1/2 bg-[url(https://img.freepik.com/free-vector/account-concept-illustration_114360-399.jpg?w=740&t=st=1666865503~exp=1666866103~hmac=50800489710ade095fbf25d28a2dafb14272e2859f24b3c00efc5fc8f0e25184)]'></div>

					<div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
						<div className='flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-md shadow-slate-300  sm:px-6 md:px-8 lg:px-10'>
							<div className='self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl '>Login To Your Account</div>
							<div className='flex gap-4 item-center'>
								<button
									className='py-2 px-4 flex justify-center items-center  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
									onClick={() => {
										handlerGithubSignIn();
									}}
								>
									<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' className='mr-2' viewBox='0 0 1792 1792'>
										<path d='M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z'></path>
									</svg>
									GitHub
								</button>
								<button
									className='py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
									onClick={() => {
										handlerGoogleSignIn();
									}}
								>
									<svg width='20' height='20' fill='currentColor' className='mr-2' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
										<path d='M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z'></path>
									</svg>
									Google
								</button>
							</div>
							<p className='text-red-600 -mb-6 mt-3 font-semibold text-center'>{error}</p>
							<div className='mt-8'>
								<form
									autoComplete='off'
									onSubmit={(e) => {
										handlerOnSubmit(e);
									}}
								>
									<div className='flex flex-col mb-2'>
										<div className='flex relative '>
											<span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
												<svg width='15' height='15' fill='currentColor' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
													<path d='M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'></path>
												</svg>
											</span>
											<input
												type='email'
												name='email'
												className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
												placeholder='Your email'
												required
											/>
										</div>
									</div>
									<div className='flex flex-col mb-6'>
										<div className='flex relative '>
											<span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm'>
												<svg width='15' height='15' fill='currentColor' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
													<path d='M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z'></path>
												</svg>
											</span>
											<input
												type='password'
												name='password'
												className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
												placeholder='Your password'
												required
											/>
										</div>
									</div>

									<div className='flex w-full'>
										<button className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '>
											Login
										</button>
									</div>
								</form>
							</div>
							<div className='flex items-center justify-center mt-2 '>
								<div className='flex items-center justify-evenly'>
									{/* Modal Trigger Button */}
									<label htmlFor='my-modal-3' className='inline-flex text-xs font-thin text-gray-500 sm:text-sm  hover:text-gray-700 link'>
										Forgot Your Password?
									</label>
									{/* ______________ */}
								</div>
							</div>
							<div className='flex items-center justify-center mt-6'>
								<Link to='/register' className='inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700  '>
									<span className='ml-2'>
										You don&#x27;t have an account? <span className='underline underline-offset-2 text-blue-600 font-bold ml-2'>Sign Up</span>
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/*  */}
			{/* Modal Container */}
			<input type='checkbox' id='my-modal-3' className='modal-toggle' />
			<div className='modal '>
				<div className='modal-box relative rounded shadow-2xl '>
					<div className=' p-8 border shadow-inner shadow-blue-200'>
						<label htmlFor='my-modal-3' className='btn btn-sm bg-blue-800 hover:bg-blue-700 absolute right-2 top-2'>
							???
						</label>
						<h3 className='text-lg font-bold underline underline-offset-2 italic'>Enter Your Email:</h3>
						<p className='text-red-600 font-semibold text-center py-4'>{modalError}</p>
						<div className='flex flex-col mb-5'>
							<div className='flex relative '>
								<span className='rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-blue-300 text-gray-500 shadow-sm text-sm'>
									<svg width='15' height='15' fill='currentColor' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
										<path d='M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z'></path>
									</svg>
								</span>
								<input
									type='email'
									className=' rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
									placeholder='Your email'
									onChange={(e) => {
										handlerModalResetEmail(e);
									}}
								/>
							</div>
						</div>

						<div className='modal-action'>
							<label
								htmlFor='my-modal-3'
								className='py-2 px-6 rounded bg-blue-700 hover:bg-blue-600 text-white border-blue-800 mx-1'
								onClick={() => {
									handlerResetPassword();
								}}
							>
								Confirm
							</label>
						</div>
					</div>
				</div>
			</div>
			{/* ------------- */}
		</>
	);
};

export default Login;
