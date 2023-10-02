import { DataType } from '../constants/dataTypes';
import { Field } from '../types/field';
import { MapOf } from '../types/types';

function _numberValidator() {}
function _textValidator() {}
function _booleanValidator() {}
function _arrayNumberValidator() {}
function _arrayStringValidator() {}
function _mapNumberValidator() {}
function _mapStringValidator() {}
function _dateValidator() {}
function _fileValidator() {}
function _emailValidator() {}
function _phoneNumberValidator() {}
function _nullValidator() {}
function _undefinedValidator() {}
function _voidValidator() {}
function _customValidator() {}

export function validate(fields: Field[], values: MapOf<any>) {
	for (let field of fields) {
		switch (field.type) {
			case DataType.TEXT:
				return _textValidator();
			case DataType.NUMBER:
				return _numberValidator();
			case DataType.BOOLEAN:
				return _booleanValidator();
			case DataType.ARRAY_NUMBER:
				return _arrayNumberValidator();
			case DataType.ARRAY_STRING:
				return _arrayStringValidator();
			case DataType.MAP_NUMBER:
				return _mapNumberValidator();
			case DataType.MAP_STRING:
				return _mapStringValidator();
			case DataType.DATE:
				return _dateValidator();
			case DataType.FILE:
				return _fileValidator();
			case DataType.EMAIL:
				return _emailValidator();
			case DataType.PHONE_NUMBER:
				return _phoneNumberValidator();
			case DataType.NULL:
				return _nullValidator();
			case DataType.VOID:
				return _voidValidator();
			case DataType.UNDEFINED:
				return _undefinedValidator();
			case DataType.CUSTOM:
				return _customValidator();
			default:
				return false;
		}
	}
}
