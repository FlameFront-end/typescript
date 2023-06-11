function tuplePairCreate<T>(first: T) {
	return function <U>(second: U): [T, U] {
		return [first, second]
	}
}

const toTupleWith1 = tuplePairCreate(2)
const val1 = toTupleWith1(2)
const val2 = toTupleWith1(1)

export {}

export function createMap<T>(list: T[]) {
	return function <U>(cb: (x: T) => U) {
		const result = []

		for (let el of list) {
			result.push(cb(el))
		}

		return result
	}
}
