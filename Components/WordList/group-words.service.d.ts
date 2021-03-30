import { GroupedWordsModel } from '@Models/grouped-words.model';
import { Word } from '@Models/word.model';
declare const groupByService: {
    groupWords(groupBy: string, words: Word[]): GroupedWordsModel[];
    _groupWordsByAll(words: Word[]): GroupedWordsModel[];
    _groupWordsBySite(words: Word[]): GroupedWordsModel[];
    _groupWordsTheSameWord(words: Word[]): GroupedWordsModel[];
};
export default groupByService;
