class People {
	name: string
	age: number
	address: string
	constructor(_name: string, _age: number, _address: string) {
		this.name = _name
		this.age = _age
		this.address = _address
	}
	doEat(who: string, where: string) {
		console.log('who', who, 'where', where)
	}
	doSleep() {}
}

class Dog {
	name: string
	age: number
	constructor(_name: string, _age: number) {
		this.name = _name
		this.age = _age
	}
	doEat(who: string, where: string) {
		console.log('who', who, 'where', where)
	}
	doSleep() {}
}



export {
	People, Dog
}
