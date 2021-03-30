import { GroupByWords } from '@Models/group-by-words.enum';
import { ADD_WORDS, GROUP_BY, UPDATE_WORDS } from '../Actions';
import { Action, WordsState } from '../Models';

const initialState: WordsState = {
	words: [],
	groupBy: GroupByWords.All
};

export function wordsReducer(state: WordsState = initialState, action: Action) {
	switch (action.type) {
		case ADD_WORDS:
		case UPDATE_WORDS:
			return {
				...state,
				words: action.payload.reverse()
			}
		case GROUP_BY:
			return {
				...state,
				groupBy: action.payload
			}
		default:
			return state
	}
}
