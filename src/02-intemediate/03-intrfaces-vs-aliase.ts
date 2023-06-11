// Алиасы (type)
// 1) примитивы, union, intersection
// 2) type window нельзя создать

// Интерфейсы (interface)
// 1) Когда мы хотим расширять интерфейс в будущем
// 2) Когда для классов создаём

// Алиасы (type)
type Product = {
	price: number
	isNew: boolean
	isSale: boolean
	title: string
}

type Vehicle = {
	wheels: number
	year: number
	brand: string
}

type Car = {
	type: string
	model: string
} & Product &
	Vehicle

// Интерфейсы (interface)
interface IProduct {
	price: number
	isNew: boolean
	isSale: boolean
	title: string
}

interface IVehicle {
	wheels: number
	year: number
	brand: string
}

interface ICar extends IProduct, IVehicle {
	type: string
	model: string
}
