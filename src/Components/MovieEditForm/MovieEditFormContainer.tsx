import { FormikHelpers } from 'formik';
import React, { useState } from 'react';
import { number, object, string } from 'yup';

import { isFloat, mapRemoteErrors } from './helpers';
import MovieEditForm from './MovieEditForm';
import './MovieEditForm.scss';
import { RemoteErrorsModel } from './RemoteErrors.model';
import { Values } from './Values.model';

interface Props {
	movieId?: string | undefined;
	data?: Values | undefined,
}

const MovieEditFormContainer = (props: Props) => {
	const [remoteErrorMessages, setRemoteErrorMessages] = useState<RemoteErrorsModel>({});
	const [successResponse, setSuccessResponse] = useState<boolean>(false);

	const isUpdate = !!(props.data && props.movieId);

	const onSubmit = async (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
		const url = 'http://localhost:4000/movies';
		const data = {
			...(isUpdate ? { id: props.movieId } : {}),
			...values
		}
		const response = await fetch(url, {
			method: isUpdate ? 'PUT' : 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const responseData = await response.json();

		if (response.ok) {
			setSuccessResponse(true);
		} else {
			setRemoteErrorMessages(mapRemoteErrors(responseData.messages));
		}

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

	return <>
		{successResponse
			? <p>Success!</p>
			: <MovieEditForm
				initialValues={initialValues}
				validationSchema={validationSchema}
				remoteErrorMessages={remoteErrorMessages}
				submit={onSubmit}
			/>}
	</>;
}

export default MovieEditFormContainer;
