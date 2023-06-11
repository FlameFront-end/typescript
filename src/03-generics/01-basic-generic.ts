// function head(value: string): string
// function head(value: number[]): number
// function head(value: string[]): string
// function head(value: symbol[]): symbol
// function head(value: Date[]): Date
// function head(value: boolean[]): boolean
//
// function head(value: any): any {
// 	return value[0]
// }

interface modeIData {
	title: string
	value: string // number [] boolean
}

type TypeFactory<T> = T

type XType = TypeFactory<string>
type XType2 = TypeFactory<number>
type XType3 = TypeFactory<boolean>

function toArray<T>(...arg: T[]) {
	return arg
}
toArray(1, 2, 3)
toArray('a', 'b', 'c')

function head(value: string): string
function head<T>(value: T[]): T

function head(value: any): any {
	return value[0]
}

interface ModelDate<T> {
	title: string
	value: T
}

const obj1: ModelDate<number> = {
	title: 'str',
	value: 12
}

const obj2: ModelDate<Array<number>> = {
	title: 'str',
	value: [1, 2, 3]
}

function append<T>(el: T, list: T[]): T[] {
	return list.concat(el)
}

append(1, [123])
append('', ['str'])
