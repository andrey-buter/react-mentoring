import { useField } from 'formik';
import React from 'react';

import './FormField.scss';

interface Props {
	label: string;
	name: string;
	type?: string;
	error: string | undefined;
}

const FormField = (rawProps: Props) => {
	const { label, error, ...props } = rawProps;
	const [field, meta, helpers] = useField(props);

	return (
		<div>
			<label>
				{label}
			</label>
			<input {...field} {...props} />
			{(meta.touched && meta.error) || error ? (
				<div className='error'>{error?.replace('{{field}}', label) || meta.error}</div>
			) : null}
		</div>
	);
};

export default FormField;
