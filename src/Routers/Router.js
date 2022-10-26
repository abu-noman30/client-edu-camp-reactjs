import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CheckList from '../Components/CheckList/CheckList';
import CourseDetails from '../Components/CourseDetails/CourseDetails';
import Root from '../Layouts/Root/Root';
import Courses from '../Pages/Courses/Courses';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

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
					return await fetch('http://localhost:5000/all-courses');
				}
			},
			{
				path: 'all-courses/:id',
				element: <CourseDetails />,
				loader: async ({ params }) => {
					return await fetch(`http://localhost:5000/all-courses/${params.id}`);
				}
			},
			{
				path: 'course-enroll/:id',
				element: <CheckList />,
				loader: async ({ params }) => {
					return await fetch(
						`http://localhost:5000/course-enroll/${params.id}`
					);
				}
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
