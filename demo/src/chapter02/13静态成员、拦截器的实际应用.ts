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

/* 
	Object.getOwnPropertyDescriptor
	查看某个属性的描述对象（value、writable...）
	这个方法每次获取都会开辟一个新的空间
*/
const dataProp = Object.getOwnPropertyDescriptor(People.prototype, 'doEat')


export {
	People,
	dataProp
}