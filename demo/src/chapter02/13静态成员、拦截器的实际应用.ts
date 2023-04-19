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

class StringUtil {
	static trimSpace(str: string) {
		return str.replace(/\s+/g, "")
	}
}

/* 
	Object.getOwnPropertyDescriptor
	查看某个属性的描述对象（value、writable...）
	这个方法每次获取都会开辟一个新的空间
*/
const dataProp = Object.getOwnPropertyDescriptor(People.prototype, 'doEat')
const targetMethod = dataProp!.value
dataProp!.value = function(...args: any[]) {
	args = args.map((arg) => {
		if (typeof arg === "string") return StringUtil.trimSpace(arg)
		return arg
	})
	console.log('前置拦截')
	targetMethod.apply(this, args)
	console.log('后置拦截')
}
// dataProp!.value('wangwu', 'xxx小区')
Object.defineProperty(People.prototype, 'doEat', dataProp!)
/* 
	以上操作，首先将People中的doEat拿到赋值给dataProp，然后暂存其value到targetMethod当中
	然后将dataProp.value重写，相当于将doEat重写
	然后在从原型上，将People中的doEat赋值为dataProp
*/
let p = new People('peter', 23, 'xx小区')
p.doEat('张 三', 'j j')

export {
	People,
	dataProp
}