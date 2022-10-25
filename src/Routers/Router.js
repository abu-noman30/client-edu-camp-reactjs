import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root/Root';
import Courses from '../Pages/Courses/Courses';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import React from 'react';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root></Root>,
		errorElement: <Error />,
		Children: [
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
			}
		]
	}
]);

export default router;
