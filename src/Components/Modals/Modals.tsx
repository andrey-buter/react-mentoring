import { Store } from '@/Store/Models';
import AddNewMovieModal from '@Components/AddNewMovieModal/AddNewMovieModal';
import AddNewWordModal from '@Components/AddNewWordModal/AddNewWordModal';
import EditWordModal from '@Components/EditWordModal/EditWordModal';
import RemoveWordModal from '@Components/RemoveWordModal/RemoveWordModal';
import { ModalId } from '@Models/index';
import React from 'react';
import { connect } from 'react-redux';

interface State {
	modalId: ModalId | null;
}

const Modals = (props: State) => {
	const { modalId } = props;

	return <>
		{modalId === 'editWord' ? <EditWordModal data-testid='editWord' /> : null}
		{modalId === 'removeWord' ? <RemoveWordModal /> : null}
		{modalId === 'addNewWord' ? <AddNewWordModal /> : null}
		{modalId === 'addNewMovie' ? <AddNewMovieModal /> : null}
	</>
}

const mapStateToProps = (state: Store) => {
	const { modalState } = state;

	return {
		modalId: modalState.id
	}
}

export default connect(mapStateToProps)(Modals);
