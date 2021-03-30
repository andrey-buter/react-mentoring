/// <reference types="react" />
import { GroupByWords } from '@Models/group-by-words.enum';
import { Word } from '@Models/word.model';
interface State {
    words: Word[];
    groupBy: GroupByWords;
}
declare const _default: import("react-redux").ConnectedComponent<(props: State) => JSX.Element, Pick<State, never>>;
export default _default;
