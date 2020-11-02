import { closeModal } from '@/Store/Actions';
import { openModal } from '../Actions'
import { modalReducer } from './modal.reducer'

describe('modalReducer', () => {
	it('should return the initial state', () => {
		const state = modalReducer(undefined, { type: 'test' });

		expect(state).toEqual({
			id: null,
			data: null
		})
	})

	it('should handle OPEN_MODAL', () => {
		const state = modalReducer(undefined, openModal({ id: 'editWord', data: 'test-data' }))

		expect(state).toEqual({
			id: 'editWord',
			data: 'test-data'
		});
	});

	it('should handle CLOSE_MODAL', () => {
		modalReducer(undefined, openModal({ id: 'editWord', data: 'test-data' }));

		const state = modalReducer(undefined, closeModal())

		expect(state).toEqual({
			id: null,
			data: null
		});
	})
})
