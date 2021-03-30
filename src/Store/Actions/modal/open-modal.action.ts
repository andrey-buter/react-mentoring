import { Action } from '@/Store/Models/action.model';
import { ModalModel } from '@Models/index';

export const OPEN_MODAL = 'OPEN_MODAL';

export function openModal(payload: ModalModel): Action<ModalModel> {
	return { type: OPEN_MODAL, payload }
}
