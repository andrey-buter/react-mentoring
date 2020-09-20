import MovieListItem from '@Components/MovieListItem/MovieListItem';
import { dataService } from '@Services/Data/Data.service';
import React, { Component } from 'react';
import styled from 'styled-components';
import { StateModel } from './state.model';

const Ul = styled.ul`
	display: flex;
	flex-wrap: wrap;
`;

class MoviesList extends Component<{}, StateModel> {
	state: StateModel = {
		items: []
	};

	constructor(props: {}) {
		super(props);

		dataService.getMovies()
			.then((movies) => {
				this.setState({
					items: movies
				});
			});
	}
	render() {
		let counterMessage: string;
		const { items } = this.state;

		if (0 === items.length) {
			counterMessage = 'No Movies Found';
		} else
		if (1 === items.length) {
			counterMessage = '1 Movie Found';
		} else {
			counterMessage = `${items.length} Movies Found`;
		}

		return <>
			<div>
				{counterMessage}
			</div>
			<Ul>
				{items.map((item) => <MovieListItem key={item.id} item={item} />)}
			</Ul>
		</>;
	}
}

export default MoviesList;
