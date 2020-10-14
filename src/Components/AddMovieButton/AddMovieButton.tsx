import { openModal } from '@/Store/Actions';
import { ModalId } from '@Models/index';
import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';

const ButtonSc = styled.button`
	position: absolute;
	right: 150px;
	top: 20px;
`;

interface State {
	openModal: (id: ModalId) => void;
}

const AddMovieButton = (props: State) => {
	return (
		<ButtonSc onClick={() => props.openModal('addNewMovie')}>
			+ Add a movie
		</ButtonSc>
	)
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		openModal: (id: ModalId) => dispatch(openModal({ id, data: null }))
	}
}

export default connect(null, mapDispatchToProps)(AddMovieButton);
