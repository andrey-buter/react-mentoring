import { UniversalRouter, UniversalRouterType } from '@Components/Router/Router';
import React, { ComponentType } from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, BrowserRouterProps } from 'react-router-dom';
import { Store } from 'redux';
import App from './App';
import store from './Store/store';

export function renderRoot(store: Store<any>, Router: UniversalRouterType) {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<App UniversalRouter={Router} />
			</Provider>
		</React.StrictMode>
	)
}

const Router = UniversalRouter<BrowserRouterProps>(BrowserRouter, {
	basename: '/'
});

render(
	renderRoot(store, Router as UniversalRouterType),
	document.getElementById('app')
);
