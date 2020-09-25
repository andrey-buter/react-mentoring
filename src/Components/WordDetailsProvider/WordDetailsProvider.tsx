import Input from '@Components/Input/Input';
import { Word } from '@Models/index';
import ButtonSc from '@StyledComponents/Button/Button';
import React, { createContext, MouseEvent, ReactNode, useContext, useState } from 'react';

import styled from 'styled-components';

interface ContextModel {
	word: Word | null;
	openDetails: (word: Word) => void;
	closeDetails: () => void;
}

const WordDetailsContext = createContext<ContextModel>({
	word: null,
	openDetails: (word: Word) => {},
	closeDetails: () => {}
});

export const useWordDetailsContext = () => {
	return useContext(WordDetailsContext);
}

interface Props {
	children: ReactNode;
}

const WordDetailsProvider = (props: Props) => {
	const [word, setWord] = useState<Word | null>(null);

	const openDetails = (word: Word) => {
		setWord(word);
	}

	const closeDetails = () => {
		setWord(null);
	}

	return (
		<WordDetailsContext.Provider value={{
			word,
			openDetails,
			closeDetails
		}}>
			{props.children}
		</WordDetailsContext.Provider>
	);
}

export default WordDetailsProvider;
