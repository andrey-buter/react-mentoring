/// <reference types="react" />
import { ModalId } from '@Models/index';
interface State {
    openModal: (id: ModalId) => void;
}
declare const _default: import("react-redux").ConnectedComponent<(props: State) => JSX.Element, Pick<State, never>>;
export default _default;
