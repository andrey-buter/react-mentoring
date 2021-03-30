import { GroupByWords } from '@Models/group-by-words.enum';
import { Action, WordsState } from '../Models';
export declare function wordsReducer(state: WordsState | undefined, action: Action): {
    words: any;
    groupBy: GroupByWords;
} | {
    groupBy: any;
    words: import("../../models").Word[];
};
