import Link from '@Components/Link/Link';
import { Word } from '@Models/word.model';
import ButtonSc from '@StyledComponents/Button/Button';
import PropTypes from 'prop-types';
import React, { MouseEvent } from 'react';
import styled from 'styled-components';

const ArticleSc = styled.article`
	padding: 10px 0;
	width: 100%;
`;

const LinkSc = styled(Link)`
	display: flex;
`;

interface Props {
	word: Word;
	edit: (word: Word) => void;
	remove: (word: Word) => void;
}

const WordListItem = (props: Props) => {
	const { word } = props;

	const edit = (event: MouseEvent) => {
		// TODO: why to do preventDefault
		event.preventDefault();
		props.edit(props.word);
	}

	const remove = (event: MouseEvent) => {
		event.preventDefault();
		props.remove(word);
	}

	return (
		<ArticleSc>
			<LinkSc to=''>
				<div>
					{word.selection}
				</div>
				<div>
					{word.translation}
				</div>
				<div>
					{word.uri}
				</div>
				<ButtonSc onClick={edit}>Edit</ButtonSc>
				<ButtonSc onClick={remove}>Delete</ButtonSc>
			</LinkSc>
		</ArticleSc>
	);
};

// WordListItem.propTypes = {
// 	item: PropTypes.exact({
// 		id: PropTypes.string,
// 		title: PropTypes.string,
// 		thumbnail: PropTypes.string,
// 		releaseDate: PropTypes.object, // How to set Date type
// 		genres: PropTypes.arrayOf(PropTypes.string)
// 	})
// };

export default WordListItem;
