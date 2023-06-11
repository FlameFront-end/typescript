function sum(a: number, b: number): number {
	return a + b
}

const sum2 = (a: number, b: number): number => a + b
const sum3 = function sum(a: number, b: number): number {
	return a + b
}

function log(name: string, userId?: string) {
	console.log('Hello', name)
} // что-то возвращает
// ?: необязательно

function crash(): never {
	throw new Error('crash')
} // всегда ошибка

function average(...nums: number[]) {
	const sum = nums.reduce((current, total) => current + total, 0)
	return sum / nums.length
}

function slice(str: string, start: number, end?: number): string {
	let newStr = ''

	let lastIndex: number

	if (end) {
		lastIndex = end > str.length ? str.length : end
	} else {
		lastIndex = str.length
	}

	for (let i = start; i < lastIndex; i++) {
		newStr += str[i]
	}

	return newStr
}
