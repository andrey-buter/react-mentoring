import { CLOSE_MODAL, OPEN_MODAL } from '../Actions';
import { Action, ModalState } from '../Models';

const initialState: ModalState = {
	id: null,
	data: null
};

export function modalReducer(state: ModalState = initialState, action: Action) {
	switch (action.type) {
		case OPEN_MODAL:
			return {
				data: null,
				...action.payload
			};
		case CLOSE_MODAL:
			return {
				id: null,
				data: null
			};
		default:
			return state
	}
}
