import { Store } from '@/Store/Models';
import { Word } from '@Models/index';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';

import styled from 'styled-components';

interface State {
	words: Word[],
}

const WordDetails = (props: State) => {
	let { wordId } = useParams<{ wordId: string }>();

	const word = props.words.filter((word) => word.id === wordId).shift();

	if (!word) {
		return <Redirect to='/' />;
	}

	return <>
		<div>
			<div>
				<div>Selection</div>
				<div>
					{word.selection}
				</div>
			</div>
			<div>
				<div>Origin word:</div>
				<div>
					{word.originWord}
				</div>
			</div>
			<div>
				<div>Translation</div>
				<div>
					{word.translation}
				</div>
			</div>
			<div>
				<div>URL</div>
				<div>
					{word.uri}
				</div>
			</div>
			<div>
				<div>Start Range</div>
				<div>
					{JSON.stringify(word.startRange)}
				</div>
			</div>
			<div>
				<div>End Range</div>
				<div>
					{JSON.stringify(word.endRange)}
				</div>
			</div>
		</div>
	</>
}

const mapStateToProps = (state: Store) => {
	const { wordsState } = state;

	return {
		words: wordsState.words
	}
}

export default connect(mapStateToProps)(WordDetails);
