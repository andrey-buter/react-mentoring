import { Action } from '@/Store/Models/action.model';
import { Word } from '@Models/index';

export const ADD_WORDS = 'ADD_WORDS';

export function setWords(words: Word[]): Action<Word[]> {
	return { type: ADD_WORDS, payload: words }
}
