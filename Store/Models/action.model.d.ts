import { TODO_ANY } from '@Models/todo-any.model';
export interface Action<T = TODO_ANY> {
    type: string;
    payload?: T;
}
