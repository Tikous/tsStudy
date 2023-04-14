// 可索引签名

// 接口内部的属性名和数量不确定
interface Product {
	name: string,
	price: number,
	// 可索引签名
	// 这里边的string定义的是下边键的类型，如果是number了话，那么下边的键只能是数字
	// 左边any声明的类型，一定要兼容上边各属性的各种类型
	[x: string]: any
	// [x: string]: string | number
}

let p: Product = {
	name: 'ok',
	price: 100,
	// 有了可索引签名，就算出现了interface里边没有定义的属性也没有问题
	account: 100,
	des: '111',
	[Symbol('123')]: 100,
	100: 'ok',
	fun() {}
}

export {
	p
}