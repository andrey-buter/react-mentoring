import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface Props {
	children: ReactNode
}

function CustomBrowserRouter(props: Props) {
	return (<BrowserRouter basename='/'>{props.children}</BrowserRouter>);
}}

export default CustomBrowserRouter;
