import React from 'react';
import { Field } from '../types/field';
import { MapOf } from '../types/types';
import { ValidationSchema } from '../types/validation';
import { validate } from '../utils';

export function useForm(fields: Field[], values: MapOf<any>) {
	const schema = React.useMemo(() => {
		const schema: MapOf<ValidationSchema | undefined> = {};

		for (let field of fields) {
			schema[field.id] = field.validation;
		}
	}, [fields]);

	validate(fields, values);
}
