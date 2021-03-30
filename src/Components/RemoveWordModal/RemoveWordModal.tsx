import { closeModal, updateWords } from '@/Store/Actions';
import { Store } from '@/Store/Models';
import Modal from '@Components/Modal/Modal';
import { ModalModel, Word } from '@Models/index';
import ButtonSc from '@StyledComponents/Button/Button';
import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface State {
	words: Word[];
	modal: ModalModel;
	closeModal: () => void;
	updateWords: (words: Word[]) => void;
}

const RemoveWordModal = (props: State) => {
	const { words, updateWords, closeModal, modal } = props;

	const removeWord = (event: MouseEvent) => {
		event.preventDefault();

		const handlingWord = modal.data;

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

		updateWords(updatedWords);
		closeModal();
	}

	return (
		<Modal title='Delete word'>
			Remove word {modal.data?.selection || modal.data?.originWord} - {modal.data?.translation}
			<div>
				<ButtonSc onClick={removeWord}>Remove</ButtonSc>
			</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RemoveWordModal);
