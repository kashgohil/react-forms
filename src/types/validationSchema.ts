import { DataType } from "../constants/dataTypes";

export interface ValidationSchema {
	regex?: RegExp;
	min?: number;
	max?: number;
  type?: DataType;
	required?: boolean;
}
