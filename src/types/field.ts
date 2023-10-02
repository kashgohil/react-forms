import { ConditionType } from '../constants/condition';
import { DataType } from '../constants/dataTypes';
import { ValidationSchema } from './validation';

export interface Condition {
	field: string;
	value: string;
	type: ConditionType;
}

export interface Dependency {
	[key: string]: Condition[];
}

interface BaseField {
	id: string;
	label?: string;
	placeholder?: string;
	dependency?: Dependency;
	validation?: ValidationSchema;
}

interface StandardField extends BaseField {
	type: Omit<DataType, DataType.CUSTOM>;
}

interface CustomField extends BaseField {
	type: DataType.CUSTOM;
}

export type Field = StandardField | CustomField;
