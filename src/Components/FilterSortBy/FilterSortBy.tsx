import React from 'react';

const FilterSortBy = () => {
	const filters = [
		'Release Date',
		'Title'
	];

	return (
		<div>
			Sort By
			<select name='' id=''>
				{filters.map((filter, index) =>
					<option key={index} value={filter}>{filter}</option>
				)}
			</select>
		</div>
	);
}

export default FilterSortBy;
