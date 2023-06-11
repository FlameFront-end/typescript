export interface Car {
	wheels: number
	brand: string
	type: string
	isNew?: boolean

	[key: string]: unknown //не обязательные
}

const car: Car = {
	wheels: 4,
	brand: 'BMW',
	type: 'Sedan',
	isNew: false
}
