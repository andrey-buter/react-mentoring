import { Word } from '@Models/word.model';
import { ADD_WORDS, UPDATE_WORDS } from '../Actions';
import { Action, WordsState } from '../Models';

const initialState: WordsState = {
	words: []
};

export function wordsReducer(state: WordsState = initialState, action: Action) {
	switch (action.type) {
		case ADD_WORDS:
		case UPDATE_WORDS:
			return {
				...state,
				words: action.payload
			}
		default:
			return state
	}
}
