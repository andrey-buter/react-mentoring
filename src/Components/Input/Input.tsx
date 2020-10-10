import FormFieldSc from '@StyledComponents/FormField/FormField';
import React, { MouseEvent } from 'react';

import styled from 'styled-components';

const LabelSc = styled.label`
	color: #fff;
	margin-bottom: 5px;
`;

interface Props {
	label?: string,
	type?: 'text',
	id?: string,
	value?: string,
	placeholder?: string,
	name: string;
}

const Input = (props: Props) => {
	const { id, label, type, value, placeholder, name } = props;

	return (
		<FormFieldSc>
			{label ? <LabelSc id={id}>{label}</LabelSc> : null }
			<input type={type || 'text'} defaultValue={value} placeholder={placeholder} name={name}/>
		</FormFieldSc>
	);
}

export default Input;
