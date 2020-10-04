import { Store } from '@/Store/Models';
import WordListItem from '@Components/WordListItem/WordListItem';
import { Word } from '@Models/word.model';
import React, { useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import groupByService from './group-words.service';

const Ul = styled.ul`
	display: flex;
	flex-wrap: wrap;
`;

interface Props {
	groupBy: string;
}

interface State {
	words: Word[];
}

const WordList = (props: Props & State) => {
	const { words } = props;

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
	}, [words, props.groupBy]);

	const groupedWords = groupWords(props.groupBy, words || []);

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
		words: wordsState.words
	}
}

export default connect(mapStateToProps)(WordList);
