import React, { ComponentType, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

// interface WithLoadingProps {
// 	loading: boolean;
// }

// const withLoading = <P extends object>(Component: ComponentType<P>) => {
// 	return class WithLoading extends React.Component<P & WithLoadingProps> {
// 		render() {
// 			const { loading, ...props } = this.props;

// 			return <Component {...props as P} />;
// 		}
// 	};
// }

// withLoading<WithLoadingProps>(BrowserRouter as ComponentType<WithLoadingProps>);

export interface UniversalRouterProps {
	children: ReactNode
}

export type UniversalRouterType = ComponentType<UniversalRouterProps>;

export function UniversalRouter<P>(RouterComponent: ComponentType<P>, parentProps: P) {
	return (props: UniversalRouterProps) => <RouterComponent {...parentProps as P}>{props.children}</RouterComponent>
}
