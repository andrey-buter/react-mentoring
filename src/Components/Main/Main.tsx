import React from 'react';

import FiltersPanel from '@Components/FiltersPanel/FiltersPanel';
import MoviesList from '@Components/MoviesList/MoviesList';
import WrapperSc from '@StyledComponents/Wrapper/Wrapper';
import styled from 'styled-components';

const MainSc = styled.div`
	flex: 1;
	background-color: #232323;
	color: #fff;

	a {
		color: #bdbdbd;
	}
`;

const Main = () =>
	<MainSc>
		<WrapperSc>
			<FiltersPanel />
			<MoviesList />
		</WrapperSc>
	</MainSc>;

export default Main;
