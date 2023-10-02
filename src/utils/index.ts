import { ErrorType, ResultType } from '../constants';
import { DataType } from '../constants/dataTypes';
import { Field } from '../types/field';
import { MapOf } from '../types/types';
import { ValidationResult } from '../types/validation';
import { _get, _isEmpty, _isNil } from './utils';

function _numberValidator(field: Field, values: MapOf<any>): ValidationResult {
	const { min, max, required, customErrorMessage } = field.validation || {};

	let isValid = true;
	let errorType = undefined;
	let errorMessage = undefined;
	const value = _get(values, field.id, undefined);

	if (min && min > value) {
		isValid = false;
		errorType = ErrorType.MIN_FAILED;
		errorMessage = `value cannot be less than ${min}`;
	}
	if (max && max < value) {
		isValid = false;
		errorType = ErrorType.MAX_FAILED;
		errorMessage = `value cannot be more than ${max}`;
	}
	if (required && _isNil(value)) {
		isValid = false;
		errorType = ErrorType.REQUIRED_FAILED;
		errorMessage = `value cannot be empty`;
	}

	const validationResult = {
		errorType,
		result: isValid ? ResultType.PASSED : ResultType.FAILED,
	};

	return {
		...validationResult,
		errorMessage: customErrorMessage?.(validationResult) || errorMessage,
	} as ValidationResult;
}

function _textValidator(field: Field, values: MapOf<any>) {
	const { min, max, required, regex, customErrorMessage } = field.validation || {};

	let isValid = true;
	let errorType = undefined;
	let errorMessage = undefined;
	const value = _get(values, field.id, '');

	if (min && min > value.length) {
		isValid = false;
		errorType = ErrorType.MIN_FAILED;
		errorMessage = `length of value cannot be less than ${min}`;
	}
	if (max && max < value.length) {
		isValid = false;
		errorType = ErrorType.MAX_FAILED;
		errorMessage = `length of value cannot be more than ${max}`;
	}
	if (regex && !regex.test(value)) {
		isValid = false;
		errorType = ErrorType.REGEX_FAILED;
		errorMessage = `value did not pass regex test`;
	}
	if (required && _isEmpty(value)) {
		isValid = false;
		errorType = ErrorType.REQUIRED_FAILED;
		errorMessage = `value cannot be empty`;
	}

	const validationResult = {
		errorType,
		result: isValid ? ResultType.PASSED : ResultType.FAILED,
	};

	return {
		...validationResult,
		errorMessage: customErrorMessage?.(validationResult) || errorMessage,
	} as ValidationResult;
}

function _booleanValidator(field: Field, values: MapOf<any>) {
	const { required, customErrorMessage } = field.validation || {};

	let isValid = true;
	let errorType = undefined;
	let errorMessage = undefined;
	const value = _get(values, field.id, '');

	if (required && _isEmpty(value)) {
		isValid = false;
		errorType = ErrorType.REQUIRED_FAILED;
		errorMessage = `value cannot be empty`;
	}

	const validationResult = {
		errorType,
		result: isValid ? ResultType.PASSED : ResultType.FAILED,
	};

	return {
		...validationResult,
		errorMessage: customErrorMessage?.(validationResult) || errorMessage,
	} as ValidationResult;
}

function _arrayNumberValidator(field: Field, values: MapOf<any>) {
	return false;
}

function _arrayStringValidator(field: Field, values: MapOf<any>) {
	return false;
}

function _mapNumberValidator(field: Field, values: MapOf<any>) {
	return false;
}

function _mapStringValidator(field: Field, values: MapOf<any>) {
	return false;
}

function _dateValidator(field: Field, values: MapOf<any>) {
	return false;
}

function _fileValidator(field: Field, values: MapOf<any>) {
	return false;
}

function _emailValidator(field: Field, values: MapOf<any>) {
	return false;
}

function _phoneNumberValidator(field: Field, values: MapOf<any>) {
	return false;
}

function _nullValidator(field: Field, values: MapOf<any>) {
	return false;
}

function _undefinedValidator(field: Field, values: MapOf<any>) {
	return false;
}

function _voidValidator(field: Field, values: MapOf<any>) {
	return false;
}

function _customValidator(field: Field, values: MapOf<any>) {
	return false;
}

const CONFIG = {
	[DataType.TEXT]: _textValidator,
	[DataType.NUMBER]: _numberValidator,
	[DataType.BOOLEAN]: _booleanValidator,
	[DataType.ARRAY_NUMBER]: _arrayNumberValidator,
	[DataType.ARRAY_STRING]: _arrayStringValidator,
	[DataType.MAP_NUMBER]: _mapNumberValidator,
	[DataType.MAP_STRING]: _mapStringValidator,
	[DataType.DATE]: _dateValidator,
	[DataType.FILE]: _fileValidator,
	[DataType.EMAIL]: _emailValidator,
	[DataType.PHONE_NUMBER]: _phoneNumberValidator,
	[DataType.NULL]: _nullValidator,
	[DataType.VOID]: _voidValidator,
	[DataType.UNDEFINED]: _undefinedValidator,
	[DataType.CUSTOM]: _customValidator,
};

export function validate(fields: Field[], values: MapOf<any>) {
	const validation: any = {};

	for (let field of fields) {
		const _validator = CONFIG[field.type as DataType];
		validation[field.id] = _validator(field, values);
	}

	return validation;
}
