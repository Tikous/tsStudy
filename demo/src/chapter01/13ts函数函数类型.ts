// function info(name: string, age: number): number {
// 	console.log(name, age)
// 	return 3
// }
// info('wangwu', 23)

// let info = function (name: string, age: number): number {
// 	console.log(name, age)
// 	return 3
// }
// info('wangwu', 23)

// let info: (name: string, age: number) => number = 
// 	function (name, age) {
// 		console.log(name, age)
// 		return 3
// 	}
// info('wangwu', 23)

// type TypeInfoFun = (name: string, age: number) => number
// let info: TypeInfoFun = function (name, age) {
// 	console.log(name, age)
// 	return 3
// }
// info('wangwu', 23)

// rest参数
function info(name: string, age: number, ...rest: any) {
	console.log(name, age, rest)
	return rest
}
let a = info('wangwu', 23, '111', 111)
console.log(a)