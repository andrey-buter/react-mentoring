import { ModalId } from '@Models/index';

export interface State {
	openModal: (id: ModalId) => void;
}
