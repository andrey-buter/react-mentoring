import Modal from '@Components/Modal/Modal';
import WordEditForm from '@Components/WordEditForm/WordEditForm';
import React, { MouseEvent } from 'react';

import styled from 'styled-components';

const AddNewWordModal = () => {
	return (
		<Modal title='Add a new word'>
			<WordEditForm />
		</Modal>
	);
}

export default AddNewWordModal;
