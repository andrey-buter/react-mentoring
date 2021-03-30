import React from 'react';
interface Props {
    children: React.ReactNode;
    title?: string;
}
interface State {
    close: () => void;
}
declare const Modal: (props: Props & State) => JSX.Element;
export { Modal };
declare const _default: import("react-redux").ConnectedComponent<(props: Props & State) => JSX.Element, Pick<Props & State, "title" | "children">>;
export default _default;
