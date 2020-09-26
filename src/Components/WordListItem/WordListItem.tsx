import Link from '@Components/Link/Link';
import { useWordDetailsContext } from '@Components/WordDetailsProvider/WordDetailsProvider';
import { Word } from '@Models/word.model';
import ButtonSc from '@StyledComponents/Button/Button';
import PropTypes from 'prop-types';
import React, { MouseEvent, useEffect } from 'react';
import styled from 'styled-components';

const ArticleSc = styled.article`
	padding: 10px 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	height: 40px;

	.buttons {
		display: none;
	}

	&:hover {
		background-color: #000;

		.buttons {
			display: block;
		}
	}
`;

// const LinkSc = styled(Link)`
// `;

const LinkSc = styled.a`
	cursor: pointer;
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

	const {openDetails} = useWordDetailsContext();

	return (
		<ArticleSc>
			<div>
				<LinkSc onClick={() => openDetails(word)}>
					<div>
						{word.selection} - {word.translation}
					</div>
				</LinkSc>
				<div>
					{word.uri}
				</div>
			</div>
			<div className='buttons'>
				<ButtonSc onClick={edit}>Edit</ButtonSc>
				<ButtonSc onClick={remove}>Delete</ButtonSc>
			</div>
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
