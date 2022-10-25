import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
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
				element: <Courses />
			},
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'register',
				element: <Register />
			},
			{
				path: 'details',
				element: <CourseDetails />
			}
		]
	}
]);

export default router;
