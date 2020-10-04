import { Store } from '@/Store/Models';
import WordListItem from '@Components/WordListItem/WordListItem';
import { GroupByWords } from '@Models/group-by-words.enum';
import { Word } from '@Models/word.model';
import React, { useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import groupByService from './group-words.service';

const Ul = styled.ul`
	display: flex;
	flex-wrap: wrap;
`;

interface State {
	words: Word[];
	groupBy: GroupByWords;
}

const WordList = (props: State) => {
	const { words, groupBy } = props;

	const messageCounter = useMemo(() => {
		if (!words) {
			return 'Loading...';
		}

		if (0 === words.length) {
			return 'No Words Found';
		}

		if (1 === words.length) {
			return '1 Word Found';
		}

		return `${words.length} Words Found`;
	}, [words])

	const groupWords = useCallback((groupBy: string, words: Word[]) => {
		return groupByService.groupWords(groupBy, words);
	}, [words, groupBy]);

	const groupedWords = groupWords(groupBy, words || []);

	return <>
		<div>
			{messageCounter}
		</div>
		{words ? (
			<ul>
				{groupedWords.map((group) => <li key={group.id}>
					<h3>{group.id}</h3>

					<Ul>
						{group.words.map((word) => <WordListItem key={word.id} word={word} />)}
					</Ul>
				</li>)}
			</ul>
		) : null}
	</>;
}

const mapStateToProps = (state: Store) => {
	const { wordsState } = state;

	return {
		...wordsState
	}
}

export default connect(mapStateToProps)(WordList);
