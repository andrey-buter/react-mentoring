import Modal from '@Components/Modal/Modal';
import WordEditForm from '@Components/WordEditForm/WordEditForm';
import WordListItem from '@Components/WordListItem/WordListItem';
import { Word } from '@Models/word.model';
import { RawWordsDatabase } from '@Models/words-database.model';
import { firebaseService } from '@Services/Firebase/Firebase.service';
import ButtonSc from '@StyledComponents/Button/Button';
import React, { Component, MouseEvent } from 'react';
import styled from 'styled-components';
import { StateModel } from './state.model';

const Ul = styled.ul`
	display: flex;
	flex-wrap: wrap;
`;

class WordList extends Component<{}, StateModel> {
	state: StateModel = {
		words: null,
		openEditModal: false,
		openRemoveModal: false,
		handlingWord: null
	};

	constructor(props: {}) {
		super(props);
	}

	componentDidMount() {
		this.initData();
	}

	render() {
		let counterMessage: string;
		const { words, openEditModal, openRemoveModal, handlingWord } = this.state;

		if (!words) {
			counterMessage = 'Loading...';
		} else
		if (0 === words.length) {
			counterMessage = 'No Words Found';
		} else
			if (1 === words.length) {
				counterMessage = '1 Word Found';
			} else {
				counterMessage = `${words.length} Words Found`;
			}

		return <>
			<div>
				{counterMessage}
			</div>
			{words ? <Ul>
				{words.map((word) => <WordListItem key={word.id} word={word} edit={this.openEditModal} remove={this.opedRemoveModal} />)}
			</Ul> : null}
			{openEditModal ?
				<Modal close={this.closeModal} title='Edit word'>
					<WordEditForm data={handlingWord} submit={this.saveWord} />
				</Modal> : null}
			{openRemoveModal ?
				<Modal close={this.closeModal} title='Delete word'>
					Remove word {handlingWord?.selection || handlingWord?.originWord} - {handlingWord?.translation}
					<div>
						<ButtonSc onClick={this.removeWord}>Remove</ButtonSc>
					</div>
				</Modal> : null}
		</>;
	}

	openEditModal = (word: Word) => {
		this.setState({
			openEditModal: true,
			handlingWord: word
		});
	}

	opedRemoveModal = (word: Word) => {
		this.setState({
			openRemoveModal: true,
			handlingWord: word
		});
	}

	closeModal = () => {
		this.setState({
			openEditModal: false,
			openRemoveModal: false,
			handlingWord: null
		});
	}

	saveWord = () => {
		const { handlingWord, words } = this.state;

		if (!handlingWord || !words) {
			this.closeModal();

			return;
		}

		// TODO: firebase.updateItem()

		const updatedWords = words.reduce((output, item) => {
			output.push(item.id === handlingWord.id ? handlingWord : item);

			return output;
		}, [] as Word[]);

		this.setState({ words: updatedWords });
		this.closeModal();
	}

	removeWord = (event: MouseEvent) => {
		event.preventDefault();

		const { handlingWord, words } = this.state;

		if (!handlingWord || !words) {
			this.closeModal();

			return;
		}

		// TODO: firebase.removeItem()

		const updatedWords = words.reduce((output, item) => {
			if (item.id !== handlingWord.id) {
				output.push(item);
			}

			return output;
		}, [] as Word[]);

		this.setState({ words: updatedWords });
		this.closeModal();
	}

	private initData() {
		firebaseService.init()
			.then((words: RawWordsDatabase) => Object.keys(words).map((id) => {
				return {
					id,
					...words[id]
				};
			}))
			.then((words: Word[]) => {
				this.setState({
					words
				});
			})
	}
}

export default WordList;
