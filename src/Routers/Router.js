import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CheckList from '../Components/CheckList/CheckList';
import CourseDetails from '../Components/CourseDetails/CourseDetails';
import Root from '../Layouts/Root/Root';
import Blog from '../Pages/Blog/Blog';
import Courses from '../Pages/Courses/Courses';
import Error from '../Pages/Error/Error';
import Faq from '../Pages/Faq/Faq';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from './Private/PrivateRouter';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root></Root>,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'home',
				element: <Home />
			},
			{
				path: 'courses',
				element: <Courses />,
				loader: async () => {
					return await fetch('https://server-edu-camp-reactjs.vercel.app/all-courses');
				}
			},
			{
				path: 'all-courses/:id',
				element: <CourseDetails />,
				loader: async ({ params }) => {
					return await fetch(`https://server-edu-camp-reactjs.vercel.app/all-courses/${params.id}`);
				}
			},
			{
				path: 'course-enroll/:id',
				element: (
					<PrivateRoute>
						<CheckList />
					</PrivateRoute>
				),
				loader: async ({ params }) => {
					return await fetch(`https://server-edu-camp-reactjs.vercel.app/course-enroll/${params.id}`);
				}
			},
			{
				path: 'blog',
				element: <Blog />
			},
			{
				path: 'faq',
				element: <Faq />
			},
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'register',
				element: <Register />
			}
		]
	}
]);

export default router;
