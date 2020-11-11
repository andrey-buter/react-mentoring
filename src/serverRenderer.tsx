import { UniversalRouter, UniversalRouterType } from '@Components/Router/Router';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoot } from './render-root';
import store from './Store/store';

function renderHTML(html: string, preloadedState: any) {
	return `
			<!doctype html>
			<html>
				<head>
					<meta charset=utf-8>
					<title>React Server Side Rendering</title>
					${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
				</head>
				<body>
					This is SSR
					<div id="root">${html}</div>
					<script>
						// WARNING: See the following for security issues around embedding JSON in HTML:
						// http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
						window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
					</script>
					<script src="/js/main.js"></script>
				</body>
			</html>
	`;
}

interface StaticRouterProps {
	basename?: string;
	location?: string | object;
}

export default function serverRenderer() {
	return (req: any, res: any) => {
		// This context object contains the results of the render
		const context = {};

		const Router = UniversalRouter<StaticRouterProps>(StaticRouter, {
			location: req.url
		});

		const htmlString = renderToString(renderRoot(store, Router as UniversalRouterType));

		// context.url will contain the URL to redirect to if a <Redirect> was used
		// if (context.url) {
		// 	res.writeHead(302, {
		// 		Location: context.url
		// 	});
		// 	res.end();

		// 	return;
		// }

		// const htmlString = renderToString(renderRoot());
		const preloadedState = store.getState();

		res.send(renderHTML(htmlString, preloadedState));
	};
}
