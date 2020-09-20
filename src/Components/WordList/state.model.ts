import { Word } from '@Models/index';

export interface StateModel {
	words: Word[] | null;
	openEditModal: boolean;
	openRemoveModal: boolean;
	handlingWord: Word | null;
}
