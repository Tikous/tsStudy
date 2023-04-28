// Vue3 源码中的泛型约束
class ObjectRefImpl<T extends object, K extends keyof T> {
	public readonly __v_isRef = true
	constructor(private readonly _objcet: T, private readonly _key: K) {}
	get value() {
		return this._objcet[this._key]
	}
	set value(newVal) {
		this._objcet[this._key] = newVal
	}
}

type ObjTyp = { username: string; age: 23 }
/* 
	当我们将new ObjectRefImpl的泛型给去掉，它并不会报错
	而是会将传过去的参数，在上边的constructor里直接进行反向识别
*/
// const obj = new ObjectRefImpl({username: 'wangwu', age: 23}, 'age')
const obj = new ObjectRefImpl<ObjTyp, 'age'>({	username: 'wangwu', age: 23}, 'age')

export { obj }