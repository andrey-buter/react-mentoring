import { GroupByWords } from '@Models/group-by-words.enum';
import React, { MouseEvent } from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
	display: flex;
`;

const Li = styled.li`

`;

interface Props {
	select: (groupBy: string) => void;
}

interface Category {
	id: string;
	label: string;
}

const FilterByCategory = (props: Props) => {
	const categories: Category[] = Object.keys(GroupByWords).map((key) => ({
		id: key,
		label: GroupByWords[key as keyof typeof GroupByWords]
	}));

	const select = (category: Category) => (event: MouseEvent) => {
		event.preventDefault();

		props.select(category.label);
	}

	return (
		<div>
			Group By:
			<Ul>
				{categories.map((category) =>
					<li key={category.id}>
						<button onClick={select(category)}>
							{category.label}
						</button>
					</li>
				)}
			</Ul>
		</div>
	);
};

export default FilterByCategory;
