import { UniversalRouter, UniversalRouterType } from '@Components/Router/Router';
import {hydrate} from 'react-dom';
import { BrowserRouter, BrowserRouterProps } from 'react-router-dom';
import { renderRoot } from './render-root';
import store from './Store/store';

const Router = UniversalRouter<BrowserRouterProps>(BrowserRouter, {
	basename: '/'
});

hydrate(
	renderRoot(store, Router as UniversalRouterType),
	document?.getElementById('app')
);
