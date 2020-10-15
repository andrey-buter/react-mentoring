import { FormikHelpers } from 'formik';
import React from 'react';
import { number, object, string } from 'yup';

import MovieEditForm from './MovieEditForm';
import './MovieEditForm.scss';
import { Values } from './Values.model';

interface Props {
	data?: Values | undefined,
}

function isFloat(n: number | null | undefined) {
	return Number(n) === n && n % 1 !== 0;
}

const MovieEditFormContainer = (props: Props) => {
	const onSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
		// do request

		alert(JSON.stringify(values, null, 2));
		setSubmitting(false);
	}

	const validationSchema = object().shape({
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

	return <MovieEditForm initialValues={initialValues} validationSchema={validationSchema} submit={onSubmit} />;
}

export default MovieEditFormContainer;
