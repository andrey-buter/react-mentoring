import FilterByCategory from '@Components/FilterByCategory/FilterByCategory';
import FilterSortBy from '@Components/FilterSortBy/FilterSortBy';
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	display: flex;
	justify-content: space-between;
`;

interface Props {
	groupBy: (groupBy: string) => void;
}

const FiltersPanel = (props: Props) => {
	const onSelect = (groupBy: string) => {
		props.groupBy(groupBy);
	}

	return (
		<Div>
			<FilterByCategory select={onSelect} />
			<FilterSortBy />
		</Div>
	);
}

export default FiltersPanel;
