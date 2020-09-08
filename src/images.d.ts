declare module '*.jpg' {
	const value: any;

	export default value;
}

declare module '*.jpeg' {
	const value: any;

	export default value;
}

declare module '*.png' {
	const value: any;

	export default value;
}

declare module '*.gif' {
	const value: any;

	export default value;
}

// origin https://github.com/gregberge/svgr/issues/38
interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> { }

declare module '*.svg' {
	const value: SvgrComponent;
	export default value;
}
