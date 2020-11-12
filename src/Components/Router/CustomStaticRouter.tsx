import React, { ReactNode } from 'react';
import { StaticRouter } from 'react-router-dom';

interface Props {
	children: ReactNode
}

function CustomStaticRouter(props: Props) {
	return (<StaticRouter basename='/'>{props.children}</StaticRouter>);
}}

export default CustomStaticRouter;
