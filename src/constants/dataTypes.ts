export enum DataType {
	// primitive
	TEXT = 'TEXT',
	NUMBER = 'NUMBER',
	BOOLEAN = 'BOOLEAN',

	// falsy
	VOID = 'VOID',
	NULL = 'NULL',
	UNDEFINED = 'UNDEFINED',

	// maps
	MAP_NUMBER = 'MAP_NUMBER',
	MAP_STRING = 'MAP_STRING',

	// arrays
	ARRAY_NUMBER = 'ARRAY_NUMBER',
	ARRAY_STRING = 'ARRAY_STRING',

	// custom
	DATE = 'DATE',
	FILE = 'FILE',
	EMAIL = 'EMAIL',
	CUSTOM = 'CUSTOM',
	PHONE_NUMBER = 'PHONE_NUMBER',
}
