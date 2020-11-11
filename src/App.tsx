import '@/Assets/styles/styles.scss';
import ErrorBoundary from '@Components/ErrorBoundary/ErrorBoundary';
import Footer from '@Components/Footer/Footer';
import Header from '@Components/Header/Header';
import Main from '@Components/Main/Main';
import NotFoundPage from '@Components/NotFound/NotFound';
import { UniversalRouterType } from '@Components/Router/Router';
import WordDetails from '@Components/WordDetails/WordDetails';
import { Word } from '@Models/word.model';
import { RawWordsDatabase } from '@Models/words-database.model';
import { firebaseService } from '@Services/Firebase/Firebase.service';
import React, { ComponentType, ReactNode, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { setWords } from './Store/Actions';
import { Action } from './Store/Models/action.model';

const PageSc = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`;

interface State {
	setWords: (words: Word[]) => void;
}

interface Props {
	UniversalRouter: UniversalRouterType,
}

const App = (props: State & Props) => {
	const { UniversalRouter, setWords } = props;

	useEffect(() => {
		firebaseService.init()
			.then((words: RawWordsDatabase) => Object.keys(words).map((id) => {
				return {
					id,
					...words[id]
				};
			}))
			.then((words: Word[]) => {
				setWords(words);
			});
	}, []);

	return <>
		<PageSc>
			<ErrorBoundary>
				<UniversalRouter>
					<Switch>
						<Route path='/' exact>
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
				</UniversalRouter>
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
