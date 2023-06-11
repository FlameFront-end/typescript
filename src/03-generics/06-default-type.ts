interface AnyObj {
	[key: string]: unknown
}

async function request<T = AnyObj>(url: string): Promise<T> {
	const response = await fetch(url)
	return response.json()
}
interface Todo {
	id: string
	completed: boolean
	title: string
}

const data = request<Todo[]>('')

export {}
