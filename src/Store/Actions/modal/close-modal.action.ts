import { Action } from '@/Store/Models/action.model';

export const CLOSE_MODAL = 'CLOSE_MODAL';

export function closeModal(): Action<void> {
	return { type: CLOSE_MODAL }
}
