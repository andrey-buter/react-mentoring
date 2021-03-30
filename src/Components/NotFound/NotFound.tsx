import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () =>
	<div>
		<h1>Page not found</h1>
		<p>
			Go <Link to='/'>home</Link>
		</p>
	</div>

export default NotFoundPage;
