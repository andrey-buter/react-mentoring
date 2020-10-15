import Modal from '@Components/Modal/Modal';
import MovieEditFormContainer from '@Components/MovieEditForm/MovieEditFormContainer';
import React, { MouseEvent } from 'react';

import styled from 'styled-components';

const AddNewWordModal = () => {
	return (
		<Modal title='Add a new movie'>
			<MovieEditFormContainer />
		</Modal>
	);
}

export default AddNewWordModal;
