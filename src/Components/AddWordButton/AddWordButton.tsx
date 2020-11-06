import { openModal } from '@/Store/Actions';
import { ModalId } from '@Models/modal-id.model';
import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { State } from './state.model';

const ButtonSc = styled.button`
	position: absolute;
	right: 0;
	top: 20px;
`;

const AddWordButton = (props: State) => {
	return (
		// How to test on click (with redux) ?
		<ButtonSc onClick={() => props.openModal('addNewWord')}>
			+ Add a word
		</ButtonSc>
	)
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		openModal: (id: ModalId) => dispatch(openModal({ id, data: null }))
	}
}

export default connect(null, mapDispatchToProps)(AddWordButton);
