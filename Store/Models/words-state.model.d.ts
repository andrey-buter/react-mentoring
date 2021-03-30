import { GroupByWords } from '@Models/group-by-words.enum';
import { Word } from '@Models/word.model';
export interface WordsState {
    words: Word[];
    groupBy: GroupByWords;
}
