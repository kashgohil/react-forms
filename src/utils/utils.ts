interface MapOf<T> {
	[key: string]: T;
}

function _clone(object: MapOf<any>, clonedObject: MapOf<any>) {
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
