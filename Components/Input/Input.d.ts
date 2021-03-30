/// <reference types="react" />
interface Props {
    label?: string;
    type?: 'text';
    id?: string;
    value?: string;
    placeholder?: string;
    name: string;
}
declare const Input: (props: Props) => JSX.Element;
export default Input;
