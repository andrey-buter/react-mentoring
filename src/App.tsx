import Footer from '@Components/Footer/Footer';
import Header from '@Components/Header/Header';
import Main from '@Components/Main/Main';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import '@/Assets/styles/styles.scss';
import ErrorBoundary from '@Components/ErrorBoundary/ErrorBoundary';
import WordDetails from '@Components/WordDetails/WordDetails';
import WordDetailsProvider from '@Components/WordDetailsProvider/WordDetailsProvider';
import { Word } from '@Models/word.model';
import { RawWordsDatabase } from '@Models/words-database.model';
import { firebaseService } from '@Services/Firebase/Firebase.service';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setWords } from './Store/Actions';
import { Action } from './Store/Models/action.model';

const PageSc = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`;

interface Props {
	setWords: (words: Word[]) => void;
}

const App = (props: Props) => {
	const [init] = useState<undefined>();

	useEffect(() => {
		firebaseService.init()
			.then((words: RawWordsDatabase) => Object.keys(words).map((id) => {
				return {
					id,
					...words[id]
				};
			}))
			.then((words: Word[]) => {
				props.setWords(words);
			});
	}, [init]);

	return <>
		<PageSc>
			<ErrorBoundary>
				<Header />
				<WordDetailsProvider>
					<WordDetails />
					<Main />
				</WordDetailsProvider>
				<Footer />
			</ErrorBoundary>
		</PageSc>
	</>;
}

const mapDispatchToProps = (dispatch: Dispatch<Action<Word[]>>) => {
	return {
		setWords: (words: Word[]) => dispatch(setWords(words))
	}
}

export default connect(null, mapDispatchToProps)(App);
