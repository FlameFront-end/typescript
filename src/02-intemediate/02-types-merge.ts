type Union1 = 'a' | 'b' | 'c' | 'd' // Алиас
type Union2 = 'a' | 'e' | 'c' | 'i'

type Union3 = Union1 | Union2 // будут все из 1 и 2
type Union4 = Union1 & Union2 // только и в 1 и в 2 (a и c)

type Union5 = { a: string; b: string; c: number } & {
	a: string
	t: boolean
	z: null
} // все возможные ключи

type Union6 = {
	date: Date
} & Union1 &
	Union2 // будет всё что есть в Union6, Union1, Union2
