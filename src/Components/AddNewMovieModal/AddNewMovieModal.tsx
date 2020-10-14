import Modal from '@Components/Modal/Modal';
import MovieEditForm from '@Components/MovieEditForm/MovieEditForm';
import React, { MouseEvent } from 'react';

import styled from 'styled-components';

const AddNewWordModal = () => {
	return (
		<Modal title='Add a new movie'>
			<MovieEditForm />
		</Modal>
	);
}

export default AddNewWordModal;
