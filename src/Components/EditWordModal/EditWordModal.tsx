import { closeModal, updateWords } from '@/Store/Actions';
import { Store } from '@/Store/Models';
import Modal from '@Components/Modal/Modal';
import WordEditForm from '@Components/WordEditForm/WordEditForm';
import { ModalModel, Word } from '@Models/index';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface State {
	words: Word[];
	modal: ModalModel;
	closeModal: () => void;
	updateWords: (words: Word[]) => void;
}

const EditWordModal = (props: State) => {
	const { words, updateWords, closeModal, modal } = props;

	const saveWord = (word: Word) => {
		if (!word || !words) {
			closeModal();

			return;
		}

		// TODO: firebase.updateItem()

		const updatedWords = words.reduce((output, item) => {
			output.push(item.id === word.id ? word : item);

			return output;
		}, [] as Word[]);

		updateWords(updatedWords);
		closeModal();
	}

	return (
		<Modal title='Edit word'>
			<WordEditForm data={modal.data} submit={saveWord} />
		</Modal>
	);
}

const mapStateToProps = (state: Store) => {
	const { wordsState, modalState } = state;

	return {
		words: wordsState.words,
		modal: modalState
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		closeModal: () => dispatch(closeModal()),
		updateWords: (words: Word[]) => dispatch(updateWords(words))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EditWordModal);
