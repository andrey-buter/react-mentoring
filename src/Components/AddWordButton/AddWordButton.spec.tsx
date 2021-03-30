import { ModalId } from '@Models/index';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import AddWordButton from './AddWordButton';
import { State } from './state.model';

xdescribe('AddWordButton', () => {
	xit('should trigger open modal on click', () => {
		const testFunc: State['openModal'] = (id: ModalId) => {};

		const { getByText } = render(<AddWordButton />);
		const node = getByText('+ Add a word');
		fireEvent.click(node);
		expect(testFunc).toHaveBeenCalled();
	});
});
