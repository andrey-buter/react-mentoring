import Modal from '@Components/Modal/Modal';
import WordEditForm from '@Components/WordEditForm/WordEditForm';
import WordListItem from '@Components/WordListItem/WordListItem';
import { GroupByWords } from '@Models/group-by-words.enum';
import { GroupedWordsModel } from '@Models/grouped-words.model';
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

interface Props {
	groupBy: string;
}

class WordList extends Component<Props, StateModel> {
	state: StateModel = {
		words: null,
		openEditModal: false,
		openRemoveModal: false,
		handlingWord: null
	};

	constructor(props: Props) {
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

		const groupedWords = this.groupWords(this.props.groupBy, words || []);

		return <>
			<div>
				{counterMessage}
			</div>
			{words ? (
				<ul>
					{groupedWords.map((group) => <li key={group.id}>
						<h3>{group.id}</h3>

						<Ul>
							{group.words.map((word) => <WordListItem key={word.id} word={word} edit={this.openEditModal} remove={this.opedRemoveModal} />)}
						</Ul>
					</li>)}
				</ul>
			) : null}
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

	private groupWords(groupBy: string, words: Word[]): GroupedWordsModel[] {
		console.log('groupBy', groupBy);

		switch (groupBy) {
			case GroupByWords.Site:
				return this.groupWordsBySite(words);

			case GroupByWords.SameWord:
				return this.groupWordsTheSameWord(words);

			case GroupByWords.All:
			default:
				return this.groupWordsByAll(words);
		};
	}

	private groupWordsByAll(words: Word[]): GroupedWordsModel[] {
		return [
			{
				id: 'All',
				words
			}
		]
	}

	private groupWordsBySite(words: Word[]): GroupedWordsModel[] {
		const groupedWords = words
			.reduce((output, word) => {
				if (!output[word.uri]) {
					output[word.uri] = [];
				}
				output[word.uri].push(word);

				return output;
			}, {} as {[key: string]: Word[]});

		return Object.keys(groupedWords).map((key) => {
			return {
				id: key,
				words: groupedWords[key]
			};
		})
	}

	private groupWordsTheSameWord(words: Word[]): GroupedWordsModel[] {
		const groupedWords = words
			.reduce((output, word) => {
				const key = word.originWord || word.selection.trim();
				if (!output[key]) {
					output[key] = [];
				}
				output[key].push(word);

				return output;
			}, {} as { [key: string]: Word[] });

		return Object.keys(groupedWords).map((key) => {
			return {
				id: key,
				words: groupedWords[key]
			};
		})
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
