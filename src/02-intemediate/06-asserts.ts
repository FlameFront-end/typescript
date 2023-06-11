type User = {
	name: string
	displayName: string | null
}

function assertDisplayName(
	user: User
): asserts user is User & { displayName: string } {
	if (!user.displayName) throw new Error('Юзер не имеет дисплей имени')
}

function logUserByDisplayName(user: User) {
	assertDisplayName(user)
	console.log(user.displayName.toUpperCase())
}
