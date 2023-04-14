/* 
	相同点：any和unknown可以是任何类的父类
	不同点：any也可以是任何类的子类
		   不能拿unknown类型的变量来获取任何属性和方法
	
	等号左边的是父类类型，右边的是子类类型
*/

// let num: Array<string> = ['ab', 'df']
// let data: any = num

// any也可以是任何类的子类
let data: any = ['ab', 'df']
let num: number = data

let data1: unknown = ['ab', 'df']
let num1: number = data1

function getData1(data: any) {
	console.log(data.name)
}
function getData2(data: unknown) {
	// 不能拿unknown类型的变量来获取任何属性和方法
	// 即使传递过来的参数当中有相应的属性也不能获取到
	console.log(data.name)
}
// 当我只是想将参数传递到某个方法然后再进行后续传递，可以使用unknown
function ref(value?: unknown) {
	return xxxFun(value)
}
function xxxFun(value) {
}

export {
	num,
	data1,
	num1,
	getData1,
	getData2,
	ref,
	xxxFun
}