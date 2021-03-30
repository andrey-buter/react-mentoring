/// <reference types="react" />
import { FormikHelpers } from 'formik';
import { ObjectSchema } from 'yup';
import './MovieEditForm.scss';
import { RemoteErrorsModel } from './RemoteErrors.model';
import { Values } from './Values.model';
interface Props {
    initialValues: Values;
    validationSchema: ObjectSchema;
    remoteErrorMessages: RemoteErrorsModel;
    submit: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
}
declare const MovieEditForm: (props: Props) => JSX.Element;
export default MovieEditForm;
