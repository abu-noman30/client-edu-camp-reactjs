import React from 'react';

const Faq = () => {
	return (
		<>
			{/* Frequently Asked Question */}
			<div className='faq-container'>
				<div className='bg-lightblue pt-24 -mb-8 px-4'>
					<div className='mx-auto max-w-6xl flex flex-col md:flex-row'>
						<h2 className='mr-8 w-full md:w-1/3 text-3xl font-extrabold leading-9'>Frequently-asked questions</h2>
						<dl className='w-full md:w-2/3'>
							<dt className='mb-4'>
								<h3 className='text-xl font-semibold'>What do eduCamp courses include?</h3>
							</dt>
							<dd className='mb-16'>
								<p>
									Each eduCamp course is created, owned and managed by the instructor(s). The foundation of each eduCamp course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types
									of practice activities, as a way to enhance the learning experience of students.
								</p>
							</dd>
							<dt className='mb-4'>
								<h3 className='text-xl font-semibold'>How do I take a eduCamp course?</h3>
							</dt>
							<dd className='mb-16'>
								<p>
									eduCamp courses are entirely on-demand and they can be accessed from several different devices and platforms, including a desktop, laptop, and our mobile.
									<br />
									After you enroll in a course, you can access it by clicking on the course link you will receive in your confirmation email (provided you’re logged into your eduCamp account).
								</p>
							</dd>
							<dt className='mb-4'>
								<h3 className='text-xl font-semibold'>Will I continue to have access to the course even after I complete it?</h3>
							</dt>
							<dd className='mb-16'>
								<p>
									Yes. You will continue to have access to the course after you complete it, provided that your account’s in good standing, and eduCamp have a license to the course. So, if you wish to review specific content in the course after you
									finish it, or take it all over again, you can.
								</p>
							</dd>
							<dt className='mb-4'>
								<h3 className='text-xl font-semibold'>Do free courses offer lifetime access?</h3>
							</dt>
							<dd className='mb-16'>
								<p>Yes. Students also receive lifetime access to free courses.</p>
							</dd>
						</dl>
					</div>
				</div>
			</div>
		</>
	);
};

export default Faq;
