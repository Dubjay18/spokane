import React from 'react';

import MainLayout from "../layouts/MainLayout";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
		<MainLayout>
			<div className="py-10 text-center">
				<h2 className='font-medium text-xl'>Oops, Page Not Found</h2>
				<Link to='/'>
					<button className='btn bg-pur my-6 text-white'>Back to Home</button>
				</Link>
			</div>
		</MainLayout>
  );
};

export default ErrorPage;
