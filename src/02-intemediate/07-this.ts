//<button onClick='clickHandler'>Click me!</button>

function clickHandler(this: HTMLButtonElement, event: Event) {
	this.disabled = true
}
// this: HTMLDivElement --- ошибка (нету disabled)
