import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { ObjectSchema } from 'yup';

import FormField from '@Components/FormField/FormField';
import './MovieEditForm.scss';
import { Values } from './Values.model';

interface Props {
	initialValues: Values,
	validationSchema: ObjectSchema,
	submit: (values: Values, formikHelpers: FormikHelpers<Values>) => void;
}

const MovieEditForm = (props: Props) => {
	const { initialValues, validationSchema, submit } = props;

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={submit}
		>
			{({touched, isValid, isSubmitting}) => (
				<Form>
					<FormField name='title' label='Title' />
					<FormField name='voteAverage' label='Vote Average' type='number' />
					<FormField name='posterPath' label='Poster Path' />
					<FormField name='overview' label='Overview' />
					<FormField name='budget' label='Budget' type='number' />

					<button disabled={(isValid && Object.keys(touched).length === 0) || !isValid || isSubmitting} type='submit'>Submit</button>
				</Form>
			)}
		</Formik>
	);
}

export default MovieEditForm;
