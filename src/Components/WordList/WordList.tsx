import { Store } from '@/Store/Models';
import WordListCounterMessage from '@Components/WordListCounterMessage/WordListCounterMessage';
import WordListItem from '@Components/WordListItem/WordListItem';
import { GroupByWords } from '@Models/group-by-words.enum';
import { Word } from '@Models/word.model';
import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
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
	const { searchQuery } = useParams<{ searchQuery: string | undefined }>();

	const filterWords = useCallback((words: Word[], searchQuery: string) => {
		return words.filter((word) => {
			return word.selection.includes(searchQuery)
				|| word.translation.includes(searchQuery)
				|| word.originWord.includes(searchQuery)
				|| word.context.includes(searchQuery)
		})
	}, [words, searchQuery]);

	const groupWords = useCallback((groupBy: string, words: Word[]) => {
		return groupByService.groupWords(groupBy, words);
	}, [words, groupBy]);

	const filteredWords = searchQuery ? filterWords(words || [], searchQuery) : words || [];

	const groupedWords = groupWords(groupBy, filteredWords);

	return <>
		<WordListCounterMessage count={words?.length} />
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
