/// <reference types="react" />
import './FormField.scss';
interface Props {
    label: string;
    name: string;
    type?: string;
    error: string | undefined;
}
declare const FormField: (rawProps: Props) => JSX.Element;
export default FormField;
