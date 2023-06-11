function printPoint(point: { x: string; y: string }): void {
	console.log(`x: ${point.x} and y: ${point.y}`)
}

const obj1 = {
	x: '1',
	y: '2',
	z: 3
}

printPoint(obj1)

function printName(user: { firstName: string; lastName?: string }) {
	console.log(user.firstName.toUpperCase())
	if (user.lastName) {
		console.log(user.lastName.toLowerCase())
	}
}
printName({ firstName: 'Artem' })

printName({ firstName: 'Artem', lastName: 'Kaliganov' })

interface User {
	login: string
	email: string
	password: string
	isOnline: boolean
	lastVisited: Date
}

const use1: User = {
	email: 'dsfsd',
	isOnline: false,
	password: '12313',
	login: 'Artem',
	lastVisited: new Date(2022, 6, 2)
}

interface Admin {
	login: string
	email: string
	password: string
	isOnline: boolean
	lastVisited: Date
	role: string
}

const admin: Admin = {
	email: '',
	isOnline: false,
	password: '12313',
	login: 'Artem',
	lastVisited: new Date(2022, 6, 2),
	role: 'superAdmin'
}

function login(user: { login: string; password: string }) {
	if (user.login.length > 0 && user.login.length > 0) {
		console.log('Hello', user.login)
	}
}

login(use1)

export {}
