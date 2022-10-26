import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckList = () => {
	const loaderData = useLoaderData();
	console.log(loaderData);
	console.log(loaderData.course_name);
	return <div className='my-96'>{loaderData.course_name}</div>;
};

export default CheckList;
