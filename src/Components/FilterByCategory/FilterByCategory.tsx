import Link from '@Components/Link/Link';
import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
	display: flex;
`;

const Li = styled.li`

`;

const FilterByCategory = () => {
	const categories = [
		'Documentary',
		'Comedy',
		'Horror',
		'Crime'
	];

	return (
		<Ul>
			<li>
				<Link to=''>
					All
				</Link>
			</li>
			{categories.map((category, index) =>
				<li key={index}>
					<Link to=''>
						{category}
					</Link>
				</li>
			)}
		</Ul>
	);
};

export default FilterByCategory;
