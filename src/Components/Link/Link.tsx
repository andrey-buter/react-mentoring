import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';

const Link = (props: { children: ReactNode, to: string }) => <a href={props.to}>{props.children}</a>;

Link.propTypes = {
	to: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.string
	])
	// tslint:disable-next-line:no-any
	// children: (props: any, propName: any, componentName: any) => {
	// 	console.log(props, propName, componentName);
	// 	debugger;
	// }
};

export default Link;
