/// <reference types="react" />
import '@/Assets/styles/styles.scss';
import { Word } from '@Models/word.model';
interface Props {
    setWords: (words: Word[]) => void;
}
declare const _default: import("react-redux").ConnectedComponent<(props: Props) => JSX.Element, Pick<Props, never>>;
export default _default;
