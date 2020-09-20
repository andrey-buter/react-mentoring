import FilterByCategory from '@Components/FilterByCategory/FilterByCategory';
import FilterSortBy from '@Components/FilterSortBy/FilterSortBy';
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	justify-content: space-between;
`;

const FiltersPanel = () =>
	<Div>
		<FilterByCategory />
		<FilterSortBy />
	</Div>;

export default FiltersPanel;
