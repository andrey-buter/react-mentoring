import Input from '@Components/Input/Input';
import { Word } from '@Models/index';
import ButtonSc from '@StyledComponents/Button/Button';
import React, { MouseEvent } from 'react';

import styled from 'styled-components';

interface Props {
	data?: Word | null | undefined,
	submit?: (word: Word) => void;
}

const WordEditForm = (props: Props) => {
	const onSubmit = (event: MouseEvent) => {
		event.preventDefault();

		if (props.data) {
			// tslint:disable-next-line:no-unused-expression
			props.submit && props.submit(props.data);
		}
	}

	const data = props.data ?? {
		originWord: '',
		translation: ''
	};

	return (
		<form action=''>
			<Input label='Word' name='originWord' value={data.originWord}></Input>
			<Input label='Translation' name='translation' value={data.translation}></Input>
			<ButtonSc type='submit' onClick={onSubmit}>Save</ButtonSc>
		</form>
	);
}

export default WordEditForm;
