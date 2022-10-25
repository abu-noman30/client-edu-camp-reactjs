import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Router';

function App() {
	return (
		<div className='App'>
			<h1 className='text-center text-5xl'>Hello</h1>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
