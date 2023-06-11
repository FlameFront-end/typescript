// Сужение
function example1(x?: number | string) {
	if (typeof x === 'string') {
		x.toUpperCase()
	} else if (typeof x === 'number') {
		x.toFixed()
	} else if (x === undefined) {
		console.log('Нет значения')
	} else {
		// never
	}
}

function example2(strs: string | string[] | number) {
	// if (typeof strs === 'object') {} null тоже объект
	// if (strs && typeof strs === 'object') {} уже точно объект
}

function example3(x: number[] | Date) {
	if (x instanceof Date) {
		x.getDate()
	} else {
		x.concat([])
	}
}

type Fish = { swim: () => void }
type Bird = { fly: () => void }

function move(animal: Fish | Bird) {
	if ('swim' in animal) {
		return animal.swim
	}
	return animal.fly
}

export {}
