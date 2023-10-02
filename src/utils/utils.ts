interface MapOf<T> {
	[key: string]: T;
}

export function _isNil(value: any) {
	return value == undefined;
}

export function _isEmpty(value: any) {
	if (Array.isArray(value)) return value.length;
	if (typeof value === 'object') return Object.keys(value).length;
	return _isNil(value) || value === '';
}

export function _get(value: any, path: string, defaultValue?: any) {
	const pathChunks = path.split('.');

	let ans: any = value;

	for (let chunk of pathChunks) {
		if (ans) {
			ans = ans[chunk];
		}
	}

	return ans || defaultValue;
}

export function _clone(object: MapOf<any>, clonedObject: MapOf<any>) {
	for (let key in Object.keys(object)) {
		if (typeof object[key] === 'object') {
			_clone(object[key], clonedObject[key]);
		} else {
			clonedObject[key] = object[key];
		}
	}
}

export function _deepClone(object: MapOf<any>) {
	const clonedObject = {};

	_clone(object, clonedObject);

	return clonedObject;
}
