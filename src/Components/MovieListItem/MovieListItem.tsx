import Image from '@Components/Image/Image';
import Link from '@Components/Link/Link';
import { MovieItemModel } from '@Models/movieItem.model';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ArticleSc = styled.article`
	width: 320px;
	padding: 0 10px;
`;

const MovieListItem = (props: { item: MovieItemModel }) => {
	const { item } = props;

	return (
		<ArticleSc>
			<Link to=''>
				<Image src={item.thumbnail} />
				<h3>
					{item.title}
				</h3>
				<div>
					{item.releaseDate.toString()}
				</div>
				<div>
					{item.genres.join(', ')}
				</div>
			</Link>
		</ArticleSc>
	);
};

MovieListItem.propTypes = {
	item: PropTypes.exact({
		id: PropTypes.string,
		title: PropTypes.string,
		thumbnail: PropTypes.string,
		releaseDate: PropTypes.object, // How to set Date type
		genres: PropTypes.arrayOf(PropTypes.string)
	})
};

export default MovieListItem;
