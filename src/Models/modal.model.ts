import { ModalId } from './modal-id.model';
import { TODO_ANY } from './todo-any.model';

export interface ModalModel<T = TODO_ANY> {
	id: ModalId | null;
	data?: T | null;
}
