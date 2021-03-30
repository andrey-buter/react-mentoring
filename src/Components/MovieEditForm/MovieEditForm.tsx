import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { ObjectSchema } from 'yup';

import FormField from '@Components/FormField/FormField';
import './MovieEditForm.scss';
import { RemoteErrorsModel } from './RemoteErrors.model';
import { Values } from './Values.model';

interface Props {
	initialValues: Values,
	validationSchema: ObjectSchema,
	remoteErrorMessages: RemoteErrorsModel,
	submit: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
}

// test form https://www.techzaion.com/testing-formik-forms-with-react-testing-library
const MovieEditForm = (props: Props) => {
	const { initialValues, validationSchema, remoteErrorMessages, submit } = props;

	const isDisabled = (isValid: boolean, touched: object, isSubmitting: boolean): boolean => {
		return (isValid && Object.keys(touched).length === 0)
			|| !isValid
			|| isSubmitting
			|| Object.keys(remoteErrorMessages).length !== 0;
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={submit}
		>
			{({touched, isValid, isSubmitting}) => (
				<Form>
					<FormField name='title' label='Title' error={remoteErrorMessages.title} />
					<FormField name='voteAverage' label='Vote Average' type='number' error={remoteErrorMessages.title} />
					<FormField name='posterPath' label='Poster Path' error={remoteErrorMessages.posterPath} />
					<FormField name='overview' label='Overview' error={remoteErrorMessages.overview} />
					<FormField name='budget' label='Budget' type='number' error={remoteErrorMessages.budget} />

					<button disabled={isDisabled(isValid, touched, isSubmitting)} type='submit'>Submit</button>
				</Form>
			)}
		</Formik>
	);
}

export default MovieEditForm;
