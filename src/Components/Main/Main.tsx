import React, { useState } from 'react';

import FiltersPanel from '@Components/FiltersPanel/FiltersPanel';
import Modals from '@Components/Modals/Modals';
import WordList from '@Components/WordList/WordList';
import { GroupByWords } from '@Models/group-by-words.enum';
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

const Main = () => {
	return (
		<MainSc>
			<WrapperSc>
				<FiltersPanel />
				<WordList />
				<Modals />
			</WrapperSc>
		</MainSc>
	);
}

export default Main;
