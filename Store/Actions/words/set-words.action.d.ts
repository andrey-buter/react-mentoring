import { Action } from '@/Store/Models/action.model';
import { Word } from '@Models/index';
export declare const ADD_WORDS = "ADD_WORDS";
export declare function setWords(words: Word[]): Action<Word[]>;
