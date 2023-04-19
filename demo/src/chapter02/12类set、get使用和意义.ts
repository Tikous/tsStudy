class People {
	name: string
	_age!: number
	address: string
	static count: number = 0
	constructor(_name: string, _address: string) {
		this.name = _name
		this.address = _address
	}
	set age(val: number) {
		if (val > 10 && val < 128) {
			this._age = val
		} else {
			throw new Error('年龄不在合适的范围')
		}
	}
	get age() {
		return this._age
	}
	doEat() {}
	doSleep() {}
}

// 这里我们实例化传参的时候，300传进去是非常不符合实际情况的，所以我们需要在类里边进行一些参数判断
let p = new People('wangwu', 'xxx小区')
p.age = 200
export {
	People,
	p
}