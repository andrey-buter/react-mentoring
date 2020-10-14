import { Form, Formik, FormikHelpers } from 'formik';
import React, { MouseEvent } from 'react';
import { array, number, object, string } from 'yup';

import FormField from '@Components/FormField/FormField';
import './MovieEditForm.scss';

interface Props {
	data?: Values | undefined,
}

interface Values {
	title: string;
	voteAverage: number;
	posterPath: string;
	overview: string;
	budget: number;
	genres: string[];
}

function isFloat(n: number | null | undefined) {
	return Number(n) === n && n % 1 !== 0;
}

const MovieEditForm = (props: Props) => {
	const onSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
		setTimeout(() => {
			debugger
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 500);
	}

	const schema = object().shape({
		title: string()
			.typeError('Title should be a string')
			.required('Title is required'),
		voteAverage: number()
			.typeError('Vote Average should be a number')
			.test(
				'is-decimal',
				'Vote Average is invalid decimal',
				isFloat
			),
		posterPath: string()
			.typeError('Poster should be a string')
			.required('Poster path is required'),
		overview: string()
			.typeError('Overview should be a string')
			.required('Overview is required'),
		budget: number()
			.typeError('Budget should be a number')
			.positive('Budget should be a positive number')
			.integer('Budget should be a number')
		// genres: array().required()
	});

	const defaultValues = {
		title: '',
		voteAverage: 0.1,
		posterPath: '',
		overview: '',
		budget: 0,
		genres: []
	};

	const initialValues = {
		...defaultValues,
		...props.data
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={schema}
			onSubmit={onSubmit}
		>
			{({touched, isValid}) => (
				<Form>
					<FormField name='title' label='Title' />
					<FormField name='voteAverage' label='Vote Average' type='number' />
					<FormField name='posterPath' label='Poster Path' />
					<FormField name='overview' label='Overview' />
					<FormField name='budget' label='Budget' type='number' />
					{/* <FormField name='genres' label='Genres' /> */}

					<button disabled={(isValid && Object.keys(touched).length === 0) || !isValid} type='submit'>Submit</button>
				</Form>
			)}
		</Formik>
	);
}

export default MovieEditForm;
