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
type ObjKeysType<T extends object, K extends keyof T> = K extends keyof T ? K : never
type TestObjKeysTyp = ObjKeysType<ObjTyp, 'username' | 'age'>

const obj = new ObjectRefImpl<ObjTyp, 'age'>({username: 'wangwu', age: 23}, 'age')
console.log(obj.value) // 23

export {
	obj
}