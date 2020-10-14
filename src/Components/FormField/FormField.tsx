import { useField } from 'formik';
import React from 'react';

import './FormField.scss';

interface Props {
	label: string;
	name: string;
	type?: string;
}

const FormField = (rawProps: Props) => {
	const { label, ...props } = rawProps;
	const [field, meta, helpers] = useField(props);

	return (
		<div>
			<label>
				{label}
			</label>
			<input {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className='error'>{meta.error}</div>
			) : null}
		</div>
	);
};

export default FormField;
