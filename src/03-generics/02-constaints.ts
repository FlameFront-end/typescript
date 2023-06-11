function getLen<T extends { length: number }>(arg: T): number {
	return arg.length
}

getLen('abc')
getLen(['abc'])
getLen({ length: 12 })
// getLen(123)
// getLen(true)
