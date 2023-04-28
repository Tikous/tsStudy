// interface Ref {
// 	value: any
// }
// let ref: Ref = {
// 	value: {username: 'wangwu', age: 23}
// }
// 在使用any类型的时候，编译器无法识别出来.之后具体的属性有哪些
// ref.value.age


interface Ref<T> {
	value: T
}

let ref: Ref<number> = {
	value: 23
}
console.log(ref.value)

type Student = {name: string, age: number}
let ref2: Ref<Student> = {
	value: {name: 'wangwu', age: 23}
}
console.log(ref2.value.name)

export {}