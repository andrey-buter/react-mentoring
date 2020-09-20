import genres from '@Data/genres.json';
import movies from '@Data/movies.json';
import { GenreModel } from '@Models/genre.model';
import { MovieItemModel } from '@Models/movieItem.model';
import { MovieItemRawModel } from '@Models/movieItemRaw.model';

class DataService {
	async getGenres(): Promise<GenreModel[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(genres.genres);
			}, 1000);
		});
	}

	async getMovies(): Promise<MovieItemModel[]> {
		return Promise.all([
			this.getGenres(),
			this.getRawMovies()
		])
			.then(([genres, movies]) => {
				const genresMap = genres.reduce((result, genre) => {
					return result.set(genre.id, genre.label);
				}, new Map<string, string>());

				return movies.map((movie) => {
					// I can't delete a prop because of: The operand of a 'delete' operator must be optional.
					const result = {
						id: movie.id,
						title: movie.title,
						thumbnail: movie.thumbnail,
						genres: movie.genreIds.map((genreId) => genresMap.get(genreId) || ''),
						releaseDate: new Date(movie.releaseDate)
					};

					return result;
				});
			});
	}

	private async getRawMovies(): Promise<MovieItemRawModel[]> {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(movies.movies);
			}, 1000);
		});
	}
}

const dataService = new DataService();

export {
	dataService
};
