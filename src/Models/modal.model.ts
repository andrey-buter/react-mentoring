import { TODO_ANY } from './todo-any.model';

export interface ModalModel<T = TODO_ANY> {
	id: string | null;
	data?: T | null;
}
