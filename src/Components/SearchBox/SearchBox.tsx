import Input from '@Components/Input/Input';
import ButtonSc from '@StyledComponents/Button/Button';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

interface Values {
	searchQuery: string;
}

const SearchBox = () => {
	const history = useHistory();
	const { searchQuery } = useParams<{ searchQuery: string | undefined }>();

	const submit = (values: Values) => {
		history.push(`/search/${values.searchQuery}`);
	};

	const initialValues: Values = {
		searchQuery: searchQuery || ''
	};

	return (
		<div>
			<Formik
				initialValues={initialValues}
				onSubmit={submit}
			>
				<Form>
					<Field placeholder='Search words' name='searchQuery' />

					<ButtonSc type='submit'>Search</ButtonSc>
				</Form>
			</Formik>
		</div>
	);
}

export default SearchBox;
