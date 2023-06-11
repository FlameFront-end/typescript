// Перегрузка функций

// function add(a: number | string, b: number | string): string | number {
// 	return a + b
// } // ошибка

function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a: any, b: any): any {
	return a + b
}

type asyncCb = (res: number) => number
function asyncSum(a: number, b: number): Promise<number>
function asyncSum(a: number, b: number, cb: asyncCb): number

function asyncSum(a: number, b: number, cb?: asyncCb): any {
	const result = a + b
	if (cb) {
		return cb(result)
	}

	return Promise.resolve(result)
}

function head(value: string): string
function head(value: number[]): number
function head(value: boolean[]): boolean

function head(value: any): any {
	return value[0]
}
const x = head('str')
const y = head([1, 2])
const z = head([true, false])

export {}
