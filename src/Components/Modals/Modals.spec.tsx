import { openModal } from '@/Store/Actions';
import { ModalState } from '@/Store/Models';
import { Queries, render, RenderResult } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import Modals from './Modals';

const mockStore = configureStore<Store>([]);

interface Store {
	modalState: ModalState
}

describe('Modal Comp', () => {
	let store: MockStoreEnhanced<Store, {}>;
	let renderResult: RenderResult;

	beforeEach(() => {
		const initialState: Store = {
			modalState: {
				id: null
			}
		}
		store = mockStore(initialState);

		renderResult = render(
			<Provider store={store}>
				<Modals />
			</Provider>
		);
	});

	it('should render empty component', () => {
		expect(renderResult.container.firstChild).toBeNull();
		expect(renderResult.container).toBeEmptyDOMElement();
	});

	it('should render editWord modal', () => {
		store.dispatch(openModal({
			id: 'editWord'
		}))
		expect(renderResult.getByTestId('editWord')).toBeVisible();
	});
});
