import React, { MouseEvent } from 'react';
import styled from 'styled-components';

const ButtonSc = styled.button`
	position: absolute;
	right: 0;
	top: 20px;
`;

interface Props {
	click: (event: MouseEvent) => void,
}

const AddWordButton = (props: Props) =>
	<ButtonSc onClick={props.click}>
		+ Add a word
	</ButtonSc>;

export default AddWordButton;
