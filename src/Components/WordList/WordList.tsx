import Modal from '@Components/Modal/Modal';
import WordEditForm from '@Components/WordEditForm/WordEditForm';
import WordListItem from '@Components/WordListItem/WordListItem';
import { GroupByWords } from '@Models/group-by-words.enum';
import { GroupedWordsModel } from '@Models/grouped-words.model';
import { Word } from '@Models/word.model';
import { RawWordsDatabase } from '@Models/words-database.model';
import { firebaseService } from '@Services/Firebase/Firebase.service';
import ButtonSc from '@StyledComponents/Button/Button';
import React, { Component, MouseEvent, useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import groupByService from './group-words.service';
import { StateModel } from './state.model';

const Ul = styled.ul`
	display: flex;
	flex-wrap: wrap;
`;

interface Props {
	groupBy: string;
}

interface ModalState {
	isOpenEditModal: boolean;
	isOpenRemoveModal: boolean;
	handlingWord: Word | null;
}

const WordList = (props: Props) => {
	const [init] = useState<undefined>();
	const [words, setWords] = useState<Word[] | null>(null);
	const [modalState, setModalState] = useState<ModalState>({
		isOpenEditModal: false,
		isOpenRemoveModal: false,
		handlingWord: null
	});

	// TODO: every component renders two times. WHy?

	useEffect(() => {
		firebaseService.init()
			.then((words: RawWordsDatabase) => Object.keys(words).map((id) => {
				return {
					id,
					...words[id]
				};
			}))
			.then((words: Word[]) => {
				setWords(words);
			});
	}, [init]);

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

	const openEditModal = (word: Word) => {
		setModalState((prev) => ({
			...prev,
			isOpenEditModal: true,
			handlingWord: word
		}));
	}

	const opedRemoveModal = (word: Word) => {
		setModalState((prev) => ({
			...prev,
			isOpenRemoveModal: true,
			handlingWord: word
		}));
	}

	const closeModal = () => {
		setModalState((prev) => ({
			...prev,
			isOpenRemoveModal: false,
			isOpenEditModal: false,
			handlingWord: null
		}));
	}

	const saveWord = () => {
		const { handlingWord } = modalState;

		if (!handlingWord || !words) {
			closeModal();

			return;
		}

		// TODO: firebase.updateItem()

		const updatedWords = words.reduce((output, item) => {
			output.push(item.id === handlingWord.id ? handlingWord : item);

			return output;
		}, [] as Word[]);

		setWords(updatedWords);
		closeModal();
	}

	const removeWord = (event: MouseEvent) => {
		event.preventDefault();

		const { handlingWord } = modalState;

		if (!handlingWord || !words) {
			closeModal();

			return;
		}

		// TODO: firebase.removeItem()

		const updatedWords = words.reduce((output, item) => {
			if (item.id !== handlingWord.id) {
				output.push(item);
			}

			return output;
		}, [] as Word[]);

		setWords(updatedWords);
		closeModal();
	}

	const { isOpenEditModal, isOpenRemoveModal, handlingWord } = modalState;

	return <>
		<div>
			{messageCounter}
		</div>
		{words ? (
			<ul>
				{groupedWords.map((group) => <li key={group.id}>
					<h3>{group.id}</h3>

					<Ul>
						{group.words.map((word) => <WordListItem key={word.id} word={word} edit={openEditModal} remove={opedRemoveModal} />)}
					</Ul>
				</li>)}
			</ul>
		) : null}
		{isOpenEditModal ?
			<Modal close={closeModal} title='Edit word'>
				<WordEditForm data={handlingWord} submit={saveWord} />
			</Modal> : null}
		{isOpenRemoveModal ?
			<Modal close={closeModal} title='Delete word'>
				Remove word {handlingWord?.selection || handlingWord?.originWord} - {handlingWord?.translation}
				<div>
					<ButtonSc onClick={removeWord}>Remove</ButtonSc>
				</div>
			</Modal> : null}
	</>;
}

export default WordList;
