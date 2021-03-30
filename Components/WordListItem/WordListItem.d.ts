/// <reference types="react" />
import { ModalId } from '@Models/index';
import { Word } from '@Models/word.model';
interface Props {
    word: Word;
}
interface State {
    openModal: (id: ModalId, data: Word) => void;
}
declare const _default: import("react-redux").ConnectedComponent<(props: Props & State) => JSX.Element, Pick<Props & State, "word">>;
export default _default;
