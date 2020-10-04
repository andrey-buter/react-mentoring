import { openModal } from '@/Store/Actions';
import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';

const ButtonSc = styled.button`
	position: absolute;
	right: 0;
	top: 20px;
`;

interface State {
	openModal: (id: string) => void;
}

const AddWordButton = (props: State) => {
	return (
		<ButtonSc onClick={() => props.openModal('addNewWord')}>
			+ Add a word
		</ButtonSc>
	)
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		openModal: (id: string) => dispatch(openModal({ id, data: null }))
	}
}

export default connect(null, mapDispatchToProps)(AddWordButton);
