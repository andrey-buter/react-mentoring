import React from 'react';

interface Props {
	count: number | undefined
}

const WordListCounterMessage = (props: Props) => {
	const { count } = props;
	let message = 'Loading...';

	if (0 === count) {
		message = 'No Words Found';
	} else
	if (1 === count) {
		message = '1 Word Found';
	} else {
		message = `${count} Words Found`;
	}

	return (
		<div>
			{message}
		</div>
	);
}

export default WordListCounterMessage;
