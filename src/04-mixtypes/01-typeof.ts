const str = 'str'

type x = typeof str

function average(...nums: number[]) {
	const sum = nums.reduce((current, total) => current + total, 0)
	return sum / nums.length
}

type fn = typeof average

const max: fn = (...numbers) => Math.max(...numbers)

type ReturnFn = ReturnType<typeof average> //number (что возвращает)
