class ArrayList<T=any> {
	// 泛型的中转，并不是最终的使用
	arr: Array<T>
	index: number = 0
	constructor() {
		this.arr = []
	}
	add(ele: T) {
		this.arr[this.index++] = ele
	}
	get(index: number) {
		return this.arr[index]
	}
}

// 当我们没有给这个泛型赋值的时候，它会直接使用我们给定的默认类型，也就是第一行定义的any
let arrList = new ArrayList()
// let arrList = new ArrayList<string>()
arrList.add('abc')

export {}