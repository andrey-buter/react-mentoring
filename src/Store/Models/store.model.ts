import { ModalState } from './modal-state.model';
import { WordsState } from './words-state.model';

export interface Store {
	wordsState: WordsState;
	modalState: ModalState;
}
