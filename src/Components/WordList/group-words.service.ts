import { GroupByWords } from '@Models/group-by-words.enum';
import { GroupedWordsModel } from '@Models/grouped-words.model';
import { Word } from '@Models/word.model';

const groupByService = {
	groupWords(groupBy: string, words: Word[]): GroupedWordsModel[] {
		switch (groupBy) {
			case GroupByWords.Site:
				return this._groupWordsBySite(words);

			case GroupByWords.SameWord:
				return this._groupWordsTheSameWord(words);

			case GroupByWords.All:
			default:
				return this._groupWordsByAll(words);
		};
	},

	_groupWordsByAll(words: Word[]): GroupedWordsModel[] {
		return [
			{
				id: 'All',
				words
			}
		]
	},

	_groupWordsBySite(words: Word[]): GroupedWordsModel[] {
		const groupedWords = words
			.reduce((output, word) => {
				if (!output[word.uri]) {
					output[word.uri] = [];
				}
				output[word.uri].push(word);

				return output;
			}, {} as {[key: string]: Word[]});

		return Object.keys(groupedWords).map((key) => {
			return {
				id: key,
				words: groupedWords[key]
			};
		})
	},

	_groupWordsTheSameWord(words: Word[]): GroupedWordsModel[] {
		const groupedWords = words
			.reduce((output, word) => {
				const sameWord = word.originWord || word.selection.trim();
				const matchWord = sameWord
					.replace(/es$/, '')
					.replace(/s$/, '')
					// .replace(/ned$/, 'n')
					// .replace(/ed$/, 'e')

				if (!output[matchWord]) {
					output[matchWord] = [];
				}
				output[matchWord].push(word);

				return output;
			}, {} as { [key: string]: Word[] });

		const groups = Object.keys(groupedWords).map((key) => {
			const words = groupedWords[key];

			return {
				id: `(${words.length}) ${key}`,
				words
			};
		});

		groups.sort((group1, group2) => {
			return group1.words.length > group2.words.length ? -1 : 1;
		});

		return groups;
	}
}

export default groupByService;
