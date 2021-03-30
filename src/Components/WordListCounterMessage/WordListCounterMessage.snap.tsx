import React from 'react';
import renderer from 'react-test-renderer';
import WordListCounterMessage from './WordListCounterMessage';

describe('WordListCounterMessage snapshot', () => {
	it('renders correctly', () => {
		const tree = renderer
			.create(<WordListCounterMessage count={undefined} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
})
