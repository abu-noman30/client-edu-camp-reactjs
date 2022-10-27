import React, { useContext } from 'react';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const Profile = () => {
	const { currentUser } = useContext(FbaseAuthContext);
	console.log(currentUser);
	return (
		<>
			{/* Profile Container */}
			<div className='profile-container'>
				<div className='flex h-[28rem] w-full items-center justify-center mt-4 -mb-8'>
					<div className='w-full rounded-xl p-12 shadow-2xl shadow-blue-200 md:w-8/12 lg:w-6/12 bg-white'>
						<div className='grid grid-cols-1 gap-6 lg:grid-cols-12'>
							<div className='grid-cols-1 lg:col-span-3'>
								<div className='mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-blue-100 p-4'>
									<img src={currentUser.photoURL} alt='' />
								</div>
							</div>

							<div className='col-span-1 lg:col-span-9'>
								<div className='text-center lg:text-left'>
									<h2 className='text-2xl font-bold text-zinc-700'>{currentUser.displayName}</h2>
									<p className='mt-2 font-semibold text-blue-600'>
										<span className='text-gray-600'>Email: </span>
										<span className='link'>{currentUser.email}</span>
									</p>
									{currentUser.emailVerified === true && <p className='mt-4 text-red-800'>Verified</p>}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
