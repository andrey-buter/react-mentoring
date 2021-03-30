import { TEST_ANY } from '@/TestUntils/models/any.model';
import React from 'react';

interface MockComponentData {
	testId: string;
	path: string;
	componentName?: string; // if multi export
}

export const mockAComponent = (data: MockComponentData) => {
	const { testId, path: componentPath, componentName } = data;

	console.log([testId, componentPath, componentName]);

	if (!componentName) {
		return jest.mock(componentPath, () => jest.fn(() => (
			<div data-testid={testId}></div>
		)));
	}

	jest.mock(componentPath, () => ({
		[`${componentName}`]: jest.fn(() => (
			<div data-testid={testId}></div>
		))
	}));
}
