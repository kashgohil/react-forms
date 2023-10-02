import { ValidationResult, ValidationSchema } from '../types/validation';
import { DataType } from './../constants/dataTypes';
import { _deepClone } from './utils';

export function SchemaBuilder(initialSchema?: ValidationSchema) {
	const schema: ValidationSchema = initialSchema
		? (_deepClone(initialSchema) as ValidationSchema)
		: ({ type: DataType.TEXT } as ValidationSchema);

	return {
		type(type: DataType) {
			schema.type = type;
			return this;
		},
		min(min: number) {
			schema.min = min;
			return this;
		},
		max(max: number) {
			schema.max = max;
			return this;
		},
		regex(regex: RegExp) {
			schema.regex = regex;
			return this;
		},
		required(required: boolean) {
			schema.required = required;
			return this;
		},
		customErrorMessage(fn: (result: ValidationResult) => string) {
			return (schema.customErrorMessage = fn);
		},
		build() {
			return schema;
		},
	};
}
