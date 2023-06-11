function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
	return obj[key]
}

interface Laptop {
	brand: string
}

type F = Laptop['brand']

const obj1 = { a: 1, b: 2, c: 3 }
prop('a', obj1)
// prop('d', obj1) //нельзя

function keys<O extends object>(obj: O): Array<keyof O> {
	const currentKeys = []
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) currentKeys.push(key)
	}

	return currentKeys
}

function values<O extends object>(obj: O): Array<O[keyof O]> {
	const currentValues = []

	for (let key in obj) {
		currentValues.push(obj[key])
	}

	return currentValues
}

export {}
