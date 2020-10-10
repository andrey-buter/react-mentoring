import Input from '@Components/Input/Input';
import { useWordDetailsContext } from '@Components/WordDetailsProvider/WordDetailsProvider';
import { Word } from '@Models/index';
import ButtonSc from '@StyledComponents/Button/Button';
import React, { MouseEvent } from 'react';

import styled from 'styled-components';

interface Props {
}

const WordDetails = (props: Props) => {
	const { word, closeDetails } = useWordDetailsContext();

	if (!word) {
		return null;
	}

	const close = (e: MouseEvent) => {
		e.preventDefault();
		closeDetails();
	}

	return <>
		<div>
			<button onClick={close}>
				Close details
			</button>
			<div>
				<div>Selection</div>
				<div>
					{word.selection}
				</div>
			</div>
			<div>
				<div>Origin word:</div>
				<div>
					{word.originWord}
				</div>
			</div>
			<div>
				<div>Translation</div>
				<div>
					{word.translation}
				</div>
			</div>
			<div>
				<div>URL</div>
				<div>
					{word.uri}
				</div>
			</div>
			<div>
				<div>Start Range</div>
				<div>
					{JSON.stringify(word.startRange)}
				</div>
			</div>
			<div>
				<div>End Range</div>
				<div>
					{JSON.stringify(word.endRange)}
				</div>
			</div>
		</div>
	</>
}

export default WordDetails;
