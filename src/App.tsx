import Footer from '@Components/Footer/Footer';
import Header from '@Components/Header/Header';
import Main from '@Components/Main/Main';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import '@/Assets/styles/styles.scss';
import ErrorBoundary from '@Components/ErrorBoundary/ErrorBoundary';
import NotFoundPage from '@Components/NotFound/NotFound';
import WordDetails from '@Components/WordDetails/WordDetails';
import { Word } from '@Models/word.model';
import { RawWordsDatabase } from '@Models/words-database.model';
import { firebaseService } from '@Services/Firebase/Firebase.service';
import { connect } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
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
				<BrowserRouter basename='/'>
					<Switch>
						<Route path='/' exact>
							<Header />
							<Main />
						</Route>
						<Route path='/react-mentoring' exact>
							<Header />
							<Main />
						</Route>
						<Route path='/words' exact>
							<Redirect to='/' />
						</Route>
						<Route path='/words/:wordId'>
							<Header />
							<WordDetails />
						</Route>
						<Route path='/search' exact>
							<Redirect to='/' />
						</Route>
						{/* // handle query params: https://learnwithparam.com/blog/how-to-handle-query-params-in-react-router/ */}
						<Route path='/search/:searchQuery'>
							<Header />
							<Main />
						</Route>
						<Route path='*'>
							<Header />
							<NotFoundPage />
						</Route>
					</Switch>
				</BrowserRouter>
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
