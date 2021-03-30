/// <reference types="react" />
import { ModalModel, Word } from '@Models/index';
interface State {
    words: Word[];
    modal: ModalModel;
    closeModal: () => void;
    updateWords: (words: Word[]) => void;
}
declare const _default: import("react-redux").ConnectedComponent<(props: State) => JSX.Element, Pick<State, never>>;
export default _default;
