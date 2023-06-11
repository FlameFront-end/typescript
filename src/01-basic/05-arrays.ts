const numbers = [1, 2, 3, 4]
const strs: string[] = []
const strs2: Array<string> = []

interface Car1 {
	wheels: number
	brand: string
}

const cars: Car1[] = []
cars.push({ brand: '', wheels: 3 })

const arrOfArr: string[][] = []

function printArr(arr: unknown[]) {
	arr.forEach((el, index) => {
		console.log(el)
	})
}
