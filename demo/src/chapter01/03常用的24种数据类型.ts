/* 
	基本的数据类型
	number, string, boolean, symbol, null, undefined
*/

/* 
	根类型 Object, {}
	设置Object，那么它可以是任何类型的父类型，所以可以设置任何值
	{}是Object的简写，两者其实是一样的
*/
let data: Object = 3

/* 
	对象类型
	Array, object, function
*/
let data2: object = {}
let data3: object = 123

// 枚举类型 enum

/* 
	其他特殊类型
	any, unknown, never, void, 元组（tuple）,可变元组
*/

/* 
	合成类型
	联合类型，交叉类型
*/
// 联合类型 或的关系
let str: string | number = 'abc'
// 交叉类型 与的关系
type Obj1 = {username: string}
type Obj2 = {age: number}
let obj1: Obj1 = {username: '123'}
let obj2: Obj2 = {age: 23}

let obj3: Obj1 & Obj2 = {
	username: '123',
	age: 123
}
// let str2: string & number = '123' // string和number不可能合并在一起


/* 
	字面量数据类型
*/
type num = 1|2|3
let n: num = 3 // 只能给1、2、3

type increaseFlag = 0|1
function isStartUp(increase: increaseFlag) {
	if(increase) {
		console.log('open')
	} else {
		console.log('close')
	}
}
isStartUp(1)


// 添加这个语句，可以设置本文件变量的作用域为非全局的
export {
	data,
	data2
	data3,
	str,
	obj1,
	obj2,
	obj3,
	n
}
