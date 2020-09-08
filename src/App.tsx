import Footer from '@Components/Footer/Footer';
import Header from '@Components/Header/Header';
import Main from '@Components/Main/Main';
import React from 'react';
import styled from 'styled-components';

import '@/Assets/styles/styles.scss';
import ErrorBoundary from '@Components/ErrorBoundary/ErrorBoundary';

const PageSc = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
`;

const App = () =>
	<PageSc>
		<ErrorBoundary>
			<Header />
			<Main />
			<Footer />
		</ErrorBoundary>
	</PageSc>;

export default App;
