import { Action } from '@/Store/Models/action.model';
import { Word } from '@Models/index';

export const UPDATE_WORDS = 'UPDATE_WORDS';

export function updateWords(words: Word[]): Action<Word[]> {
	return { type: UPDATE_WORDS, payload: words }
}
