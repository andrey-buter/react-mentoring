import { ModalId } from '@Models/index';
import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import AddWordButton from './AddWordButton';
import { State } from './state.model';

describe('AddWordButton', () => {
	it('should trigger open modal on click', () => {
		const testFunc: State['openModal'] = (id: ModalId) => {};

		const { getByText } = render(<AddWordButton openModal={testFunc} />);
		const node = getByText('+ Add a word');
		fireEvent.click(node);
		expect(testFunc).toHaveBeenCalled();
	});

	afterEach(cleanup);
});
