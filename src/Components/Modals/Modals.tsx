import { Store } from '@/Store/Models';
import AddNewWordModal from '@Components/AddNewWordModal/AddNewWordModal';
import EditWordModal from '@Components/EditWordModal/EditWordModal';
import RemoveWordModal from '@Components/RemoveWordModal/RemoveWordModal';
import React from 'react';
import { connect } from 'react-redux';

interface State {
	modalId: string | null;
}

const Modals = (props: State) => {
	const { modalId } = props;

	return <>
		{modalId === 'editWord' ? <EditWordModal /> : null}
		{modalId === 'removeWord' ? <RemoveWordModal /> : null}
		{modalId === 'addNewWord' ? <AddNewWordModal /> : null}
	</>
}

const mapStateToProps = (state: Store) => {
	const { modalState } = state;

	return {
		modalId: modalState.id
	}
}

export default connect(mapStateToProps)(Modals);
