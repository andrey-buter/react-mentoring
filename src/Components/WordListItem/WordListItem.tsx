import { openModal } from '@/Store/Actions';
import { ModalId } from '@Models/index';
import { Word } from '@Models/word.model';
import ButtonSc from '@StyledComponents/Button/Button';
import PropTypes from 'prop-types';
import React, { MouseEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
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

const LinkSc = styled(Link)`
	cursor: pointer;
	color: white !important;
	text-decoration: none;
`;

interface Props {
	word: Word;
}

interface State {
	openModal: (id: ModalId, data: Word) => void;
}

const WordListItem = (props: Props & State) => {
	const { word, openModal } = props;

	const edit = (event: MouseEvent) => {
		// TODO: why to do preventDefault
		event.preventDefault();
		openModal('editWord', word);
	}

	const remove = (event: MouseEvent) => {
		event.preventDefault();
		openModal('removeWord', word);
	}

	return (
		<ArticleSc>
			<div>
				<LinkSc to={`/words/${word.id}`}>
					<div>
						{word.selection} - {word.translation}
					</div>
				</LinkSc>
				<div>
					<a href={word.uri} target='_blank' title={word.uri}>
						{word.uri}
					</a>
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

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		openModal: (id: ModalId, data: Word) => dispatch(openModal({ id, data }))
	}
}

export default connect(null, mapDispatchToProps)(WordListItem);
