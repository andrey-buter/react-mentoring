import React from 'react';
import styled from 'styled-components';

const ButtonSc = styled.button`
	position: absolute;
	right: 0;
	top: 20px;
`;

const AddMovieButton = () =>
	<ButtonSc>
		+ Add movie
	</ButtonSc>;

export default AddMovieButton;
