let word: string | null = null
const num = 12

if (num > 5) {
	word = 'abc'
}

// ! - точно со значением (не Null или Undefined)

console.log(word!.toUpperCase())

function printName(name?: string) {
	const fullName: string = name!
}

interface Person1 {
	name: string
	age: number
	sex: 'female' | 'male'
}

const people: Person1[] = [
	{ name: 'Artem', age: 19, sex: 'male' },
	{ name: 'Larisa', age: 19, sex: 'female' }
]

function printName2(person?: Person1) {
	console.log(person!.name)
}

const femalePeople = people.find(person => person.sex === 'female')!
