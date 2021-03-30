import { Component, ErrorInfo } from 'react';
import { StateModel } from './state.model';
export default class ErrorBoundary extends Component<{}, StateModel> {
    static getDerivedStateFromError(error: Error): {
        hasError: boolean;
    };
    constructor(props?: {});
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): {} | null | undefined;
}
