/* 
	noImplicitAny
	对any进行检查
*/
// 如果不对p的类型进行设置，那么这个时候会报错
function test(p: string) {
	console.log(p)
}

// let obj = {username: 'wangwu', age: 23}
// let username = 'username'
// obj[username] // 这里如果我们将username设置为let并且不想让报错了话，可以将noImplicitAny设置为false

/* 
	strictNullChecks
	对undefined、null等类型赋值进行检查
*/
let str: string = undefined


/* 
	strictPropertyInitialization(必须和strictNullChecks一起使用)
	属性设置必须有初始值，设置为false不检查
	也可以将属性设置为 xxx?: string / xxx!: string
*/
class Customer {
	custname: string
}

/* 
	noImplicitReturns
	检查所有的判断范围是否都有返回
*/
function fn(num: number) {
	if (num > 3) return 3
	else if (num > 3 && num < 100) return 10
	return 0
}

/* 
	noUnusedLocals
	判断函数或变量声明之后是否有被使用
	noUnusedParameters
	判断函数参数是否有被使用
*/

export {
	test, str, Customer, fn
}