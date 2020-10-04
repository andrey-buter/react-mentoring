import { combineReducers } from 'redux';
import { modalReducer } from './modal.reducer';
import { wordsReducer } from './words.reducer';

const rootReducer = combineReducers({
	wordsState: wordsReducer,
	modalState: modalReducer
});

export default rootReducer;
