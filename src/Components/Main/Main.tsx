import React, { useState } from 'react';

import FiltersPanel from '@Components/FiltersPanel/FiltersPanel';
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
	const [groupByKey, setGroupByKey] = useState<string>(GroupByWords.All);

	const onGroupBy = (groupBy: string) => {
		setGroupByKey(groupBy);
	};

	return (
		<MainSc>
			<WrapperSc>
				<FiltersPanel groupBy={onGroupBy} />
				{/* TODO: как именуются кастомные эвенты в реакте? */}
				<WordList groupBy={groupByKey} />
			</WrapperSc>
		</MainSc>
	);
}

export default Main;
