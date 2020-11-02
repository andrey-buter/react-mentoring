import { ModalState } from '@/Store/Models';
import { ModalId } from '@Models/index';
import { screen } from '@testing-library/dom';
import { act, render, RenderResult } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import Modals from './Modals';

interface Store {
	modalState: ModalState
}

const mockStore = configureStore<Store>([]);
const testModalId = 'EditWordModal';

jest.mock('@Components/EditWordModal/EditWordModal', () => jest.fn(() => (
	<div data-testid={testModalId}></div>
)));

describe('Modals', () => {
	let store: MockStoreEnhanced<Store, {}>;
	let renderResult: RenderResult;

	const initStore = (defaultValue: ModalId | null) => {
		const initialState: Store = {
			modalState: {
				id: defaultValue
			}
		}
		store = mockStore(initialState);

		act(() => {
			renderResult = render(
				<Provider store={store}>
					<Modals />
				</Provider>
			);
		});
	}

	it('should render empty component', () => {
		initStore(null);
		expect(renderResult.container.firstChild).toBeNull();
	});

	it('should render editWord modal', () => {
		initStore('editWord');
		expect(screen.getByTestId(testModalId)).toBeDefined();
	});
});
