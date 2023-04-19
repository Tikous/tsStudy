import * as list from './classes'
const classList: any = list
// 遍历里边的所有类
Object.keys(list).map((item: any) => {
	let example = new classList[item]
	// 获取类当中的属性名
	let propertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(example));
	propertyNames.forEach((cell: string) => {
		// 将当前类的原型和单个属性名传递
		interceptor(classList[item].prototype, cell)
	})
})

function interceptor(prototype: any, fnName: string) {
	// 获取当前对象的某个属性的属性描述
	const dataProp = Object.getOwnPropertyDescriptor(prototype, fnName)
	const targetMethod = dataProp!.value
	// 重写属性描述当中的value
	dataProp!.value = function(...args: any[]) {
		console.log('前置拦截')
		targetMethod.apply(this, args)
		console.log('后置拦截')
	}
	// 将重写后的value重新绑定到相应的属性上
	Object.defineProperty(prototype, fnName, dataProp!)
}
let dog = new list.Dog('11', 2)
dog.doEat('111', '222')