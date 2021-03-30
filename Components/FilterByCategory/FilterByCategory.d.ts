/// <reference types="react" />
import { GroupByWords } from '@Models/group-by-words.enum';
interface State {
    groupBy: GroupByWords;
    updateGroupBy: (groupBy: GroupByWords) => void;
}
declare const _default: import("react-redux").ConnectedComponent<(props: State) => JSX.Element, Pick<State, never>>;
export default _default;
