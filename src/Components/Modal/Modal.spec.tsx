import { TEST_ANY } from '@/TestUntils/models/any.model';
import { screen } from '@testing-library/dom';
import { act, render, RenderResult } from '@testing-library/react';
import React from 'react';
import { Modal } from './Modal';

const testBlockId = 'testBlockId';

// mockAComponent({
// 	testId: testBlockId,
// 	path: '@Components/Modal/styled-components',
// 	componentName: 'ModalTitleSc'
// });

fdescribe('Modal', () => {
	let renderResult: RenderResult;
	let onClose: TEST_ANY;

	afterEach(() => {
		onClose = null;
	});

	const renderModal = (title?: string) => {
		onClose = jest.fn();

		act(() => {
			renderResult = render(
				<Modal title={title} close={onClose}>
					<div data-test-id='modal-children'></div>
				</Modal>
			);
		})
	}

	it('should render modal without title', () => {
		renderModal();
		expect(renderResult.container.querySelector('button + [data-test-id="modal-children"]')).toBeDefined();
	});

	it('should render modal with title', () => {
		const title = 'Test title';

		renderModal(title);
		expect(screen.getByText(title)).toBeDefined();
	});

	it('should close modal on click Close button', () => {
		renderModal();
		act(() => {
			renderResult.container
				?.querySelector('button')
				?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});
		expect(onClose).toHaveBeenCalledTimes(1);
	});

	it('should close modal on click background overlay', () => {
		renderModal();
		act(() => {
			renderResult.container
				.querySelector('body > div > div') // ASK: about selector
				?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});
		expect(onClose).toHaveBeenCalledTimes(1);
	});

	it('should NOT close modal on click modal container', () => {
		renderModal();
		act(() => {
			renderResult.container
				.querySelector('body > div > div > div')
				?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
		});
		expect(onClose).toHaveBeenCalledTimes(0);
	});
});
