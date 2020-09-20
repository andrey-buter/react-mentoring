import Modal from '@Components/Modal/Modal';
import WordEditForm from '@Components/WordEditForm/WordEditForm';
import React, { MouseEvent } from 'react';

import styled from 'styled-components';

interface Props {
	close: () => void;
}

const AddNewWordModal = (props: Props) => {
	return (
		<Modal close={props.close} title='Add a new word'>
			<WordEditForm />
		</Modal>
	);
}

export default AddNewWordModal;
