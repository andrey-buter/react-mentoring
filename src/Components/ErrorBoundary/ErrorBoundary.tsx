import React, { Component, ErrorInfo } from 'react';
import { StateModel } from './state.model';

export default class ErrorBoundary extends Component<{}, StateModel> {

	static getDerivedStateFromError(error: Error) {
		// Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
		return { hasError: true };
	}
	constructor(props = {}) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
		console.log(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <h1>Oops, something went wring</h1>;
		}

		return this.props.children;
	}
}
