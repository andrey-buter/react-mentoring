import { Action } from '@/Store/Models/action.model';
import { Word } from '@Models/index';
export declare const UPDATE_WORDS = "UPDATE_WORDS";
export declare function updateWords(words: Word[]): Action<Word[]>;
