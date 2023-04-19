class People {
	name: string
	age: number
	address: string
	// 将一个变量归属于类，那么这个时候这个变量就是一个静态属性，直接new了话是获取不到这个属性的
	static count: number = 0
	constructor(_name: string, _age: number, _address: string) {
		this.name = _name
		this.age = _age
		this.address = _address
		People.count ++
	}
	// 当我们没有进行初始值的赋予的时候，可以用！来关闭检测
	// name!: string
	// age!: number
	// address!: string
	
	doEat() {}
	doSleep() {}
}

let p = new People('wangwu', 23, 'xxx小区')
console.log(People.count)
p.doEat()
// 静态成员（静态属性+静态方法）
export {
	People,
	p
}