/// <reference types="react" />
import { Word } from '@Models/index';
interface Props {
    data?: Word | null | undefined;
    submit?: (word: Word) => void;
}
declare const WordEditForm: (props: Props) => JSX.Element;
export default WordEditForm;
