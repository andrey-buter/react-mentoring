import { UniversalRouterType } from '@Components/Router/Router';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import App from './App';

export function renderRoot(store: Store<any>, Router: UniversalRouterType) {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<App UniversalRouter={Router} />
			</Provider>
		</React.StrictMode>
	)
}
