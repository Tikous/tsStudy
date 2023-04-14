// 另一种定义对象类型的类型

/* 
	interface和type都可以定义对象，但是interface定义的对象有一些好处
	
	1.interface定义的对象是可以继承的
*/

// 只能定义，不能去实现
interface Product {
	name: string,
	price: number,
	account: number,
	buy(): void
}

let p: Product = {
	name: 'phone',
	price: 100,
	account: 10,
	buy() {}
}

// 宠物的基本属性
interface Pet {
	name: string,
	love: number,
	health: number,
	toHealth(): void
}
// interface继承
interface Dog extends Pet {
	// 种类
	strain: string,
	guardHome(): void
}

interface List {
	add(): void,
	remove(): void
}
class ArrayList implements List {
	add(): void {
	}
	remove(): void {
	}
}
class LinkedList implements List {
	add(): void {
	}
	remove(): void {
	}
}