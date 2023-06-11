type Status = 'ok' | 'loading' | 'error' // или

const staticX: Status = 'loading'

const arr: (number | string)[] = ['', 1]

function printID(id: number | string): void {
	if (typeof id === 'string') {
		console.log(id.toUpperCase)
	} else {
		console.log(id)
	}
}

function welcome(person: [string, string] | string) {
	if (Array.isArray(person)) {
		console.log('Hello', person.join(' '))
	} else {
		console.log('Hello', person)
	}
}

type Level = 'junior' | 'middle' | 'senior'

interface Developer {
	login: string
	skills: string[]
	level: Level
}

function gradeDeveloper(user: { level: Level }, newLevel: Level) {
	user.level = newLevel
}

const dev1: Developer = {
	level: 'junior',
	login: 'sdfsfd',
	skills: ['HTML', 'CSS', 'JS']
}

gradeDeveloper(dev1, 'middle')
