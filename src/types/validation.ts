import { ResultType } from '../constants';
import { DataType } from '../constants/dataTypes';

export interface ValidationSchema {
	regex?: RegExp;
	min?: number;
	max?: number;
	type: DataType;
	required?: boolean;
	customErrorMessage?(result: ValidationResult): string;
}

interface ValidationResultPassed {
	result: ResultType.PASSED;
}

interface ValidationResultFailed {
	result: ResultType.FAILED;
	errorMessage?: string;
}

export type ValidationResult = ValidationResultFailed | ValidationResultPassed;
