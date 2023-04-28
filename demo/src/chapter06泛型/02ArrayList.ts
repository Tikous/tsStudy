class ArrayList<T> {
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

let arrList = new ArrayList<string>()
arrList.add('abc')

let arrList2 = new ArrayList<{ username: string, age: number}>()
arrList2.add({ username: 'wangwu', age: 23 })

export {}