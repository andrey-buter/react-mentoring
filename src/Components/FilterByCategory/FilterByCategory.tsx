import { groupByWords } from '@/Store/Actions/words/group-by.action';
import { Store } from '@/Store/Models';
import { GroupByWords } from '@Models/group-by-words.enum';
import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';

const Ul = styled.ul`
	display: flex;
`;

const Li = styled.li`

`;

interface State {
	groupBy: GroupByWords,
	updateGroupBy: (groupBy: GroupByWords) => void;
}

interface Category {
	id: string;
	label: GroupByWords;
}

const FilterByCategory = (props: State) => {
	const { updateGroupBy } = props;

	const categories: Category[] = Object.keys(GroupByWords).map((key) => ({
		id: key,
		label: GroupByWords[key as keyof typeof GroupByWords]
	}));

	const select = (category: Category) => (event: MouseEvent) => {
		event.preventDefault();

		updateGroupBy(category.label);
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

const mapStateToProps = (state: Store) => {
	const { wordsState } = state;

	return {
		groupBy: wordsState.groupBy
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		updateGroupBy: (groupBy: GroupByWords) => dispatch(groupByWords(groupBy))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterByCategory);
