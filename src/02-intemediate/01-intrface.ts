interface User1 {
	readonly email: string //нельзя изменить в будущем
	readonly login: string
	password: string
}

interface User1 {
	isOnline?: boolean //расширил
}

interface Window {
	isAuth: boolean
}

window.isAuth

interface Person {
	readonly firstName: string
	lastName: string
	phone?: string
	yearOfBirth: number
}

interface Employee extends User1, Person {
	//расширился от User1, Person
	contractStart: Date
}

interface Dev extends Employee {
	// всё что было у User1, Person, Employee + своё
	skills: string[]
	phone: string //переопределил на обязательное, но нельзя переопределить типы!
	level?: 'junior' | 'middle' | 'senior'
	say(): void
	code?: (arg: string) => void
}
